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

  legend: {
    data: [
      {
        name: '成员企业开户数',
        icon: 'circle',
      },
      {
        name: '成员企业中结算活跃户数',
        icon: 'circle',
      },
      {
        name: '有贷户数',
        icon: 'circle',
      },
      {
        name: '有贷户中结算活跃户数',
        icon: 'circle',
      },

    ],
    right: 0,
    top: 0,
    textStyle: {
      color: '#809FB8',
      padding: -7
    },
    itemHeight: 10,

  },
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
  yAxis: {
    type: 'value',
    name: '单位：个',
    nameTextStyle: {
      color: '#809FB8'
    },
    axisLabel: {
      color: '#809FB8'
    }
  },
  series: [
    {
      name: '成员企业中结算活跃户数',
      type: 'bar',
      stack: 'total',
      barWidth: 20,
      barGap: 0,
      itemStyle: {
        color: '#AFBAFA'
      },

      data: [320, 302, 301, 334, 390, 330, 320]
    },
    {
      name: '成员企业开户数',
      type: 'bar',
      stack: 'total',
      barWidth: 20,
      barGap: 0,
      itemStyle: {
        color: '#8091EE'
      },

      data: [320, 302, 301, 334, 390, 330, 320]
    },
    {
      name: '有贷户中结算活跃户数',
      type: 'bar',
      stack: 'total1',
      barWidth: 20,
      barGap: 0,
      itemStyle: {
        color: '#FFB085'
      },

      data: [320, 302, 301, 334, 390, 330, 320]
    },
    {
      name: '有贷户数',
      type: 'bar',
      stack: 'total1',
      barWidth: 20,
      barGap: 0,
      itemStyle: {
        color: '#EC9B8C'
      },

      data: [320, 302, 301, 334, 390, 330, 320]
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
