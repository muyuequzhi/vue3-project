const fn = (num) => new Promise((resolve, reject) => setTimeout(() => reject(num), 1000))

async function fn1() {
  try {
    let res = await fn(111)
    console.log(res)
  } catch (err) {
    console.log('err', err)
  }
}
fn1()
