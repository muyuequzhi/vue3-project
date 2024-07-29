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
