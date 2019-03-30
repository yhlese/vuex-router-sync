const Assets = {
  name: 'assets',
  path: '/assets',
  desc: '基础设置',
  root: true
}
// 一级：活动
const ActivityManager = {
  name: 'raward',
  path: `${Assets.path}/act-manager`,
  desc: '活动管理',
  children: ['Reward']
}
// 二级：任务
const Reward = {
  name: 'reward',
  path: `${ActivityManager.path}/reward`,
  desc: '一级任务',
  default: true //自动选中效果
};

// 一级：奖励
const PrizeManager = {
  name: 'PrizeManager',
  path: `${Assets.path}/prize-manager`,
  desc: '奖励管理',
  children: ['PrizeLibrary', 'PrizeSend']
}
const PrizeLibrary = {
  name: 'prizeLibrary',
  path: `${PrizeManager.path}/prize-library`,
  desc: '奖励库',
  default: true, //自动选中效果
  level: 1,
  belongTo: 'prizeLibrary' //是否是归属于同一个面包屑的关键字
};
const PrizeLibraryAdd = {
  name: 'prizeLibraryAdd',
  path: `${PrizeLibrary.path}/prize-add`,
  desc: '奖品库配置',
  level: 2,
  belongTo: 'prizeLibrary'
};
const PrizeSend = {
  name: 'PrizeSend',
  path: `${PrizeManager.path}/prize-send`,
  desc: '奖品派发'
};


export default {
  Assets,
  ActivityManager,
  Reward,
  PrizeManager,
  PrizeLibrary,
  PrizeLibraryAdd,
  PrizeSend
}
