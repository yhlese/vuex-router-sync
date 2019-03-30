import * as types from './mutation-types';

const mutations = {
  [types.SET_USER_INFO](state, data) {
    state.userInfo = data;
  }
}

export default mutations;
