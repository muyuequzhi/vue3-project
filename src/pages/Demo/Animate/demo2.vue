<script setup>
//
import { ref, onMounted, watch, computed } from 'vue'
const list = []
for (let i = 1; i < 6; i++) {
  list.push(i)
}
const open = ref(true)
const open1 = ref(true)

const dom = ref()
const dom1 = ref()
const styleObj = ref({
  height: '0px',
})
const dom2Height = ref('0px')
onMounted(() => {
  watch(
    list.length,
    () => {
      styleObj.value.height = dom.value.offsetHeight + 'px'

      dom2Height.value = dom.value.offsetHeight + 'px' //dom2的高度
    },
    { immediate: true },
  )
  watch(
    open1,
    (newVal) => {
      console.log(newVal)
      if (newVal) {
        // open
        dom1.value.style.height = dom2Height.value
      } else {
        dom1.value.style.height = '0px'
      }
    },
    { immediate: true },
  )
})
</script>

<template>
  <div style="display: flex">
    <div class="container">
      <div>
        <div>
          <div v-if="open" @click="open = !open">
            <el-icon>
              <ArrowUp />
            </el-icon>
          </div>
          <div v-else @click="open = !open">
            <el-icon>
              <ArrowDown />
            </el-icon>
          </div>
        </div>
        <div style="height: 500px">
          <Transition name="collapse">
            <div v-show="open" ref="dom" class="item-box">
              <div v-for="item in list" class="item">
                {{ item }}
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>
    <div class="container">
      <div>
        <div>
          <div v-if="open1" @click="open1 = !open1">
            <el-icon>
              <ArrowUp />
            </el-icon>
          </div>
          <div v-else @click="open1 = !open1">
            <el-icon>
              <ArrowDown />
            </el-icon>
          </div>
        </div>
        <div style="height: 500px">
          <div ref="dom1" class="item-box fade">
            <div v-for="item in list" class="item">
              {{ item }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: 0 8px;
  width: 200px;
}

.item-box {
  /* 这个一定要加, .item-box 高度变小, .item内容还在*/
  overflow: hidden;
}

.collapse-enter-from {
  height: 0px;
}

.collapse-enter-to {
  height: v-bind('styleObj.height');
}

.collapse-leave-from {
  height: v-bind('styleObj.height');
}

.collapse-leave-to {
  height: 0px;
}

.collapse-enter-active,
.collapse-leave-active {
  transition: height 1s ease;
}

.item {
  line-height: 30px;
  border-radius: 5px;
  background-color: var(--primary-color);
  margin: 8px 0;
  color: white;
}

.fade {
  transition: height 1s ease;
}
</style>
