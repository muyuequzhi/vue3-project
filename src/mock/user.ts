import { MockMethod } from 'vite-plugin-mock'
export default [
  // 获取用户信息
  {
    url: '/getData',
    method: 'get',
    response: () => {
      return {
        code: 200, //请求成功状态码
        msg: 'success',
        data: {
          username: 'root',
          roles: ['admin'],
          permission: ['sys:add'],
        },
      }
    },
  },
] as MockMethod[]
