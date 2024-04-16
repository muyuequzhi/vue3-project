<template>
  <MyChart :option="targetOption" :width="props.width" :height="props.height" />
</template>
<script setup lang="ts">
import { toRefs, computed } from 'vue'
import MyChart from '@/components/MyChart/base.vue'
import { EChartsOption } from 'echarts'

interface Props {
  option: EChartsOption
  width: string
  height: string
}
const props = defineProps<Props>()

const defaultOption: EChartsOption = {
  // 定义折线图主题色
  color: ['#d5372c', '#91cc75', '#fac858', '#ee6666', '#73c0de'],
  dataZoom: [
    {
      type: 'slider',
      start: 0,
      end: 100,
      height: 10,
    },
  ],
  grid: {
    left: 50,
  },
}
const { option } = toRefs(props)
const targetOption = computed(() => Object.assign(defaultOption, option.value))
</script>
<style scoped></style>
