import { defineAsyncComponent } from 'vue'
const componentList = [
  {
    name: 'Demo1',
    tagName: 'Vue',
    describe: '测试动态引入demo',
    content: defineAsyncComponent(() => {
      return import('@/pages/Demo/Demo1.vue')
    }),
  },
  {
    name: 'SlotDemo',
    tagName: 'Vue',
    key: 'slot',
    describe: '具名作用域插槽',
    // show: true,
    content: defineAsyncComponent(() => {
      return import('@/pages/Demo/Slot/index.vue')
    }),
  },
  {
    name: 'LineChart',
    tagName: 'Echarts',
    describe: 'echarts折线图',
    content: defineAsyncComponent(() => {
      return import('@/pages/Demo/Chart/LineChart.vue')
    }),
  },
  {
    name: 'BarChart',
    tagName: 'Echarts',
    describe: 'echarts堆叠柱状图',
    content: defineAsyncComponent(() => {
      return import('@/pages/Demo/Chart/BarChart.vue')
    }),
  },
  {
    name: 'useElementSize',
    tagName: 'Vue',
    key: 'computed, watch, onMounted',
    describe: '用composition api 实现动态改变元素宽度',
    content: defineAsyncComponent(() => {
      return import('@/pages/Demo/useElementSize.vue')
    }),
  },
  {
    name: 'form',
    tagName: 'Vue',
    describe: '表单输入绑定',
    // show: true,
    content: defineAsyncComponent(() => {
      return import('@/pages/Demo/form.vue')
    }),
  },

  {
    name: 'animate',
    tagName: 'Vue',
    describe: '常用动画',
    // show: true,
    content: defineAsyncComponent(() => {
      return import('@/pages/Demo/Animate.vue')
    }),
  },
  {
    name: 'Markdown',
    tagName: 'Vue',
    describe: 'Markdown',
    // show: true,
    content: defineAsyncComponent(() => {
      return import('@/pages/Demo/Markdown.vue')
    }),
  },

  {
    name: 'Xlsx',
    tagName: 'xlsx',
    describe: 'xlsx',
    // show: true,
    content: defineAsyncComponent(() => {
      return import('@/pages/Demo/Xlsx/index.vue')
    }),
  },
  {
    name: 'File',
    tagName: 'File',
    describe: 'File',
    // show: true,
    content: defineAsyncComponent(() => {
      return import('@/pages/Demo/File/index.vue')
    }),
  },
  {
    name: 'GroupView',
    tagName: 'GroupView',
    describe: 'GroupView',
    // show: true,
    content: defineAsyncComponent(() => {
      return import('@/pages/Demo/GroupView/index.vue')
    }),
  },
  {
    name: 'Table',
    tagName: 'Vue',
    describe: 'Table',
    show: true,
    content: defineAsyncComponent(() => {
      return import('@/pages/Demo/Table.vue')
    }),
  },
]

// 引入这个方法要用import componentList from 'index.ts'
export default componentList

// 引入这个方法要用import {newList} from 'index.ts'
export const newList = [1, 2, 3]
