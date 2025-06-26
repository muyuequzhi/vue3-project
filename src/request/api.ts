import Axios from './request'

export const getUserInfo = () => {
  return Axios({ url: '/getUserData', method: 'get' })
}

export const getSystemData = () => {
  return Axios({ url: '/getSystemData', method: 'get' })
}

export const getCompanyData = () => {
  return Axios({ url: '/getCompanyData', method: 'get' })
}
