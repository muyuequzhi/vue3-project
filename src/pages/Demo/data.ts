import axios from '@/request/request'

const getTableData1 = () => {
  return axios({ url: '/getTableData1', method: 'get' })
}

export { getTableData1 }
