/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { defineStore } from 'pinia'
import { filterAsyncRoutes } from '@/router/permission'
import { constantRoutes, asyncRoutes } from '@/router/routes'
import router from '@/router/index'

export const useUserStore = defineStore('userInfo', {
  persist: {
    enabled: true, //开启数据持久化
    strategies: [
      {
        key: 'userInfo', //给一个要保存的名称
        storage: localStorage, //sessionStorage / localStorage 存储方式
      },
    ],
  },
  state: () => {
    return {
      // 所有这些属性都将自动推断其类型
      username: '',
      roles: [],
      routes: [],
      permission: [],
    }
  },
  actions: {
    registerUser(data) {
      this.username = data.username || ''
      this.roles = data.roles
      this.permission = data.permission
      // 路由后端给出时，重新构建路由
    },
    generateRoutes(roles) {
      //accessedRoutes:筛选出的动态路由
      const accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
      //将accessedRoutes和默认路由constantRoutes拼接得到完整可访问路由
      // this.routes = constantRoutes.concat(accessedRoutes)
      this.routes = accessedRoutes
      //通过addRoute将路由挂载到router上
      accessedRoutes.forEach((route) => {
        router.addRoute(route)
      })
      // 最后添加捕获所有路由，跳转404
      // router.addRoute({ path: '/:pathMatch(.*)*', name: '', redirect: '/404' })
      console.log('router2>>>>', router.getRoutes())
    },
    logout() {
      this.username = ''
      this.roles = []
      this.routes = []
      this.permission = []
      router.replace({ path: '/login' })
    },
  },
})

function ParseRoutes(menu) {
  const map = {}
  menu.forEach((item) => {
    if (!item.children) {
      item.children = []
    }
    map[item.id] = item
  })
  const routes = []
  for (const item of menu) {
    const parent = map[item.parentId]
    if (!parent) {
      routes.push(item)
    } else {
      parent.children.push(item)
    }
  }
  return routes
}

// const routes = ParseRoutes(menus)
// console.log('ParseRoutes>>>', routes)
