import {defineComponent, ref, watch} from 'vue'

export default defineComponent({
  props:['a'],
  setup(props) {
    const arrResult =ref([])
    const genArr = () => {
      let arr = []
      for(let i=0;i<props.a;i++){
        arr.push(i)
      }
      arrResult.value = arr
    }
    watch(()=>props.a, (newVal) => {
      genArr()
    }, {immediate:true})
    const render = () => {
      return <div>
        <p>大于等于3会展示数组结果</p>
        {props.a}
        <div>
          {
            arrResult.value.map((item) => {
              return item>=3 ? <p>child--{item}</p>:null
            })
          }
        </div>
      </div>
    }
    return render
  }
})