<script setup lang="ts">
import { ref } from 'vue'
import SiderMenu from '@/components/SideMenu.vue'
import TopMenu from '@/components/TopMenu/TopMenu.vue'
import { useUserStore } from '@/stores/userInfo.js'

const userStore = useUserStore()

const loading = ref(false)

document.addEventListener('show-loading', () => {
  loading.value = true
})
document.addEventListener('hide-loading', () => {
  loading.value = false
})
</script>
<template>
  <div class="common-layout" v-loading="loading">
    <el-container>
      <el-aside width="64px">
        <SiderMenu :menus="userStore.routes" />
      </el-aside>
      <el-container>
        <el-header>
          <TopMenu :userInfo="userStore" />
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style scoped lang="scss">
@import './layout.scss';
</style>
