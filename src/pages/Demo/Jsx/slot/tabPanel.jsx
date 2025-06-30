import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: ['label', 'name'],
  setup(props, { slots }) {
    console.log(slots.default(), 666)
    return () => <div>{slots.default()}</div>
  },
})
