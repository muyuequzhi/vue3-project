<script setup lang="ts">
import { ref } from 'vue'

const inputObj = ref({
  val1: '',
  val2: '',
  val3: '',
  val4: '',
  val5: '',
  val6: '',
})
</script>

<template>
  <div class="form-box">
    <el-row :gutter="10">
      <el-col :span="8">
        <div class="item-input">
          <el-text class="mx-1">输入框1</el-text>
          <el-input v-model="inputObj.val1" placeholder="Please input" />
        </div>
      </el-col>
      <el-col :span="8">
        <div class="item-input">
          <el-text class="mx-1">输入框1</el-text>
          <el-input v-model="inputObj.val2" placeholder="Please input" />
        </div>
      </el-col>
      <el-col :span="8">
        <div class="item-input">
          <el-text class="mx-1">输入框1</el-text>
          <el-input v-model="inputObj.val3" placeholder="Please input" />
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="8">
        <div class="item-input">
          <el-text class="mx-1">输入框1</el-text>
          <el-input v-model="inputObj.val4" placeholder="Please input" />
        </div>
      </el-col>
      <el-col :span="8">
        <div class="item-input">
          <el-text class="mx-1">输入框1</el-text>
          <el-input v-model="inputObj.val5" placeholder="Please input" />
        </div>
      </el-col>
      <el-col :span="8">
        <div class="item-input">
          <el-text class="mx-1">输入框1</el-text>
          <el-input v-model="inputObj.val6" placeholder="Please input" />
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-button style="margin: auto" type="primary" @click="$emit('setParTableData', inputObj)">查询</el-button>
    </el-row>
  </div>
</template>

<style scoped>
.form-box {
  padding: 16px 10px;

  .el-row {
    margin-bottom: 16px;
  }
}

.el-col {
  display: flex;
  justify-content: center;
  align-items: center;
}

.el-text {
  margin-right: 10px;
}

.el-input {
  width: 260px;
}

.item-input {
  display: flex;
  align-items: center;
}
</style>
