<script setup lang="ts">
import { ref } from 'vue'

const formVal = ref({
  name: '666',
})
const nameV = (rule: any, value: any, callback: any) => {
  if (!value) {
    callback(new Error('必填666'))
  }
  if (value == '666') {
    callback(new Error('666'))
  } else if (value == '888') {
    callback(new Error('888'))
  } else {
    callback()
  }
}
const rules = ref({
  name: [
    // { required: true, message: '必填', trigger: 'blur' },
    { validator: nameV, trigger: 'blur' },
  ],
})
const formRef = ref()

function reset() {
  console.log(formRef.value)
  formRef.value.resetFields()
}
function search() {
  formRef.value.validate((valid) => {
    console.log(valid, 'valid')
    if (valid) {
      alert(111)

    }
  })

}
</script>

<template>
  <div>
    <el-form :inline="true" ref="formRef" :model="formVal" :rules="rules" label-width="auto">
      <el-row>
        <el-col :span="8" v-for="item in 10">
          <el-form-item label="label" prop="name">
            <el-input v-model="formVal.name"></el-input>
          </el-form-item>
        </el-col>
      </el-row>


    </el-form>
    <el-button @click="search()">查询</el-button>
    <el-button @click="reset()">reset</el-button>
  </div>
</template>
