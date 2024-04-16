/*
 * @Author: Umaru 573112924@qq.com
 * @Date: 2023-08-25 10:43:31
 * @LastEditors: Umaru 573112924@qq.com
 * @LastEditTime: 2023-08-25 11:07:41
 * @FilePath: /vite-project/source-map.js
 * @Description: 手动映射sourcemap示例
 */
import { SourceMapConsumer } from 'source-map'
import * as fs from 'fs'
const rawSourceMap = fs.readFileSync('./dist/assets/index-c24d54fd.js.map', 'utf-8')

// 填入错误信息
originalPositionFor('index-c24d54fd.js:1:809')

function originalPositionFor(errInfo) {
  const [budleName, line, column] = errInfo.split(':')

  SourceMapConsumer.with(rawSourceMap, null, (consumer) => {
    const originalPosition = consumer.originalPositionFor({
      line: parseInt(line),
      column: parseInt(column),
    })

    console.log('bundle name = ', budleName)
    console.log('original position = ', originalPosition)
  })
}
