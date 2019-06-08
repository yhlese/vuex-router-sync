import moment from "moment";

const format = "YYYY-MM-DDTHH:mm:ss.SSSZZ";

function getTimeString(isoString) {
    let regAll = /isc::{(.*?)}$/gi;
    let r = regAll.exec(isoString);
    if (r) {
        let value = convertTime(r[1].replace(/\s*/g, ""));
        isoString = getTimeString(isoString.replace(r[0], value));
    }
    return isoString;
}

function convertTime(str) {
    if (!str || typeof str !== "string") {
        return;
    }
    let duration, startTime;
    const nowFormat = /Today\((.*?|)\)/i;
    const secondPraFormat = /\)\((.*?|)\)/i;
    const add8601 = /\+iso8601::\((.*?)\)/gi;
    const minus8601 = /-iso8601::\((.*?)\)/gi;
    const symbol = /[+-]/g;
    const s = symbol.exec(str);
    const n = nowFormat.exec(str);
    const setExct = secondPraFormat.exec(str);
    const setJson = setExct && setExct[1] ? JSON.parse(setExct[1]) : undefined;
    if (!n && !s) {
        console.log("format time error in:" + str);
        return;
    }
    startTime = n && n[1] ? moment(n[1], "hh:mm:ss") : moment();
    startTime = setExct && setJson ? startTime.set(setJson).utc() : startTime.utc();
    duration = addMomentList(add8601, str, duration, "add");
    duration = addMomentList(minus8601, str, duration, "minus");
    if (moment.isDuration(duration)) {
        startTime.add(duration);
    }
    return startTime.format(format);
}

function addMomentList(reg, value, duration, action) {
    let r,
        list = [];
    while ((r = reg.exec(value)) !== null) {
        list.push(r[1]);
    }
    list.forEach(function(m) {
        m = action === "minus" ? "-" + m : m;
        let d = moment.duration(m);
        if (moment.isDuration(d)) {
            if (moment.isDuration(duration)) {
                duration.add(d);
            } else {
                duration = d;
            }
        }
    });
    return duration;
}

export default getTimeString;