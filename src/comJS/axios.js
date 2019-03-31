import axios from "axios";
import store from "../store/index";
import {
  Base64
} from "js-base64";

let host = "";
// 跨域代理
if (process.env.NODE_ENV === "development") {
  host += "/api";
} else {
  host += "http://XXX.com";
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
        return Promise.reject(response);

      }
    }
    return Promise.reject(response);
  },
  error => {
    // 约定401 鉴权不通过
    if (error.response && error.response.status === 401) {
      store.commit("SET_USER_INFO");
    }
    return Promise.reject(error);
  }
);

function yAxios(params) {
  return new Promise((resolve, reject) => {
    server(params).then(
      res => {
        resolve(res.data);
      },
      error => {
        reject(error);
      }
    );
  })


}

export {
  yAxios
};
