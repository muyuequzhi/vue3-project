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

const tableData1 = () => {
  const result: any[] = []
  const resultObj = {
    data: <any>[],
    total: 400,
  }
  for (let i = 1; i < 30; i++) {
    const obj = {
      id: i,
      colName: 'col' + i,
      date: i == 5 ? '-' : '2016-05-' + (i > 9 ? i : '0' + i),
      name: 'name' + (i == 2 ? 'xxxxxxxxxxxxxxxxxxxx2' : i),
      address: 'No. 189',
      val: `${i == 2 ? '' : 10000 * i}`,
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
  {
    url: '/getTableData1',
    method: 'get',
    timeout: 500,
    response: () => {
      return {
        code: 200,

        msg: '',
        data: tableData1,
      }
    },
  },
] as MockMethod[]
