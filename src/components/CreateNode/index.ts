import { h } from 'vue'

const arr = [1, 2, 3]

export default {
  setup() {
    // 使用数组返回多个根节点
    return () =>
      h(
        'div',

        h(
          'div',
          { style: { width: '300px', margin: 'auto' } },
          arr.map((item) => {
            return h('span', { style: { color: 'black' } }, 'index: ' + item)
          }),
        ),
      )
  },
}
