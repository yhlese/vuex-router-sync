import axios from "axios";
import store from "../store/index";
import {
  Base64
} from "js-base64";

let host = "";
console.log(process.env);
// 跨域代理
if (process.env.NODE_ENV === "development") {
  host += "/api";
} else {
  host += "http://";
}

const server = axios.create({
  baseURL: host,
  responseType: "json"
});

server.interceptors.request.use(
  res => {
    let userInfo = store.state.userInfo || "";
    res.headers = Object.assign({}, res.headers, {
      "user-id": userInfo.id || "",
      "user-name": Base64.encode(userInfo.name) || "",
      "user-token": userInfo.token || ""
    });
    return res;
  },
  error => {
    return Promise.reject(error);
  }
);

server.interceptors.response.use(
  response => {
    // 约定status 大于300 是请求成功
    if (response.status < 300) {
      const {
        code
      } = response.data;

      // 约定code = 0; 为成功
      if (!code) {
        return Promise.resolve(response);
      } else {
        window.app.$message.error(response.data.msg || "网络请求失败");
        return Promise.reject(response);
      }
    }
    return Promise.reject(response);
  },
  error => {
    const err = err.response;

    // 约定401 鉴权不通过
    if (err && err.status === 401) {
      window.app.$message.error("用户信息已失效，请重新登录");
      store.commit("set_user_info");
    }
    return Promise.reject(error);
  }
);

function yAxios(params) {
  server(params).then(
    res => {
      params.sucFn && params.sucFn(res);
    },
    error => {
      params.errorFn && params.errorFn(error);
    }
  );
}

export default yAxios;
