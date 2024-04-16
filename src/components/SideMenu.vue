<script setup lang="ts">
import { ref } from 'vue'
import { RouteRecordRaw } from 'vue-router'
import SvgIcon from '@/components/SvgIcon.vue'

const isCollapse = ref(true)
const props = defineProps({
  menus: {
    type: Array<RouteRecordRaw>,
    default: [],
  },
})
</script>
<template>
  <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse" menu-trigger="click" router>
    <el-sub-menu v-for="menu in props.menus" :key="menu.id" :index="menu.path">
      <template #title>
        <el-icon>
          <SvgIcon :name="menu.icon || ''"></SvgIcon>
        </el-icon>
        <span>{{ menu.name }}</span>
      </template>
      <template v-if="menu.children && menu.children.length > 0">
        <el-menu-item v-for="subMenu in menu.children" :index="`${menu.path}/${subMenu.path}`" :key="subMenu.id" route>{{ subMenu.name }}</el-menu-item>
      </template>
    </el-sub-menu>
  </el-menu>
</template>
<style scoped></style>
