<script setup lang="ts">
// import { ref } from 'vue'
import SvgIcon from '@/components/SvgIcon.vue'
import { IUserInfo } from '@/types/request'
import { useUserStore } from '@/stores/userInfo.js'
const props = defineProps<{
  userInfo: IUserInfo
}>()
const userStore = useUserStore()
function logout() {
  userStore.logout()
}
</script>
<template>
  <div>{{ props.userInfo.username }}</div>
  <div class="logout" @click="logout"><SvgIcon name="shutdown" />退出</div>
</template>
<style scoped lang="scss">
@import './index.scss';
</style>
