const DEV = import.meta.env.DEV
const SIT_IP = '10.240.90.35'
const UAT_IP = '10.240.90.39'
const PP_IP1 = '10.240.90.42'
const PP_IP2 = '10.240.90.43'
const HOST = window.location.host

const isLocal = (function (isDev) {
  return isDev && HOST.indexOf('localhost') !== -1
})(DEV)

const isSit = (function (isDev) {
  return !isDev && HOST.indexOf(SIT_IP) !== -1
})(DEV)

const isUat = (function (isDev) {
  return !isDev && HOST.indexOf(UAT_IP) !== -1
})(DEV)

const isPP = (function (isDev) {
  return !isDev && (HOST.indexOf(PP_IP1) !== -1 || HOST.indexOf(PP_IP2) !== -1)
})(DEV)

const isProd = (function (isDev) {
  return !isDev && !isLocal && !isSit && !isUat && !isPP
})(DEV)

export default {
  isLocal,
  isSit,
  isUat,
  isPP,
  isProd,
}
