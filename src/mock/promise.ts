import { MockMethod } from 'vite-plugin-mock'

const userInfo = {
  name: 'username',
  age: '18',
  address: '浦东新区',
}
const systemData = {
  name: 'CRM',
  num: 20,
}
const companyData = {
  name: '上海银行',
}
export default [
  {
    url: '/getUserData',
    method: 'get',
    timeout: 2000,
    response: () => {
      return {
        code: 200,
        msg: '',
        data: userInfo,
      }
    },
  },
  {
    url: '/getSystemData',
    method: 'get',
    timeout: 2000,
    response: () => {
      return {
        code: 200,
        msg: '',
        data: systemData,
      }
    },
  },
  {
    url: '/getCompanyData',
    method: 'get',
    timeout: 2000,
    response: () => {
      return {
        code: 200,
        msg: '',
        data: companyData,
      }
    },
  },
] as MockMethod[]
