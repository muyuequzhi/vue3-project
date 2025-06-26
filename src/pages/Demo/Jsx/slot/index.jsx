import { defineComponent,ref } from "vue"
import Child from './child.jsx'

export default defineComponent({
  setup() {
    function renderFn(content){
      return <p>from index || from child -- {content}</p>
    }
    return ()=> {
      return <div>
        <Child render={renderFn}></Child>
      </div>
    }
  }
})