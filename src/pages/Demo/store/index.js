import { defineStore } from 'pinia'

export const useDragStore = defineStore('markdown', {
  persist: {
    enabled: true, //开启数据持久化
    strategies: [
      {
        key: 'markdown', //给一个要保存的名称
        storage: localStorage, //sessionStorage / localStorage 存储方式
      },
    ],
  },
  state: () => {
    return {
      globalData: {
        cursor: 0,
        globalId: 0,
        curId: 0,
      },
    }
  },
  getters: {
    getData() {
      return this.globalData
    },
  },
  actions: {
    updateData(key, val) {
      console.log(key, val)
      this.globalData[key] = val
    },
    updateCurId(id) {
      this.curId = id
    },
  },
})
