<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { baseOption } from './baseOption.ts'
import * as echarts from 'echarts'

const props = defineProps({
  width: {
    type: String,
    default: '100%',
  },
  height: {
    type: String,
    default: '100%',
  },

})

let { xAxis } = baseOption
xAxis.data = ['3月', '5月', '7月', '9月', '11月']
let option = {

  grid: baseOption.grid,
  xAxis: xAxis,
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: [
      {
        name: '贷款余额',
        icon: 'circle',
      },
      {
        name: '贷款年日均',
      }
    ],
    right: 0,
    top: 0,
    textStyle: {
      color: '#809FB8'
    },
    itemHeight: 10,
  },
  yAxis: [
    {
      type: 'value',
      name: '单位：个',
      nameTextStyle: {
        color: '#809FB8'
      },
      axisLabel: {
        color: '#809FB8'
      },
      // alignTicks: true, 多y轴对齐
      min: 0,
      max: 200,
      spiltNumber: 5,
      interval: (200) / 5
    },
    {
      type: 'value',
      name: '单位：%',
      nameTextStyle: {
        color: '#809FB8'
      },
      splitLine: {
        // show: false
      },
      axisLabel: {
        color: '#809FB8'
      },
      // alignTicks: true,
      min: 0,
      max: Math.ceil(99 / 5) * 5,
      spiltNumber: 5,
      interval: Math.ceil(99 / 5)
    },
  ],
  series: [
    {
      yAxisIndex: 0,
      name: '贷款余额',
      data: [120, 200, 150, 80, 70],
      type: 'bar',
      itemStyle: {
        color: '#8091EE'
      },
      barWidth: 20,
      barGap: 0,

    },
    {
      yAxisIndex: 1,
      name: '贷款年日均',
      type: 'line',
      stack: 'Total',
      symbol: 'none',
      itemStyle: {
        color: '#EC9B8C'
      },
      data: [20, 82, 91, 34, 90]
    },

  ]
};

const styleObj = ref({
  width: props.width,
  height: props.height,
})

const chartRef = ref()
onMounted(() => {
  var myChart = echarts.init(chartRef.value)
  myChart.setOption(option)
  window.addEventListener('resize', () => {
    myChart.resize({
      animation: {
        duration: 300,
        easing: 'cubicInOut',
      },
    })
  })
})

// 组件销毁前一定要取消监听的事情，不然会影响性能和占用内存
onBeforeUnmount(() => {
  window.removeEventListener('resize', () => {
    myChart.resize({
      animation: {
        duration: 300,
        easing: 'cubicInOut',
      },
    })
  })
})
</script>
<template>
  <div>
    <div ref="chartRef" :style="styleObj"></div>
  </div>
</template>
