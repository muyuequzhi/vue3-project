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

let option = {

  grid: baseOption.grid,
  xAxis: {
    type: 'category',
    data: ['1月', '3月', '6月', '9月', '12月'],
    axisTick: {
      show: false // 隐藏x轴刻度线
    },
    axisLine: {
      show: false // 隐藏x轴横线
    },
    axisLabel: {
      color: '#809FB8'
    }
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {

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
      name: '单位：万元',
      nameTextStyle: {
        color: '#809FB8'
      },
      axisLabel: {
        color: '#809FB8'
      }
    },
    {
      type: 'value',
      name: '单位：万元',
      nameTextStyle: {
        color: '#809FB8'
      },
      splitLine: {
        show: false
      },
      axisLabel: {
        color: '#809FB8'
      }
    },
  ],
  series: [
    {
      yAxisIndex: 0,
      name: '营收',
      type: 'line',
      stack: 'Total',
      symbol: 'none',
      itemStyle: {
        color: '#8091EE'
      },
      data: [120, 200, 150, 80, 70],


    },
    {
      yAxisIndex: 1,
      name: 'EVA',
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
