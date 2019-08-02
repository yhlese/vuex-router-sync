// 验证手机号
const mobileReg = /^1[3456789]\d{9}$/
export function telValidator(rule, value, callback) {
  if (!value) {
    callback(new Error("请输入11位手机号"));
  } else if (!mobileReg.test(value)) {
    callback(new Error("请输入正确手机号"));
  } else {
    callback();
  }
};
// 验证邮箱
const emailReg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
export function mailCheck(rule, value, callback) {
  if (!value) {
    callback(new Error("请输入邮箱"));
  } else if (!emailReg.test(value)) {
    callback(new Error("请输入正确邮箱格式"));
  } else {
    callback();
  }
};

const pwdReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/
export function pwdCheck(rule, value, callback) {
  if (!value) {
    callback(new Error("请填写6-16位新密码"));
  } else if (!pwdReg.test(value)) {
    callback(new Error("请输入正确密码格式"));
  } else {
    callback();
  }
};
// 验证字母和数字
const numWordReg = /^[A-Za-z0-9]+$/
export function numWordCheck(rule, value, callback) {
  if (!value) {
    callback(new Error("账号不能为空"));
  } else if (!numWordReg.test(value)) {
    callback(new Error("账号只能为数字、字母"));
  } else {
    callback();
  }
};
