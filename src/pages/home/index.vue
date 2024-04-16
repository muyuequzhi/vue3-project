<template>
  <div>home</div>
  <div class="chartWrapper">
    <div ref="box" style="height: 200px; flex: 1"></div>
    <MyChart :option="options" width="300px" height="200px" />
    <div style="width: 220px">
      <LineChart :option="options" width="100%" height="200px" />
    </div>
  </div>
  <!-- 按钮 -->
  <div>
    <el-button>Default</el-button>
    <el-button v-permission="['sys:add']">Default</el-button>
    <el-button v-permission="['sys:delete']">wuwu</el-button>
    <el-button v-longpress="longpress">longpress</el-button>
    <el-button v-throttle="{ fn: throttle, event: 'click' }">throttle</el-button>
    <el-button v-debounce="{ fn: debounce, event: 'click' }">debounce</el-button>
  </div>
  <FullEditor />
</template>
<script setup lang="ts">
import { onMounted, getCurrentInstance, ref } from 'vue'
import { ElButton } from 'element-plus'
import MyChart from '@/components/MyChart/base.vue'
import LineChart from '@/components/MyChart/LineChart.vue'
import FullEditor from '@/components/FullEditor/index.vue'

import { EChartsOption } from 'echarts'
const options: EChartsOption = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line',
    },
  ],
}
const echarts = getCurrentInstance()?.appContext.config.globalProperties.$echarts
//通过ref获取box盒子
let box = ref(null)
//在生命周期中书写
onMounted(async () => {
  let myecharts = echarts.init(box.value)
  //图表内容及配置
  let option = {
    xAxis: {},
    yAxis: {},
    series: [
      {
        symbolSize: 20,
        data: [
          [10.0, 8.04],
          [8.07, 6.95],
          [13.0, 7.58],
          [9.05, 8.81],
          [11.0, 8.33],
          [14.0, 7.66],
          [13.4, 6.81],
          [10.0, 6.33],
          [14.0, 8.96],
          [12.5, 6.82],
          [9.15, 7.2],
          [11.5, 7.2],
          [3.03, 4.23],
          [12.2, 7.83],
          [2.02, 4.47],
          [1.05, 3.33],
          [4.05, 4.96],
          [6.03, 7.24],
          [12.0, 6.26],
          [12.0, 8.84],
          [7.08, 5.82],
          [5.02, 5.68],
        ],
        type: 'scatter',
      },
    ],
  }
  //应用option到实例中
  myecharts.setOption(option)
  window.onresize = function () {
    console.log('窗口大小发生改变了')
    // echarts适配
    myecharts.resize()
  }
})

const longpress = () => {
  console.log('长按。。。。。。。。')
}
const throttle = () => {
  console.log('hhkhhjhjhjhjhjhj')
}
const debounce = () => {
  console.log(22222)
}
</script>
<style scoped>
@import url(./home.scss);
</style>
