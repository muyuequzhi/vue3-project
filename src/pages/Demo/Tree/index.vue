<template>
  <div>
    <div> <el-button @click="handleClick" style="margin-bottom: 16px;"> click</el-button> </div>
    <el-tree @node-contextmenu="handleRightClick" ref="myTree" :render-content="renderContent"
      @node-click="handleNodeClick" :highlight-current="true" :default-expanded-keys="expandedKey" node-key="id"
      style="max-width: 260px;overflow: auto;" :props="props" :load="loadNode" lazy />
  </div>

</template>

<script lang="ts" setup>
import { ref, onMounted, nextTick } from 'vue'
import type Node from 'element-plus/es/components/tree/src/model/node'
import elPopover from 'element-plus'

interface Tree {
  id: number,
  name: string
  leaf?: boolean
}

const expandedKey = ref([1, 3])
const myTree = ref()

const handleNodeClick = (data: Tree) => {
}

const handleRightClick = (event, a, b, c) => {
  // console.log(event, a, b, c)
}
const handleClick = () => {

  nextTick(() => {
    if (myTree.value) {
      myTree.value.setCurrentKey('1')
    }
  })
}

const renderContent = (h, { node, data, store }) => {
  return h('span',
    {
      class: 'custom-tree-node',
    },
    h('span',
      {
        class: data.id > 1 ? 'selected' : '',
      },
      node.label
    ),
  )
}

onMounted(() => {

  nextTick(() => {
    if (myTree.value) {
      myTree.value.setCurrentKey('1')
    }
  })
})
const props = {
  label: 'name',
  children: 'zones',
  isLeaf: 'leaf',
}

const loadNode = (node: Node, resolve: (data: Tree[]) => void) => {
  if (node.level === 0) {
    return resolve([{ name: 'region', id: 1 }, { name: 'region5', id: 5 }])
  }
  if (node.level > 1) return resolve([])

  setTimeout(() => {
    const data: Tree[] = [
      {
        id: 2,
        name: 'leafxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        leaf: true,
      },
      {
        id: 3,
        name: 'zone',
        // leaf: false,
      },
    ]

    resolve(data)
  }, 500)
}
</script>

<style scoped>
:deep(.custom-tree-node .selected) {
  /* background-color: #6679E5;
  color: white; */
  background-color: var(--el-color-primary-light-9);
}
</style>