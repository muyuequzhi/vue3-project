export const isArray = function (o) {
  return Object.prototype.toString.call(o) == '[object Array]'
}
// 格式化银行卡号
export const formatCardNumber = function (number) {
  number = number.toString() || ''
  // 18位本行借记卡
  if (number.startsWith('6223') && number.length === 18) {
    number = number.slice(4)
  }
}

/**
 *
 * @param {Function} func 回调函数
 * @param {Number} wait 多久后执行回调函数
 * @param {Boolean} immediate 传参 immediate 为 true， debounce会在 wait 时间间隔的开始调用这个函数
 * @descript 防抖函数
 */
export const debounce = (func, wait = 100, immediate = false) => {
  let timeout, args, context, timestamp, result

  const later = function () {
    // 据上一次触发时间间隔
    const last = +new Date() - timestamp

    // 上次被包装函数被调用时间间隔 last 小于设定时间间隔 wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
      if (!immediate) {
        result = func.apply(context, args)
        if (!timeout) context = args = null
      }
    }
  }

  return function (...args) {
    context = this
    timestamp = +new Date()
    const callNow = immediate && !timeout
    // 如果延时不存在，重新设定延时
    if (!timeout) timeout = setTimeout(later, wait)
    if (callNow) {
      result = func.apply(context, args)
      context = args = null
    }

    return result
  }
}

/**
 *
 * @param {Function} func 回调函数
 * @param {Number} wait 至少多久再次执行回调函数
 * @descript 节流函数
 */
export const throttle = (func, wait) => {
  let context, args, result, timeoutID // caching
  var last = 0
  const call = () => {
    timeoutID = 0
    last = +new Date()
    result = func.apply(context, args)
    context = null
    args = null
  }

  return function (...argument) {
    context = this
    args = argument
    // args = a
    var delta = new Date() - last
    if (!timeoutID)
      if (delta >= wait) call()
      else timeoutID = setTimeout(call, wait - delta)
    return result
  }
}

export const parseObj = function (obj) {
  return JSON.parse(JSON.stringify(obj))
}

export const formatTime = (time, type) => {
  let date = new Date(Number(time))

  let dateObj = {}
  dateObj.year = date.getFullYear()
  dateObj.month = date.getMonth() + 1
  dateObj.day = date.getDate()
  dateObj.hour = date.getHours()
  dateObj.minute = date.getMinutes()
  dateObj.second = date.getSeconds()

  let padArr = ['month', 'day', 'hour', 'minute', 'second']
  padArr.forEach((item) => {
    if (String(dateObj[item]).length == 1) {
      dateObj[item] = '0' + dateObj[item]
    }
  })
  return `${dateObj.year}-${dateObj.month}-${dateObj.day} ${dateObj.hour}:${dateObj.minute}:${dateObj.second}`
}
