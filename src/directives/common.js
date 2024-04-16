export const longpress = {
  beforeMount(el, binding) {
    const cb = binding.value
    if (typeof cb !== 'function') return console.warn('v-longpress指令必须接收一个回调函数')
    let timer = null

    // 取消计时器
    const cancel = () => {
      if (timer !== null) {
        clearTimeout(timer)
        timer = null
      }
    }

    el.addEventListener('mousedown', (e) => {
      // 排除右键情况
      // event.button: 0-左键  2-右键
      if (e.button !== 0) return
      e.preventDefault()
      if (timer === null) {
        timer = setTimeout(() => {
          cb()
          timer = null
        }, 2000)
      }
    })
    el.addEventListener('mouseup', cancel)
  },
  unmounted(el) {
    el.removeEventListener('mousedown', () => {})
    el.removeEventListener('mouseup', () => {})
  },
}
//防抖和节流的作用都是防止函数多次调用。区别在于，假设一个用户一直触发这个函数，且每次触发函数的间隔小于wait，防抖的情况下只会调用一次，而节流的 情况会每隔一定时间（参数wait）调用函数。
// 截流
export const throttle = {
  mounted(el, binding) {
    const { fn, event, delay = 800 } = binding.value
    if (typeof fn !== 'function') return console.warn('v-throttle指令必须接收一个回调函数')
    el.timer = null
    el.handler = function () {
      if (el.timer) return
      el.timer = setTimeout(() => {
        // console.log(this)
        fn.apply(this, arguments)
        clearTimeout(el.timer)
        el.timer = null
      }, delay)
    }
    el.addEventListener(event, el.handler)
  },
  beforeUnmount(el, binding) {
    const { event } = binding.value
    if (el.timer) {
      clearTimeout(el.timer)
      el.timer = null
    }
    el.removeEventListener(event, el.handler)
  },
}
// 防抖指令
export const debounce = {
  mounted(el, binding) {
    const { fn, event, delay = 800 } = binding.value
    if (typeof fn !== 'function') return console.warn('v-debounce指令必须接收一个回调函数')
    el.timer = null
    el.handler = function () {
      if (el.timer) {
        clearTimeout(el.timer)
        el.timer = null
      }
      el.timer = setTimeout(() => {
        fn.apply(this, arguments)
      }, delay)
    }
    el.addEventListener(event, el.handler)
  },
  beforeUnmount(el, binding) {
    const { event } = binding.value
    clearTimeout(el.timer)
    el.timer = null
    el.removeEventListener(event, el.handler)
  },
}
