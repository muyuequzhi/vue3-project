<script lang="tsx">
import { ref, computed, toRefs, defineComponent, nextTick, onUpdated, onMounted } from 'vue'
export default defineComponent({
  props: {
    data: {
      type: Array,
      required: true
    },
    tableColumnProps: {
      type: Array,
      required: true
    }
  },

  setup(props, { emit, slots }) {
    const { data } = toRefs(props)
    const sortFlag = ref('')
    const sortProp = ref('')
    const tableRef = ref(null)
    const heightVal = ref(null)
    onMounted(() => {
    })
    onUpdated(() => {
      if (tableRef.value) {
        let domHeight = tableRef.value.$el.offsetHeight
        debugger
        console.log(tableRef, 'tableRef')
        console.log(domHeight, '')
        if (domHeight < 300) {
          heightVal.value = ''
        } else {
          heightVal.value = 300
        }
      }
    })


    function handleSort(obj) {
      console.log(obj)
      sortFlag.value = obj.order
      sortProp.value = obj.prop
    }

    const isDate = (str) => {
      const regex = /^\d{4}-\d{2}-\d{2}/;
      return regex.test(str);
    }
    const newData = computed(() => {
      const result = data.value
      if (sortFlag.value == 'ascending') {
        result.sort((a, b) => {
          let aVal = a[sortProp.value]
          let bVal = b[sortProp.value]
          let aValNum = parseFloat(aVal)
          let bValNum = parseFloat(bVal)
          console.log(aVal, bVal)
          if (!aVal || aVal == '-') {
            return 1
          }
          if (!bVal || bVal == '-') {
            return -1
          }
          if (isDate(aVal) && isDate(bVal)) {
            return (new Date(aVal)).getTime() - (new Date(bVal)).getTime()
          }
          if (typeof aValNum == 'number' && typeof bValNum == 'number') {
            return aValNum - bValNum
          }
          return 0
        })
      }
      if (sortFlag.value == 'descending') {
        result.sort((a, b) => {
          let aVal = a[sortProp.value]
          let bVal = b[sortProp.value]
          let aValNum = parseFloat(aVal)
          let bValNum = parseFloat(bVal)
          console.log(aVal, bVal)
          if (!aVal || aVal == '-') {
            return 1
          }
          if (!bVal || bVal == '-') {
            return -1
          }
          if (isDate(aVal) && isDate(bVal)) {
            return (new Date(bVal)).getTime() - (new Date(aVal)).getTime()
          }
          if (typeof aValNum == 'number' && typeof bValNum == 'number') {
            return bValNum - aValNum
          }
          return 0
        })
      }
      return result
    })
    const renderColumn = (arr) => {
      return arr.map((item) => {
        {
          if (item.children) {
            const prop = {
              label: item.label,
              align: item.align,
            }
            return <el-table-column {...prop}>
              {
                renderColumn(item.children)
              }
            </el-table-column>
          } else {
            const prop = {
              sortable: item.sortable ? 'custom' : false,
              // 'min-width': item.minWidth,
              label: item.label,
              align: item.align,
              prop: item.prop
            }
            return <el-table-column {...prop}>
              {
                {
                  default: ({ row }) => {
                    return item.slot ?
                      slots[item.slot]?.({ row }) : row[item.prop]
                  }
                }
              }
            </el-table-column>
          }
        }
      })
    }
    return () => <div>
      <el-table id="tableId" ref={(ref) => tableRef.value = ref} onSortChange={handleSort} data={newData.value} height={heightVal.value}>
        {renderColumn(props.tableColumnProps)}
      </el-table>
    </div>
  }
})

</script>



<style scoped>
:deep(.el-table) {
  /* 默认overflow:hidden 会影响box-shadow 不能展示 */
  overflow: initial;
  color: black;
}


:deep(.el-table__header-wrapper) {
  box-shadow: 0px 0px 10px 0px rgba(77, 108, 160, 0.3);
  /* margin: 5px; */
  margin-bottom: 5px;
  width: auto;
  color: black;
}
</style>