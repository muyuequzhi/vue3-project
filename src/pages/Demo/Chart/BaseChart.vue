<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as echarts from 'echarts'

const props = defineProps({
  width: {
    type: String,
  },
  height: {
    type: String,
  },
  option: {
    type: Object,
  },
})

const styleObj = ref({
  width: props.width,
  height: props.height,
})

const chartRef = ref()
onMounted(() => {
  var myChart = echarts.init(chartRef.value)
  myChart.setOption(props.option)
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
