<template>
  <div>
    <el-upload v-model:file-list="fileList" class="upload-demo" :show-file-list="false" :on-error="handleError"
      :on-success="handleSuccess" action="" :before-upload="handleBeforeUpload" :limit="1">
      <el-button type="primary">Click to upload</el-button>

    </el-upload>


  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'

import type { UploadProps, UploadUserFile } from 'element-plus'

const fileList = ref<UploadUserFile[]>([
])
const handleBeforeUpload = (rawFile) => {
  console.log(rawFile, fileList.value)
}
const handleSuccess = () => {

}
const handleError = (err) => {
  console.log(err)
  ElMessage.error('error')
}
const handleExceed: UploadProps['onExceed'] = (files, uploadFiles) => {
  if (fileList.value.length > 1) {
    ElMessage.warning(
      `The limit is 1, you selected ${files.length} files this time, add up to ${files.length + uploadFiles.length
      } totally`
    )
  }

}

defineExpose({
  fn: (val) => val + '666'
})
</script>
