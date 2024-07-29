import { template } from 'lodash'
import { defineStore } from 'pinia'

export const useDragStore = defineStore('dragData', {
  persist: {
    enabled: true, //开启数据持久化
    strategies: [
      {
        key: 'dragData', //给一个要保存的名称
        storage: localStorage, //sessionStorage / localStorage 存储方式
      },
    ],
  },
  state: () => {
    return {
      inputObjList: [
        { displayName: '机构', keyName: 'org', inputType: 'OrgInput', val: '' },
        { displayName: '时间', keyName: 'time', inputType: 'TimeInput', val: '' },
      ],
      templateList: [],
    }
  },
  getters: {
    getData() {
      return this.inputObjList
    },
    templateNameList() {
      console.log(this.templateList, 666)
      let result = []
      this.templateList.map((item) => {
        result.push(item.name)
      })
      return result
    },
  },
  actions: {
    updateData(data) {
      this.inputObjList.push(data)
    },
    saveTemplate(template) {
      this.templateList.push(template)
    },
  },
})
