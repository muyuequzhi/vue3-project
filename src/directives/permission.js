import { useUserStore } from '@/stores/userInfo.js'
import { isArray } from '@/utils/function.js'
export const permission = {
  mounted(el, binding) {
    const { value } = binding
    // 获取用户所有的权限按钮
    const userStore = useUserStore()
    const { permission } = userStore
    if (value && isArray(value) && value.length > 0) {
      const hasPermission = permission.some((role) => {
        return value.includes(role)
      })
      // 没有权限
      if (!hasPermission) {
        // 移除按钮
        el.parentNode.removeChild(el)
      }
    } else {
      throw new Error("need roles! Like v-permission=\"['permission1','permission2']\"")
    }
  },
}
