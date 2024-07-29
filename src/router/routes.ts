import { RouteRecordRaw } from 'vue-router'
const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/demo',
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/login/index.vue'),
    meta: { roles: [] },
    children: [],
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('@/pages/test/index.vue'),
    meta: { roles: [] },
    children: [],
  },
  {
    path: '/components',
    name: 'Component',
    component: () => import('@/pages/component/index.vue'),
    meta: { roles: [] },
    children: [],
  },
  {
    path: '/demo',
    name: 'demo',
    component: () => import('@/pages/Demo/index.vue'),
    meta: { roles: [] },
    children: [],
  },
  // {
  //   path: '/404',
  //   name: '404',
  //   component: () => import('@/pages/404/index.vue'),
  //   meta: { roles: [] },
  //   children: [],
  // },
  {
    path: '/403',
    name: '403',
    component: () => import('@/pages/403/index.vue'),
    meta: { roles: [] },
    children: [],
  },
  {
    path: '/:pathMatch(.*)*',
    name: '',
    component: () => import('@/pages/404/index.vue'),
    // redirect: '/404',
  },
]

/**
 * 动态路由
 * 用来放置有权限（roles 属性）的路由
 */
const asyncRoutes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: '首页',
    icon: 'home',
    component: () => import('@/layouts/DefaultLayout.vue'),
    redirect: '/home/index',
    children: [
      {
        path: 'index',
        name: '首页',
        component: () => import('@/pages/home/index.vue'),
        meta: { roles: ['admin', 'default'] },
      },
    ],
  },
  {
    path: '/dashboard',
    name: '工作台',
    icon: 'set',
    component: () => import('@/layouts/DefaultLayout.vue'),
    redirect: '/dashboard/paper',
    children: [
      {
        path: 'paper',
        name: '工作周报',
        component: () => import('@/pages/dashboard/paper.vue'),
        meta: { roles: ['admin'] },
      },
      {
        path: 'setting',
        name: '移动端参数设置',
        component: () => import('@/pages/dashboard/setting.vue'),
        meta: { roles: ['admin'] },
      },
    ],
  },
  {
    path: '/client',
    name: '客户中心',
    icon: 'account',
    component: () => import('@/layouts/DefaultLayout.vue'),
    redirect: '/client/index',
    children: [
      {
        path: 'account',
        name: '账户查询',
        component: () => import('@/pages/client/account.vue'),
        meta: { roles: ['admin'] },
      },
      {
        path: 'tag',
        name: '客户标签管理',
        component: () => import('@/pages/client/tag.vue'),
        meta: { roles: ['admin'] },
      },
      {
        path: 'division',
        name: '客户分户管理',
        component: () => import('@/pages/client/division.vue'),
        meta: { roles: ['admin'] },
      },
    ],
  },
]
// const menus = [
//   {
//     id: 1,
//     pid: 0,
//     path: '/receipt',
//     name: '',
//     component: 'layout/Layout',
//     redirect: '',
//     hidden: 'false',
//     meta: '',
//   },
//   {
//     id: 2,
//     pid: 1,
//     path: 'index',
//     name: 'Receipt',
//     component: 'receipt/index',
//     redirect: '',
//     hidden: 'false',
//     meta: '{"title": "收款管理", "icon": "receipt"}',
//   },
//   {
//     id: 3,
//     pid: 0,
//     path: '/payment',
//     name: '',
//     component: 'layout/Layout',
//     redirect: '',
//     hidden: 'false',
//     meta: '',
//   },
//   {
//     id: 4,
//     pid: 3,
//     path: 'index',
//     name: 'Payment',
//     component: 'payment/index',
//     redirect: '',
//     hidden: 'false',
//     meta: '{"title": "付款管理", "icon": "payment"}',
//   },
//   {
//     id: 5,
//     pid: 0,
//     path: '/crm',
//     name: '',
//     component: 'layout/Layout',
//     redirect: '',
//     hidden: 'false',
//     meta: '',
//   },
//   {
//     id: 6,
//     pid: 5,
//     path: 'index',
//     name: 'Crm',
//     component: 'crm/index',
//     redirect: '',
//     hidden: 'false',
//     meta: '{"title": "客户管理", "icon": "people"}',
//   },
//   {
//     id: 7,
//     pid: 0,
//     path: '/upload_product',
//     name: '',
//     component: 'layout/Layout',
//     redirect: '',
//     hidden: 'false',
//     meta: '',
//   },
//   {
//     id: 8,
//     pid: 7,
//     path: 'index',
//     name: 'productUpload',
//     component: 'productUpload/index',
//     redirect: '',
//     hidden: 'false',
//     meta: '{"title": "测评商品上传", "icon": "upload"}',
//   },
// ]
export { constantRoutes, asyncRoutes }
//从vue-router扩展属性
//RouteMeta接口来键入meta字段
declare module 'vue-router' {
  interface _RouteRecordBase {
    id?: number | string
    icon?: string
  }
  interface RouteMeta {
    // is optional
    roles?: Array<string>
  }
}
