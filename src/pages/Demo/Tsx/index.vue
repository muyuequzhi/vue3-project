<script lang="tsx">
import { defineComponent, ref, reactive } from 'vue'

export default defineComponent({
  setup() {
    const radioList = [
      { label: '11', value: '1' },
      { label: '22', value: '2' },
      { label: '33', value: '3' },
    ]
    const radioVal = ref('1')
    const obj = reactive({
      val: [],
    })

    const changeInput = (a, b, c) => (val) => {
      // 被返回的函数，处理input事件
      console.log(a, b, c, val)
    }
    const msg = ref('')

    const tsx = () => (
      <div>
        <div>tsx</div>

        <el-input v-model={msg.value} onInput={changeInput(1, 2, 3)}></el-input>
      </div>
    )

    return () => (
      <div>
        <tsx></tsx>
        <el-checkbox-group v-model={obj.val}>
          {
            radioList.map((item) => (
              <el-checkbox label={item.value} value={item.value}>
                {item.label}
              </el-checkbox>
            ))
          }
        </el-checkbox-group>
      </div>
    )
  },
})
</script>
