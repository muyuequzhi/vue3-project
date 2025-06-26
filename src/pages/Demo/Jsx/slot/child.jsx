import { defineComponent,ref } from "vue"

export default defineComponent({
  props:['render'],
  setup(props) {
    const msg = ref('child msg')
    console.log(props)
    return () => {
      
      return <p>{props.render(msg.value)}</p>
    }
  }
})