<script setup lang="ts">
import { useRouter } from 'vue-router'
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
// 服务接口
//import { getUserInfo } from '@/request/api'
// Mock接口
import { getUserInfo } from '@/mock/api'
import { useUserStore } from '@/stores/userInfo.js'

// onBeforeMount(() => {
// })
const router = useRouter()
const userStore = useUserStore()

interface RuleForm {
  username: string
  password: string
}
const ruleFormRef = ref<FormInstance>()
const formLabelAlign = reactive<RuleForm>({
  username: '',
  password: '',
})
const rules = reactive<FormRules<RuleForm>>({
  username: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
  password: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      //调用方法
      getUserInfo()
        .then(function (res) {
          console.log('>>>>', res.data)
          let { code, data } = res.data
          if (code == 200) {
            // 存储
            userStore.registerUser(data)
            // 跳转首页
            router.push({
              path: '/home',
            })
          }
        })
        .catch(function (error) {
          console.log(error)
        })
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
console.log('444', userStore)
</script>
<template>
  <div class="ghghgh">login</div>
  <el-form label-position="right" label-width="100px" ref="ruleFormRef" :model="formLabelAlign" :rules="rules" style="max-width: 460px">
    <el-form-item label="用户名" prop="username">
      <el-input v-model="formLabelAlign.username" placeholder="请输入用户名" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="formLabelAlign.password" placeholder="请输入密码" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
      <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
    </el-form-item>
  </el-form>
  <!-- <div>{{ userStore.username }}</div> -->
</template>

<style scoped>
@import './index.css';
</style>
