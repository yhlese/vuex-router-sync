import dayjs from 'dayjs'

// 千分位分隔符表示价格
// 123456 => 123,456
function price(val, cancelFixed) {
  if (isNull(val) || isNaN(val)) return
  let USPrice = Number.parseFloat(val).toLocaleString()

  let lastDot = USPrice.toString().indexOf('.')
  // 完全是整数, 需要添加小数点
  if (lastDot === -1 && !cancelFixed) USPrice += '.00'

  // 返回数据是一位小数，用0补齐为两位小数
  if (USPrice.toString().substring(lastDot + 1).length === 1 && !cancelFixed) {
    USPrice += '0'
  }

  return USPrice
}

// 时间戳格式化
function formatDateTime(value, format = 'YYYY.MM.DD') {
  return dayjs(value).isValid() ? dayjs(value).format(format) : value
}
export function isNull(o) {
  return o === null || o === void 0
}


// 输入框校验
function formatNum(str, float = 2) {
  if (!str) return;
  str = str.toString();
  if (str.length > 1 && str.charAt(0) === '0' && str.charAt(1) !== '.') {
    return '';
  }
  const i = str.indexOf('.');
  let arr;

  if (i !== -1) {
    str.replace(/./g, '$');
    str.replace(/./g, '');
    str.replace(/$/g, '.');
    arr = str.split('.');
    str = arr[0];
  }
  const reg = /[^0-9]*/g;
  const newStr = str.replace(reg, '');
  const newStrFlot = arr && arr[1].replace(reg, '');
  return float !== 0 && i !== -1 ? newStr + '.' + newStrFlot.slice(0, float) : newStr;
}

function formatTel(str) {
  if (!str) return;
  str = str.toString();
  const i = str.indexOf('.');
  let arr;
  if (i !== -1) {
    str.replace(/./g, '$');
    str.replace(/./g, '');
    str.replace(/$/g, '.');
    arr = str.split('.');
    str = arr[0];
  }
  const reg = /[^0-9-]*/g;
  const newStr = str.replace(reg, '');
  const newStrFlot = arr && arr[1].replace(reg, '');
  return i !== -1 ? newStr + newStrFlot.slice(0, 0) : newStr;
}

function formatNotInputTxt(str) {
  if (!str) return;
  let newStr = ''
  if (/^[\u4e00-\u9fa5]{0,}$/.test(str)) {
    newStr = '';
  } else {
    newStr = str;
  }
  return newStr
}

export {
  price,
  formatTel,
  formatDateTime,
  formatNum,
  formatNotInputTxt
}
