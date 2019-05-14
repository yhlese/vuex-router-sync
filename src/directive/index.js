import Vue from 'vue';
var _ = require('lodash');

Vue.directive('formatNum', {
  update(el,{value,expression,arg},{context}) {
    let keys =expression.split('.');
    _.set(context,keys,formatNum(value,arg))
  }
});

// 输入框校验
function formatNum(str, float = 2) {
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