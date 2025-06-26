import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    tableColumnProps: {
      type: Array,
      required: true,
    },
  },
  setup(props, { slots }) {
    const renderColumn = (arr) => {
      return arr.map((item) => {
        {
          if (item.children) {
            const prop = {
              label: item.label,
              align: item.align,
            }
            return <el-table-column {...prop}>{renderColumn(item.children)}</el-table-column>
          } else {
            const prop = {
              sortable: item.sortable ? 'custom' : false,
              // 'min-width': item.minWidth,
              label: item.label,
              align: item.align,
              prop: item.prop,
            }
            return (
              <el-table-column {...prop}>
                {{
                  default: ({ row }) => {
                    return item.slot ? slots[item.slot]({ row }) : item.formatType == 'money' ? handleUnit(row[item.prop]) : row[item.prop]
                  },
                }}
              </el-table-column>
            )
          }
        }
      })
    }
    {
      return renderColumn(props.tableColumnProps)
    }
  },
})
