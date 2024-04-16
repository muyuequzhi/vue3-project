import * as VueRouter from 'vue-router'
import { constantRoutes } from './routes'
import { useUserStore } from '@/stores/userInfo.js'
import { hasPermission } from '@/router/permission'
// 定义路由白名单
const whiteList: Array<string> = ['/login', '/404', '/test']
// 定义标识，记录路由是否添加
let registerRouteFresh = true
// 创建路由实例
const router = VueRouter.createRouter({
  // history模式
  history: VueRouter.createWebHistory(),
  routes: constantRoutes,
})

router.beforeEach((to, from) => {
  console.log(to, from)
  console.log('registerRouteFresh>>>', registerRouteFresh)
  const userStore = useUserStore()
  //用户已登录
  if (userStore.username) {
    if (to.path === '/login') {
      //如果登录，并准备进入login页面，则重定向到主页
      return '/home'
    } else {
      // 拦截地址栏访问无权限路由
      const auth = hasPermission(userStore.roles, to)
      if (!whiteList.includes(to.path) && !auth && to.path !== '/403') {
        return { path: '/403', replace: true }
      } else {
        if (registerRouteFresh) {
          userStore.generateRoutes(userStore.roles)
          // 避免重复添加
          registerRouteFresh = false
          if (to.redirectedFrom?.path) {
            return { ...to.redirectedFrom, replace: true }
          } else {
            return { ...to, replace: true }
          }
        } else {
          return true
        }
      }
    }
  } else {
    // 未登录不在白名单内跳转登录
    if (!whiteList.includes(to.path)) {
      if (to.path !== '/login') {
        return { name: 'Login' }
      }
    }
  }
})

router.onError(() => {
  router.push({ path: '/404/page' })
})
export default router
