// this 绑定
const a = {
  val: 666,
  f: function () {
    console.log(this.val)
  },
}
a.f()

let b = a.f.bind({ val: 888 })
b() // == a.f.call({ val: 888 })   bind 只是绑定this，call在绑定this后调用
a.f.call({ val: 888 }) //直接调用
