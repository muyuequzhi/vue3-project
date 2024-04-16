<script setup lang="ts">
import SiderMenu from '@/components/SideMenu.vue'
import TopMenu from '@/components/TopMenu/TopMenu.vue'
import { useUserStore } from '@/stores/userInfo.js'

const userStore = useUserStore()
</script>
<template>
  <div class="common-layout">
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
