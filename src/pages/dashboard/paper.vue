<script setup lang="ts">
import { onMounted, ref, onUnmounted } from 'vue'
import CardWrapper from '@/components/CardWrapper/index.vue'
import LineChart from '@/components/MyChart/LineChart.vue'
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
const card = ref()
const chartH = ref(1)

function resizeChart() {
  let rw = card.value.offsetWidth // 宽度
  chartH.value = rw * 0.5
}
//在生命周期中书写
onMounted(() => {
  chartH.value = card.value.offsetWidth * 0.5
  // 监听窗口改变，改变后重新获取
  window.addEventListener('resize', resizeChart)
})
onUnmounted(() => {
  window.removeEventListener('resize', resizeChart)
})
</script>

<template>
  <el-row :gutter="20">
    <el-col :span="12">
      <div class="card1" ref="card">
        <CardWrapper title="标题1">
          <LineChart :option="options" width="100%" :height="`${chartH}px`" />
        </CardWrapper>
      </div>
    </el-col>
    <el-col :span="12">
      <div class="card1" ref="card">
        <CardWrapper title="标题2">
          <LineChart :option="options" width="100%" :height="`${chartH}px`" />
        </CardWrapper>
      </div>
    </el-col>
  </el-row>
</template>

<style scoped lang="scss">
@import './paper.scss';
</style>
