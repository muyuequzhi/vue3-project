```ts
let str: string = '1'
let num: number = 2
let b: boolean = true
let arr: number[] = [1, 0, 2]
let arr1: Array<number> = [1, 2] //这个与上个有啥区别？
let obj: object = { x: 1 }
let u: undefined = undefined
let n: null = null

let x: any = '4'
x = 2

// void 用于函数没有返回值的情况， 其实返回了undefined ，所以void和undefined 什么区别？
function resNone(): void {}
let none = resNone()
console.log(none)

// 类型必须一致，多一个少一个都不行
interface Book {
  name: string
  pageNum: number
  z?: number // ? 表示可选，没有也行
  readonly p: number
}
const book: Book = { name: '', pageNum: 1, p: 666 }
book.z = 888
console.log(book)

// 函数类型

function sum(a: number, b: number): string {
  return 'str' + a + b
}
console.log(sum(1, 2))

interface sumType {
  a: number
  b: number
}
function sum1({ a, b }: sumType): string {
  return 'str' + a + b
}
console.log(sum1({ a: 6, b: 8 }))

// 函数重载
function sum2(a: string, b: number): string
function sum2(a: number, b: number): number
function sum2(a: number, b: number, c?: boolean): any
function sum2(a: any, b: number, c?: boolean) {
  if (c) {
    return 0
  } else {
    if (typeof a == 'string' && typeof b == 'number') {
      return a + b
    } else if (typeof a == 'number' && typeof b == 'number') {
      return b - a
    } else {
      return a + b
    }
  }
}

console.log(sum2('1', 6))
console.log(sum2(1, 6))
console.log(sum2(1, 6, true))

//泛型
function say<T>(p: T): T {
  console.log(p)
  return p
}
console.log(say(111))
console.log(say('111 str'))

interface lengthType {
  length: number
}
function say1<T extends lengthType>(p: T): T {
  console.log(p.length)
  return p
}
say1('12') //say1(6) 会报错，因为6没有length

// 试下any
function say2(p: number): any {
  return null
}
console.log(say2(1))
// 交叉类型
type NewBook = Book & { color: string }
let newBook: NewBook = {
  name: 'xx',
  pageNum: 6,
  p: 1,
  color: 'white',
}
console.log(newBook)

interface NewBook1 extends NewBook {
  size: string
}
let newBook1: NewBook1 = {
  name: 'xx',
  pageNum: 6,
  p: 1,
  color: 'white',
  size: '66',
}
console.log(newBook1)

// 联合类型 用type定义
type p1 = number | string | null

function res(p: p1): any {
  console.log(p)
}
res(null)
```
