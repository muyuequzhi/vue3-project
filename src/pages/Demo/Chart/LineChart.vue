<script setup>
import BaseChart from '@/pages/Demo/Chart/BaseChart.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as echarts from 'echarts'

let data = []
let xData = []
function genData(num) {
  for (var i = 0; i <= num; i++) {
    data.push(i * 10)
    xData.push(`xx-${i}`)
  }
}
genData(13)
// xData=[1]

const option = {
  title: {
    left: 'left',
    text: 'Line Chart',
    textStyle: {
      fontSize: 14,
    },
  },
  xAxis: {
    data: xData,
    axisLabel: {
      interval: 9,
      showMaxLabel: true, //将x轴坐标展示完全
    },
    axisTick: {
      show: false, // 隐藏x轴刻度线
    },
    axisLine: {
      show: false, // 隐藏x轴横线
    },
  },
  legend: {
    show: false,
  },
  yAxis: {
    type: 'value',
  },
  tooltip: {},
  series: [
    {
      data: data,
      type: 'line',
      name: 'line',
      showAllSymbol: true, // 展示所有数据点
    },
  ],
}

const chartStyle = {
  width: '500px',
  height: '300px',
}
</script>
<template>
  <div>
    <BaseChart :option="option" :width="chartStyle.width" :height="chartStyle.height"></BaseChart>
  </div>
</template>
