import { MockMethod } from 'vite-plugin-mock'

const tableData = () => {
  const result: any[] = []
  const resultObj = {
    data: <any>[],
    total: 400,
  }
  for (let i = 0; i < 10; i++) {
    const obj = {
      id: i,
      col1: `col${i}`,
      col2: `col${i}`,
      col3: `col${i}`,
      col4: `col${i}`,
      col5: `col${i}`,
      col6: `col${i}`,
      col7: `col${i}`,
    }
    result.push(obj)
  }
  resultObj.data = result
  return result
}

export default [
  {
    url: '/getTableData',
    method: 'get',
    timeout: 500,
    response: () => {
      return {
        code: 200,

        msg: '',
        data: tableData,
      }
    },
  },
] as MockMethod[]
