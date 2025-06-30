import { defineComponent, ref, watch } from 'vue'
import Child from './child.jsx'
import Tabs from './tabs.jsx'
import TabPanel from './tabPanel.vue'
import { ElButton } from 'element-plus'
import Tree from '../../Tree/index.vue'

export default defineComponent({
  setup() {
    function renderFn(content) {
      return <p>from index || from child -- {content}</p>
    }
    const activeName = ref('first')
    watch(activeName, (n) => {
      console.log(n)
    })
    return () => {
      return (
        <div>
          <Child render={renderFn}></Child>
          <Tabs v-model={activeName.value}>
            <TabPanel label="User" name="first">
              <Tree></Tree>
            </TabPanel>
            <TabPanel label="Config" name="second">
              2
            </TabPanel>
            <TabPanel label="Role" name="third">
              3
            </TabPanel>
            <TabPanel label="Task" name="fourth">
              4
            </TabPanel>
          </Tabs>
        </div>
      )
    }
  },
})
