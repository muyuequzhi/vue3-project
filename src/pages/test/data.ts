import Axios from '@/request/request.ts'
export const getTableData = () => {
  return Axios({ url: '/getTableData', method: 'get' })
}
