import {defineComponent, ref} from 'vue'
import { ElButton } from 'element-plus'
import Child from './child.jsx'
export default defineComponent({
  setup(props) {
    const count = ref(1)
    const handleClick = () => {
      count.value += 1
    }
    const render = () => {
      return <div>
        <ElButton onClick={handleClick}>click</ElButton>
        <Child a={count.value}></Child>
      </div>
    }
    return render
  }
})