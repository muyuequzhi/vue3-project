export function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj))
}

//  -2 0  -2 3
let arr = [0, -2, 3, -5, 9]
arr.sort((a, b) => {
  console.log(a, b)
  if (a > b) {
    return 1
  }
  if (a < b) {
    return -1
  }
  return 0
})
console.log(arr)
