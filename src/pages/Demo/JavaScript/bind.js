// bind
let user = {
  name: 'jack',
}
function fn() {
  console.log(this.name)
}
let fnUser = fn.bind(user)
fnUser()

function f() {
  console.log(this) // ?
}

let obj = {
  name: 'objName',
  fn: function () {
    console.log(this)
  },
}
obj.fn()
let newFn = obj.fn.bind({ name: 'xxx' })
newFn()
