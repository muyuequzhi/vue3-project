import { createApp, Directive } from 'vue'
import '@/style/common/var.css'
import './style.css'
import App from './App.vue'
import router from '@/router/index'
// 引入阿里云字体图标css
import '@/assets/iconfont/iconfont.js'
// 引入echarts
import echarts from '@/utils/echarts'
// 引入 createPinia 函数
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'
import Axios from '@/request/request'
// 引入mock
import { setupProdMockServer } from '@/mock/mockProdServer'
import * as directives from '@/directives/index.js'

// element plus icon
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'

//动画
import 'animate.css'

if (import.meta.env.MODE === 'development') {
  //dev环境开启mock
  setupProdMockServer()
}
// 创建 pinia 实例（根 store）
const pinia = createPinia()
pinia.use(piniaPersist) //插件作用 把pinia存储在浏览器
const app = createApp(App)

app.config.globalProperties.$echarts = echarts
// 注册指令
Object.keys(directives).forEach((key) => {
  //Object.keys() 返回一个数组，值是所有可遍历属性的key名
  app.directive(key, (directives as { [key: string]: Directive })[key])
  //key是自定义指令名字；后面应该是自定义指令的值，值类型是string
})
app.use(pinia)
app.use(router)
app.mount('#app')
//配置axios的全局引用
app.config.globalProperties.$axios = { ...Axios }
app.config.globalProperties.msg = 'global msg'
// element plus icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
