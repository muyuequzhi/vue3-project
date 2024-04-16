//导入axios
import axios from 'axios'
import { ElLoading } from 'element-plus'

// const codeMessage = {
//   200: '服务器成功返回请求数据。',
//   201: '新建或修改数据成功。',
//   202: '一个请求已进入后台排队（异步任务）。',
//   204: '新建或修改数据成功。',
//   401: '用户没有权限（令牌、用户名、密码错误）。',
//   403: '用户得到授权，但是访问是被禁止的。',
//   404: '发出的请求针对的事不存在的记录，服务器没有进行操作。',
//   406: '请求的格式不可得。',
//   410: '请求的资源被永久删除，且不会再得到的。',
//   422: '当创建一个对象时，发生一个验证错误。',
//   500: '服务器发生错误，请检查服务器。',
//   502: '网关错误',
//   503: '服务不可用，服务器暂时过载或维护。',
//   504: '网关超时',
//   timeout: '加载超时',
// }
//使用axios下面的create([config])方法创建axios实例，其中config参数为axios最基本的配置信息。
const Axios = axios.create({
  withCredentials: true,
  timeout: 60000, //请求超时设置，单位ms
})

// 添加请求拦截器
Axios.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  },
)

// 添加响应拦截器
Axios.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    switch (response.data.code) {
      case 200:
        'xx'
    }
    return response
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    console.log('err' + error) // for debug
    return Promise.reject(error)
  },
)
//导出我们建立的axios实例模块，ES6 export用法
export default Axios
