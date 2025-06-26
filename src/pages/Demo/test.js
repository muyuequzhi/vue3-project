const o = {
  name: 'vue',
}
const obj = new Proxy(o, {
  get: function (target, propKey) {
    console.log(target, propKey, 888)
    if (propKey in target) {
      return target[propKey]
    } else {
      throw new ReferenceError(`prop key (${propKey}) not exist`)
    }
  },
  set: function (target, propKey, propVal, d) {
    console.log(target, propKey, propVal, 888)
    if (typeof propVal == 'number') {
      console.log('不能赋值为number')
      return target
    } else {
      return (target[propKey] = propVal)
      //return Reflect.set(target, propKey, propVal)
    }
  },
})
// console.log(obj.name)
// console.log(obj.a)
obj.name = 1
// obj.name = '1'
console.log(obj)

setTimeout(function () {
  console.log(111)
}, 100)
setTimeout(function () {
  console.log(222)
}, 0)

const timeFn = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('done'), 1000)
  })
const fn = async () => {
  const result = await timeFn()
  console.log(result)
  console.log(222)
  return 333
}
fn().then((v) => console.log(v))

async function showAvatar() {
  let res = await fetch('/article/promise-chaining/user.json')
  console.log(res)
}
showAvatar()
