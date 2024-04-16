import { RouteRecordRaw, RouteLocationNormalized } from 'vue-router'

/**
 * @param {string} roles 用户角色
 * @param {RouteRecordRaw} route 单个路由
 * @return {*}
 * @description: 判断用户是否有权限访问单个路由
 */
export const hasPermission = (roles: string[], route: RouteRecordRaw | RouteLocationNormalized) => {
  if (route.meta && route.meta.roles) {
    return roles.some((role) => {
      if (route.meta?.roles !== undefined) {
        return route.meta.roles.includes(role)
      } else {
        return false
      }
    })
  } else {
    return true
  }
}

/**
 * @param {RouteRecordRaw} routes 访问的动态列表
 * @param {string} roles 用户角色
 * @return {*}
 * @description: 筛选可访问的动态路由
 */
export const filterAsyncRoutes = (routes: RouteRecordRaw[], roles: string[]) => {
  const res: RouteRecordRaw[] = []
  routes.forEach((route) => {
    const r = { ...route }
    if (hasPermission(roles, r)) {
      if (r.children) {
        r.children = filterAsyncRoutes(r.children, roles)
      }
      res.push(r)
    }
  })
  return res
}
