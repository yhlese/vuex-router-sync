const MemberManager = {
  name: 'memberManager',
  path: '/member-manager',
  desc: '会员管理模块',
  root: true
};
const MemberManagerSub = {
  name: 'memberManagerSub',
  path: `${MemberManager.path}/sub`,
  desc: '会员管理',
  single: true,
  default: true, //自动选中效果,
  belongTo: 'memberSub'
};
export default {
  MemberManager,
  MemberManagerSub
}
