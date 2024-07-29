<script setup lang="ts">
import componentList from './index.ts'
import { computed, ref } from 'vue'
const showVal = ref('')
function showComponent(name) {
  showVal.value = name
}

const tagNameList = computed(() => {
  let result: string[] = []
  componentList.forEach((item) => {
    if (!result.includes(item.tagName)) {
      result.push(item.tagName)
    }
  })
  return result
})
</script>
<template>
  <div class="container">
    <!-- <div class="tag-box">
      <el-tag size="large" class="tag" v-for="item in tagNameList">
        {{ item }}
      </el-tag>

    </div> -->
    <div>
      <!-- <div class="card-box">
        <div class="card" v-for="item in componentList">

          <el-card @click="showComponent(item.name)">
            <div class="card-name">{{ item.name }}</div>
            <div class="card-key">{{ item.key || 'noKey' }}</div>

            <div class="card-describe">{{ item.describe }}</div>
          </el-card>
        </div>
      </div> -->
    </div>
    <div class="content-box">
      <template v-for="item in componentList">
        <div v-if="item.show ? true : showVal == item.name">
          <component :is="item.content"></component>
          <!-- <component v-if="item.name == 'SlotDemo'" :is="item.content" #header="msg">
            <div>{{ msg }}</div>
            <div>parent text</div>
          </component>
          <component v-else :is="item.content"></component> -->
        </div>
      </template>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import url(./index.scss);

.component-box {
  width: 100%;
}

.content-box {
  overflow: hidden;
}

.card-box {
  overflow: auto;
  flex-wrap: nowrap;
}

.card-box .card {
  // 让flex的子元素不要缩小,保持设置的width
  flex-shrink: 0;
}
</style>
