下拉多选
form表单验证 动态增加form
checkbox 显示其它
select checkbox 选择联动其它显示隐藏

rollup 打包工具 将每个小模块的js 打包在一起

## 支持ES6的导入导出，只引入需要的函数

```js
import { ajax } from './utils'
const query = 'Rollup'
// 调用 ajax 函数
ajax(`https://api.example.com?search=${query}`).then(handleResponse)
```

## ...扩展运算符

### 用于展开数组作为参数

```js
const fn = (a, b, c) => console.log(`param is a:${a} b:${b} c:${c}`)

fn(...[1, 2, 3]) == fn(1, 2, 3)
```

### deepClone数组

```js
const arr1 = [1, 2, 3]

// 如果直接 const arr2 = arr1，这样arr1修改了，arr2也会跟着修改
const arr2 = [...arr1]
```

## git 操作

查看分支
git branch

切换分支
git checkout <分支名>

删除缓存
git rm --cached <文件名>

跳转至某次commit
git checkout commit-hash
例如 git checkout 22dfbf1f907764c5ae70381b8191104f9af21d8c

放弃当前所有更改
git checkout -- .

放弃某文件更改
git checkout -- 文件路径

暂存所有更改
git stash
暂存所有更改 时 添加注释信息
git stash save '注释'
取出暂存
git stash pop

查看文件历史记录
git log filename

查看文件每次提交的diff
git log -p filename

列出文件的所有改动历史
git log --pretty=oneline filename

## 20240701

drastically

速度 伤害 生命值 恢复能力 技能
外貌 成长过程与性格
