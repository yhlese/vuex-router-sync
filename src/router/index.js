import Vue from 'vue'
import Router from 'vue-router'

import RouterConfig from './router.config'
const Index = () => import('@/components/index.vue')
const Assets = () => import('@/components/main/assets/index.vue')
const Task = () => import('@/components/main/assets/task/index.vue')
const PrizeLibrary = () => import('@/components/main/assets/prize/library/index.vue')
const PrizeLibraryMain = () => import('@/components/main/assets/prize/library/Main.vue')
const PrizeLibraryAdd = () => import('@/components/main/assets/prize/library/AddPrize.vue')
const PrizeSend = () => import('@/components/main/assets/prize/send/index.vue')
const Member = () => import('@/components/main/member/index.vue')


Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes: [{
    name: RouterConfig.Main.name,
    path: RouterConfig.Main.path,
    component: Index,
    children: [
      // main index
      {
        name: RouterConfig.Main.name,
        path: RouterConfig.Main.path,
        component: Assets
      },
      // 资源管理
      {
        name: RouterConfig.Assets.Assets.name,
        path: RouterConfig.Assets.Assets.path,
        component: Assets,
        children: [
          // 活动管理:任务
          {
            name: RouterConfig.Assets.Reward.name,
            path: RouterConfig.Assets.Reward.path,
            component: Task,
          },
          // 奖励管理:奖品库
          {
            name: RouterConfig.Assets.PrizeLibrary.name,
            path: RouterConfig.Assets.PrizeLibrary.path,
            component: PrizeLibrary,
            children: [
              // 奖励库
              {
                name: RouterConfig.Assets.PrizeLibrary.name,
                path: RouterConfig.Assets.PrizeLibrary.path,
                component: PrizeLibraryMain,
              },
              // 添加奖品
              {
                name: RouterConfig.Assets.PrizeLibraryAdd.name,
                path: RouterConfig.Assets.PrizeLibraryAdd.path,
                component: PrizeLibraryAdd,
              },
            ]
          },
          // 奖励管理:派奖
          {
            name: RouterConfig.Assets.PrizeSend.name,
            path: RouterConfig.Assets.PrizeSend.path,
            component: PrizeSend,
          }
        ]
      },
      // 会员管理
      {
        name: RouterConfig.Member.MemberManagerSub.name,
        path: RouterConfig.Member.MemberManagerSub.path,
        component: Member,
      }
    ]
  }, ]
})

router.beforeEach((to, from, next) => {
  console.log('to', to)
  window.document.title = to.name;
  switch (to.path) {
    case RouterConfig.Main.path:
      next({
        path: RouterConfig.Assets.Reward.path
      })
      return;
    case RouterConfig.Assets.Assets.path:
      next({
        path: RouterConfig.Assets.Reward.path
      })
      return;
    case RouterConfig.Member.MemberManager.path:
      next({
        path: RouterConfig.Member.MemberManagerSub.path
      })
      return;
    default:
      break;
  }
  next();
})

export default router;
