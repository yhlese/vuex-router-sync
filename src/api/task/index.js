import {
  yAxios
} from '@/comJs/axios';
let prefix = '/prize_wheel';


/**
 *  获取列表
 *
 * @param {*} data
 * @returns
 */
const getList = function (data = {}) {
  return yAxios({
    url: `${prefix}/omc/configs/listings`,
    data,
    method: 'post'
  });
};

export {
  getList
}
