<script setup lang="ts">
import { ref } from 'vue'
import Progress from './Progress.vue'

const data = ref([
  {
    title: '存贷规模',
    perVal: 100,
  },
  {
    title: '收益',
    perVal: 100,
  },
  {
    title: '产品',
    perVal: 50,
  },
  {
    title: '获客',
    perVal: 70,
  },

])
</script>

<template>
  <div>
    <div class="progress-box">
      <div class="progress-item" v-for="item in data">
        <div class="progress-title">{{ item.title }}</div>
        <Progress :width="400" :height="10" :perVal="item.perVal"></Progress>
        <div>
          已完成345543项/共43543项
        </div>
        <div class="text-status" :class="item.perVal == 100 ? 'text-status1' : ''"> {{ item.perVal == 100 ? '已完成' :
          '未完成' }}</div>
      </div>

    </div>

  </div>
</template>

<style scoped>
.progress-item {
  display: flex;
  align-items: center;
  margin-bottom: 18px;
}

.progress-item>div {
  margin-right: 10px;
}

.progress-item>div:last-child {
  margin-right: 0;
}

.progress-title {
  font-size: 14px;
  font-weight: bold;
  width: 56px;
  text-align: right;
}

.text-status {
  font-size: 12px;
  color: #F3654A;
  background: #FAC4BA;
  border-radius: 4px;
  height: 20px;
  line-height: 20px;
  padding: 0 5px;
}

.text-status1 {
  background: #C9D2FD;
  color: #7688E9;
}
</style>