<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { baseOption } from './baseOption.ts'
import { formatTime } from '@/utils/function.js'
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

const dataCount = 5e5;
const data = generateData(1000);
function generateData(count) {
  let baseValue = Math.random() * 1000;
  let time = +new Date(2024, 11, 20);
  let smallBaseValue;
  let result = []
  function next(idx) {
    smallBaseValue =
      idx % 30 === 0
        ? Math.random() * 700
        : smallBaseValue + Math.random() * 500 - 250;
    baseValue += Math.random() * 20 - 10;
    return Math.max(0, Math.round(baseValue + smallBaseValue) + 3000);
  }
  const categoryData = [];
  const valueData = [];
  for (let i = 0; i < count; i++) {
    // result.push([time, next(i).toFixed(2)])
    categoryData.push(
      time
    );
    valueData.push(next(i).toFixed(2));
    time += (1000 * 60 * 10);
  }
  return {
    categoryData: categoryData,
    valueData: valueData
  };
  // return { valueData: result }
}
console.log(data, 'data')
let option = {
  title: {
    text: echarts.format.addCommas(dataCount) + ' Data',
    left: 10
  },
  grid: {
    bottom: 90
  },
  xAxis: {
    silent: false,
    splitLine: {
      show: false
    },
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    splitArea: {
      show: false
    },

    type: 'category',
    data: data.categoryData,
    // type: 'time',
    // interval: 1000 * 60 * 100, // 30分钟
    // spiltNumber: 50,
    axisLabel: {
      rotate: 90,
      // showMinLabel: true,
      // showMaxLabel: true,
      interval: 20,
      rich: {
        red: {
          color: 'red',
          fontSize: 14
        }
      },
      formatter: function (value, index) {
        // 格式化成月/日，只在第一个刻度显示年份
        var date = new Date(Number(value));

        let result = ''
        let month = date.getMonth() + 1
        let day = date.getDate()
        let hour = date.getHours()
        let minute = date.getMinutes()

        if (String(month).length == 1) {
          month = '0' + month
        }
        if (String(day).length == 1) {
          day = '0' + day
        }
        if (String(hour).length == 1) {
          hour = '0' + hour
        }
        if (String(minute).length == 1) {
          minute = '0' + minute
        }

        if (hour == '00' && minute == '00') {
          result = `{red|${month}-${day} 00:00}`
        } else {

          if (minute == '00') {
            result = `{red|${hour}:${minute}}`
          } else {
            result = `${hour}:${minute}`
          }

        }
        // if (index === 0) {
        //   texts.unshift(date.getFullYear());
        // }
        return result
      }
      // formatter: '{HH}:{mm}'
    }
  },
  tooltip: {
    trigger: 'axis',
    formatter: (p) => {
      console.log(p)
      let obj = p[0]
      let xVal = obj.axisValue
      let data = obj.data
      return `
        <div>${formatTime(xVal)} </div>
        <div>${data}</div>
      `
    }
  },
  // dataZoom: [
  //   {
  //     type: 'inside'
  //   },
  //   {
  //     type: 'slider'
  //   }
  // ],
  yAxis: {
    splitArea: {
      show: false
    }
  },
  series: [
    {
      type: 'bar',
      data: data.valueData,
      // Set `large` for large data amount
      large: true
    }

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
