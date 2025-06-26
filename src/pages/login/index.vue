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
    { min: 6, max: 6, message: 'Length should be 6', trigger: 'blur' },
  ],
  password: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 6, max: 6, message: 'Length should be 6', trigger: 'blur' },
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
  <div style="margin-top: 150px;">
    <el-form label-position="right" label-width="100px" ref="ruleFormRef" :model="formLabelAlign">
      <el-row justify="center">
        <el-col>
          <div style="display: flex;justify-content: center;">
            <el-form-item label="用户名" prop="username">
              <el-input v-model="formLabelAlign.username" placeholder="请输入用户名" />
            </el-form-item>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <div style="display: flex;justify-content: center;">
            <el-form-item label="密码" prop="password">
              <el-input @keyup.enter.native="submitForm(ruleFormRef)" v-model="formLabelAlign.password"
                placeholder="请输入密码" />
            </el-form-item>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <div style="display: flex;justify-content: center;">
            <el-form-item label=" " class="center">
              <div style="display: flex;">
                <el-button type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
                <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
              </div>
            </el-form-item>
          </div>
        </el-col>
      </el-row>
    </el-form>
  </div>
  <!-- <div>{{ userStore.username }}</div> -->
</template>

<style scoped>
@import './index.css';

:deep(.center .el-form-item__content) {
  justify-content: center;
}

:deep(.el-form-item__content) {
  width: 240px;
}
</style>
