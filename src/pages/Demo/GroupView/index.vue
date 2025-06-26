<script setup lang="ts">
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'

import Tree from '../Tree/index.vue'
import One from './One.vue'
import FinishStatus from './FinishStatus.vue'
import TreeSelect from '../TreeSelect/index.vue'

import LargeBar from './LargeBar.vue'

const activeTab = ref('1')


</script>
<template>
  <div>
    <div style="display: flex;width: 100vw;">
      <Tree style="width: 19%;margin-right: 1%;"></Tree>
      <div style="width: 80%;">
        <div class="module-title" style="margin-bottom: 6px;">
          全行重点客户业务管理
        </div>
        <el-tabs v-model="activeTab" style="display: flex;">
          <el-tab-pane label="集团经营情况" name="1"></el-tab-pane>
          <el-tab-pane label="策略执行情况" name="2"></el-tab-pane>
          <el-tab-pane label="目标完成情况" name="3"></el-tab-pane>
        </el-tabs>
        <div>

          <One v-if="activeTab == '1'"></One>
          <FinishStatus v-if="activeTab == '3'"></FinishStatus>
          <TreeSelect></TreeSelect>
        </div>
      </div>
    </div>

  </div>
</template>

<style>
@import url('./index.scss');
</style>