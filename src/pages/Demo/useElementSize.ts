import { ref } from 'vue'
const result = ref(0)

export function useElementSize(el, width) {
  if (width) {
    el.value.style.width = width.value + 'px'
  }
  result.value = parseFloat(el.value.style.width.replace('px', ''))

  return result
}
