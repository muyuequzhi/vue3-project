<script setup>
import BaseChart from '@/pages/Demo/Chart/BaseChart.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { deepClone } from '@/pages/Demo/function.js'

const chartStyle = {
  width: '500px',
  height: '300px',
}
const xData = [
  '5/1-5/7',
  '5/8-5/14',
  '5/15-5/21',
  '5/22-5/28',
  '5/29-6/5',
  '6/11-6/17',
  '6/18-6/24',
  '6/30-7/6',
  '7/12-7/18',
  '7/26-8/3',
  '8/9-8/15',
  '8/21-8/27',
]
// There should not be negative values in rawData
let rawData = [
  [100, 200, 300, 400, 500, 600, 500, 100, 200, 300, 400, 500],
  [320, 132, 101, 134, 90, 230, 210, 600, 500, 100, 200, 300],
  [220, 182, 191, 234, 290, 330, 310, 600, 500, 100, 200, 300],
  [150, 212, 201, 154, 190, 330, 410, 600, 500, 100, 200, 300],
  [820, 832, 901, 934, 1290, 1330, 820, 600, 500, 100, 200, 300],
]
const option = ref({})

function genOption(xData, rawData) {
  const colors = ['#457DE5', '#85ABFA', '#F97A6D', '#FCE911', '#FFA600']
  const colorsR = deepClone(colors).reverse()
  const totalData = []
  for (let i = 0; i < rawData[0].length; ++i) {
    let sum = 0
    for (let j = 0; j < rawData.length; ++j) {
      sum += rawData[j][i]
    }
    totalData.push(sum)
  }
  const grid = {
    left: 45,
    right: 20,
    top: 50,
    bottom: 50,
  }
  const seriesNames = ['未分配', '未执行', '客户拒绝', '持续跟进', '有意向']
  const seriesNamesR = deepClone(seriesNames).reverse()
  const series = seriesNames.map((name, sid) => {
    return {
      name,
      type: 'bar',
      stack: 'total',
      barWidth: '60%',
      itemStyle: {
        color: colors[sid],
      },
      label: {
        show: false,
        formatter: (params) => Math.round(params.value * 1000) / 10 + '%',
      },
      data: rawData[sid].map((d, did) => (totalData[did] <= 0 ? 0 : d / totalData[did])),
    }
  })
  option.value = {
    legend: {
      selectedMode: true,
      icon: 'circle',
      // legend 默认与柱状图顺序相反， 在这里反转下
      data: seriesNamesR.map((item, index) => {
        return {
          name: item,
          itemStyle: {
            color: colorsR[index],
          },
        }
      }),
    },
    tooltip: {
      borderColor: 'transparent',
      formatter: function (p) {
        // console.log(p) dataIndex seriesIndex
        var divs = '<div style="color: #9199BD;"> <div>2024.03.07</div>'

        const dataIndex = p.dataIndex
        const curName = p.seriesName

        for (var i = rawData.length - 1; i >= 0; i--) {
          // 默认顺序与柱状图顺序相反， 倒序遍历下
          var eleValue = rawData[i][dataIndex]
          var seriesName = seriesNames[i]
          var color = colors[i]
          var eleValuePercent = Math.round((eleValue / totalData[dataIndex]) * 1000) / 10
          var div = '<div style="display:flex;">'
          if (seriesName == curName) {
            div += `<div style="font-weight:bold !important;width:130px;display:flex;align-items:center;"><span style="display:inline-block;margin-right:5px;width:12px;height:12px;border-radius:50%;background:${color};"></span> <span>${seriesName}:</span><span>${eleValue}户</span></div> <div style="display:inline-block;font-weight:bold;"> <span>占比：</span><span>${eleValuePercent}%</span></div>`
          } else {
            div += `<div style="width:130px;display:flex;align-items:center;"><span style="display:inline-block;margin-right:5px;width:12px;height:12px;border-radius:50%;background:${color};"></span> <span>${seriesName}:</span><span>${eleValue}户</span></div> <span>占比：</span><span>${eleValuePercent}%</span>`
          }
          div += '</div>'
          divs += div
        }

        divs += '</div>'
        return divs
      },
    },
    color: ['#FFA600', '#FCE911', '#F97A6D', '#85ABFA', '#457DE5'],
    grid,
    yAxis: {
      type: 'value',
      axisLabel: {
        color: '#9199BD',
        formatter: function (p) {
          return p * 100 + '%'
        },
      },
    },
    xAxis: {
      type: 'category',
      data: xData,
      axisLabel: {
        rotate: 45,
        color: '#9199BD',
      },
      axisTick: {
        show: false, // 隐藏x轴刻度
      },
      axisLine: {
        show: false, // 隐藏x轴黑线
      },
    },
    series,
  }
}

genOption(xData, rawData) //要在方法里更改option.value
</script>
<template>
  <div>
    <BaseChart :option="option" :width="chartStyle.width" :height="chartStyle.height"></BaseChart>
  </div>
</template>
