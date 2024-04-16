import { defineStore } from 'pinia'

export const useUserStore = defineStore('userInfo', {
  state: () => {
    return {
      // 所有这些属性都将自动推断其类型
      username: '',
      roles: [],
      routes: [],
      permission: [],
    }
  },
  actions: {},
})
