import * as VueRouter from 'vue-router'
import { constantRoutes, asyncRoutes } from './routes'
import { useUserStore } from '@/stores/userInfo.js'
import { hasPermission } from '@/router/permission'

const whiteList: Array<string> = ['/login', '/404', '/test', '/components', '/demo']
// 创建路由实例
const router = VueRouter.createRouter({
  // history模式
  history: VueRouter.createWebHistory(),
  routes: [...constantRoutes, ...asyncRoutes],
})

router.beforeEach((to, from) => {
  document.dispatchEvent(new CustomEvent('show-loading'))
  return true
})

router.afterEach((to, from) => {
  document.dispatchEvent(new CustomEvent('hide-loading'))
})
export default router
