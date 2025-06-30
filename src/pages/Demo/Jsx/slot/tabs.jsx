import { defineComponent, ref, toRef, watch } from 'vue'
import { ElButton, ElDivider } from 'element-plus'

export default defineComponent({
  props: ['modelValue', 'name'],
  emits: ['update:modelValue'],
  setup(props, { slots, emit }) {
    const handleClick = (name) => {
      emit('update:modelValue', name)
    }
    console.log(slots.default(), 888)
    return () => {
      return (
        <div>
          {slots.default().map((item) => {
            return (
              <ElButton type={item.props.name == props.modelValue ? 'primary' : ''} onClick={() => handleClick(item.props.name)}>
                {item.props.label}
              </ElButton>
            )
          })}
          <ElDivider></ElDivider>
          {slots.default().filter((item) => item.props.name == props.modelValue)}
        </div>
      )
    }
  },
})
