<template>
  <el-tree-select v-model="value" :data="data" :render-after-expand="false" style="width: 240px">
    <template #default="{ node, data }">
      <div style="display: flex;align-items: center;">
        <span @click="">{{ data.label }}</span>

        <el-icon style="font-weight: bold;font-size:20px;margin-left: 10px;"
          v-if="(data.value == value) && !data.children">
          <Check />
        </el-icon>
      </div>

    </template>
  </el-tree-select>
</template>

<script lang="ts" setup>
import { reactive, ref, watch } from 'vue'

const value = ref('')
watch(value, (newVal) => {
  console.log(value.value)
}, { deep: true })
const selectedVal = ref('')
const data = [
  {
    value: '',
    label: '请选择',
  },
  {
    value: '1',
    label: 'Level one 1',
    children: [
      {
        value: '1-1',
        label: 'Level two 1-1',
        children: [
          {
            value: '1-1-1',
            label: 'Level three 1-1-1',
          },
        ],
      },
    ],
  },
  {
    value: '2',
    label: 'Level one 2',
    children: [
      {
        value: '2-1',
        label: 'Level two 2-1',
        children: [
          {
            value: '2-1-1',
            label: 'Level three 2-1-1',
          },
        ],
      },
      {
        value: '2-2',
        label: 'Level two 2-2',
        children: [
          {
            value: '2-2-1',
            label: 'Level three 2-2-1',
          },
        ],
      },
    ],
  },
  {
    value: '3',
    label: 'Level one 3',
    children: [
      {
        value: '3-1',
        label: 'Level two 3-1',
        children: [
          {
            value: '3-1-1',
            label: 'Level three 3-1-1',
          },
        ],
      },
      {
        value: '3-2',
        label: 'Level two 3-2',
        children: [
          {
            value: '3-2-1',
            label: 'Level three 3-2-1',
          },
        ],
      },
    ],
  },
]


</script>