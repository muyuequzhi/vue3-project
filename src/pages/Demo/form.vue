<script setup>
import { ref } from 'vue'

const picked = ref(1)
const radioList = [
  { name: 'name1', value: 1 },
  { name: 'name2', value: 2 },
  { name: 'name3', value: 3 },
]

const checked = ref([1])
const checkList = [
  { name: 'name1', value: 1 },
  { name: 'name2', value: 2 },
  { name: 'name3', value: 3 },
]

const selected = ref(1)
const selectList = [
  { name: 'name1', value: 1 },
  { name: 'name2', value: 2 },
  { name: 'name3', value: 3 },
]
</script>

<template>
  <div class="container" style="">
    <div class="line">
      <div>picked:{{ picked }}</div>

      <div v-for="item in radioList">
        <input type="radio" v-model="picked" :value="item.value" />
        <label>{{ item.name }}</label>
      </div>
    </div>
    <div class="line">
      <div>selected:{{ selected }}</div>
      <div>
        <select v-model="selected">
          <option v-for="item in selectList" :value="item.value">
            {{ item.name }}
          </option>
        </select>
      </div>
    </div>
    <div class="line">
      <div style="width: 200px">checked:{{ checked }}</div>
      <div v-for="item in checkList">
        <input type="checkbox" :value="item.value" v-model="checked" />
        <label>{{ item.name }}</label>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  & .line {
    display: flex;
    margin-bottom: 16px;

    & > div:nth-child(1) {
      width: 200px;
    }

    & > div {
      margin: 0 8px;
    }
  }

  & > div {
    margin: 0 8px;
  }
}
</style>
