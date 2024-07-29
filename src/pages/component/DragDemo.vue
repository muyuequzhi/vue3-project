<template>
  <div class="row">
    <div class="col1">
      <div style="display: flex; justify-content: space-between">
        <el-text>输入项</el-text>
        <el-button @click="drawer = true" type="primary">新增</el-button>
      </div>

      <!-- <ul>
        <li v-for="item in store.inputObjList " @click="addInput(item)">
          {{ item.displayName }}
        </li>
      </ul> -->
      <draggable
        :sort="false"
        class="dragArea list-group"
        :list="store.inputObjList"
        :group="{ name: 'people', pull: 'clone', put: false }"
        @change="log"
        item-key="name">
        <template #item="{ element }">
          <div class="list-group-item">
            {{ element.displayName }}
            <!-- <component v-model="element.orgVal" :is="inputComponents[element.inputType]"></component> -->
          </div>
        </template>
      </draggable>
    </div>

    <div class="col2">
      <div style="display: flex; align-items: center; justify-content: flex-end; padding: 0 30px">
        <h3 style="margin-right: 16px">查询项</h3>
        <el-button style="margin-right: 16px" type="danger" v-show="!showCheckbox" @click="showCheckbox = true">删除</el-button>
        <div v-show="showCheckbox" style="margin-right: 16px">
          <el-button type="danger" @click="deleteInput">确认删除</el-button>
          <el-button @click="showCheckbox = false" type="primary">取消</el-button>
        </div>
        <el-button type="primary" @click="drawerSelTemplate = true">选择模板</el-button>
        <el-button type="primary" @click="drawerSaveTemplate = true">保存模板</el-button>
      </div>
      <CheckboxGroup v-model="checkList">
        <draggable class="form-box" :list="addedInputList" group="people" @change="log" item-key="keyName">
          <template #item="{ element }">
            <div class="col">
              <Checkbox class="checkbox" v-show="showCheckbox" :value="element.keyName" />

              <component :label="element.displayName" v-model="element.val" :is="inputComponents[element.inputType]"> </component>
            </div>
          </template>
        </draggable>
      </CheckboxGroup>
      <div>
        <el-row>
          <el-col :span="24">
            <el-button type="primary" @click="console.log(addedInputList)">查询</el-button>
          </el-col>
        </el-row>
      </div>
    </div>

    <el-drawer v-model="drawer" title="新增输入项" direction="ltr">
      <div>
        <InputForm @closeDrawer="drawer = false"></InputForm>
      </div>
    </el-drawer>
    <el-drawer v-model="drawerSelTemplate" title="选择模板" direction="rtl">
      <div>
        <div v-for="item in store.templateList">
          <div @click="setTemplate(item.name)">{{ item.name }}</div>
        </div>
      </div>
    </el-drawer>
    <el-drawer v-model="drawerSaveTemplate" title="保存模板" direction="rtl">
      <div>
        <el-row>
          <el-col :span="24">
            <BaseInput label="模板名称" v-model="templateName"></BaseInput>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24"><el-button @click="saveTemplate" type="primary">确定</el-button></el-col>
        </el-row>
      </div>
    </el-drawer>
  </div>
</template>

<script setup>
import draggable from 'vuedraggable'
import OrgInput from '@/components/BaseInput/OrgInput.vue'
import TimeInput from '@/components/BaseInput/TimeInput.vue'
import InputForm from './InputForm.vue'
import { computed, ref } from 'vue'
import { parseObj } from '@/utils/function.js'
import { useDragStore } from '@/stores/dragData.js'
import BaseInput from '@/components/BaseInput/index.vue'
import { cloneDeep } from 'lodash'
import CheckboxGroup from '@/components/BaseCheckbox/CheckboxGroup.vue'
import Checkbox from '@/components/BaseCheckbox/Checkbox.vue'
import { ElMessage } from 'element-plus'

const store = useDragStore()

const drawer = ref(false)
const drawerSelTemplate = ref(false)
const drawerSaveTemplate = ref(false)

const showCheckbox = ref(false)

const list1 = ref(['机构', '时间'])
const checkList = ref([])
const inputObj = {
  OrgInput: { inputType: 'OrgInput', orgVal: '' },
}
const templateName = ref('')

function setTemplate(name) {
  let templateObj = {}
  store.templateList.map((item) => {
    if (item.name == name) {
      templateObj = item
    }
  })

  addedInputList.value = templateObj.list
  drawerSelTemplate.value = false
}
function saveTemplate() {
  if (store.templateNameList.indexOf(templateName.value) > -1) {
    ElMessage({
      message: '名字不可重复',
      type: 'warning',
    })
    return
  }
  store.saveTemplate(parseObj({ name: templateName.value, list: addedInputList.value }))
  drawerSaveTemplate.value = false
}
function addInput(item) {
  console.log(item)
  addedInputList.value.push(parseObj(item))
}
function deleteInput() {
  const addedInputListCopy = addedInputList.value.filter((item) => {
    if (checkList.value.indexOf(item.keyName) < 0) {
      return item
    }
  })
  addedInputList.value = addedInputListCopy || []
  showCheckbox.value = false
}
const inputComponents = {
  OrgInput,
  TimeInput,
  BaseInput,
}

const addedInputList = ref([])
const orgVal = ref('')

function log(evt) {
  window.console.log(evt, 666)
}
</script>
<style scoped>
@import url(@/style/index.scss);

.row {
  display: flex;
  height: 100%;
}

.col1 {
  width: 20%;

  border-right: 1px solid gray;
  margin-right: 30px;
  padding: 15px;
}

.col2 {
  width: 80%;
}

.col {
  width: 30%;
  display: flex;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 10px 0;
}

.list-group-item {
  margin-bottom: 16px;
}

.checkbox {
  margin-right: 10px;
}
</style>
