<script setup>
import { ref, computed, watch } from 'vue'

const list = []

let arr = []
for (let i = 1; i < 300; i++) {
  arr.push(i)

  if (i % 6 == 0) {
    list.push(arr)
    arr = []
  }
}

const showPage = ref(1)
const totalPageNum = computed(() => {
  return list.length
})
function controlPage(p) {
  if (p == 'right') {
    if (showPage.value <= totalPageNum.value) {
      showPage.value += 1
    }
  }
  if (p == 'left') {
    if (showPage.value > 1) {
      showPage.value -= 1
    }
  }
}

const lis = ref([1, 2])
const animateName = ref('fade')

watch(showPage, (newVal, oldVal) => {
  console.log(newVal, oldVal)
  if (newVal > oldVal) {
    animateName.value = 'out'
  } else {
    animateName.value = 'fade'
  }
})
</script>
<template>
  <div class="container">
    <!-- <div>
      <el-button @click="lis.push(lis[lis.length - 1] + 1)">push</el-button>
      <TransitionGroup name="list" tag="ul">
        <li v-for="item in lis" :key="item">
          {{ item }}
        </li>
      </TransitionGroup>
    </div> -->
    <div>
      <el-icon size="30px" color="var(--primary-color)" @click="controlPage('left')">
        <ArrowLeft />
      </el-icon>
    </div>

    <div class="page-box">
      <TransitionGroup :name="animateName">
        <div v-for="(item1, index1) in list" class="page" v-show="showPage == index1 + 1" :key="index1">
          <div v-for="item in item1">
            <div class="item">{{ item }}</div>
          </div>
        </div>
      </TransitionGroup>
    </div>

    <div>
      <el-icon size="30px" color="var(--primary-color)" @click="controlPage('right')">
        <ArrowRight />
      </el-icon>
    </div>
  </div>
</template>

<style scoped>
.page-box {
  display: flex;
  /* 下边两行代码 让动画限制在.page-box 内，因为离开的元素设置了 position:absolute; */
  position: relative;
  overflow: hidden;
}

.out-enter-from {
  transform: translateX(-300px);
  /* 
    元素插入前添加这个样式**-enter-from(transform: translateX(-300px)); 插入后样式被移除(transform被删除了,改变了)就会触发**-enter-active 的动画
  */
}

.out-leave-to {
  transform: translateX(300px);
  /* 
      离开初始状态没有transform的样式, 离开中间状态及完成状态 插入**-leave-to(transform 改变了) 就会触发**-enter-active 的动画
    */
}

.out-leave-active {
  position: absolute;
}

.out-enter-active,
.out-leave-active {
  transition: transform 2s ease;
}

.fade-enter-active {
  transition: transform 2s ease;
}

.fade-leave-active {
  transition: transform 2s ease;
  /* 确保将离开的元素从布局流中删除
    以便能够正确地计算移动的动画，
    不然会有明显的抖动  
  */
  position: absolute;
}

.fade-enter-from {
  transform: translateX(300px);
}

.fade-leave-to {
  /* background-color: var(--sucess-color);
  border-radius: 10px; */
  transform: translateX(-300px);
}

.fade-leave-active .item {
  /* 给离开的每个小元素添加样式 */
  opacity: 0;
}

.item {
  transition: opacity 1s ease;
}

.container {
  display: flex;
  align-items: center;
}

.page {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 260px;
}

.item {
  background-color: var(--primary-color);
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  color: white;
  border-radius: 8px;
  margin: 8px;
}
</style>
