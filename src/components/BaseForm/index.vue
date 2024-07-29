<template>
  <el-form :inline="true" ref="formRef" :model="dynamicValidateForm" label-width="auto" class="demo-dynamic">
    <el-form-item
      v-for="(domain, index) in dynamicValidateForm.domains"
      :key="domain.key"
      :label="'Domain' + index"
      :prop="'domains.' + index + '.value'"
      :rules="domain.rules">
      <div style="display: flex">
        <el-input v-model="domain.value" style="margin-right: 10px" />
        <el-button class="mt-2" @click.prevent="removeDomain(domain)">Delete</el-button>
      </div>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(formRef)">Submit</el-button>
      <el-button @click="addDomain">New domain</el-button>
      <el-button @click="resetForm(formRef)">Reset</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'

const radio1 = ref('1')
const radioVal = ref(['1', '2'])
const formRef = ref<FormInstance>()
const dynamicValidateForm = reactive<{
  domains: DomainItem[]
}>({
  domains: [
    {
      key: 1,
      value: '',
      rules: [
        {
          required: true,
          message: 'domain can not be null',
          trigger: 'blur',
        },
      ],
    },
    {
      key: 2,
      value: '',
      rules: [
        {
          required: true,
          message: 'domain can not be null',
          trigger: 'blur',
        },
      ],
    },
  ],
})

interface DomainItem {
  key: number
  value: string
  rules: Array<any>
}

const removeDomain = (item: DomainItem) => {
  const index = dynamicValidateForm.domains.indexOf(item)
  if (index !== -1) {
    dynamicValidateForm.domains.splice(index, 1)
  }
}

const addDomain = () => {
  dynamicValidateForm.domains.push({
    key: Date.now(),
    value: '',
    rules: [
      {
        required: true,
        message: 'domain can not be null',
        trigger: 'blur',
      },
    ],
  })
}

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  console.log(dynamicValidateForm)
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>
