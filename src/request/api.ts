import Axios from './request'

export const getUserInfo = () => {
  return Axios({ url: '/getData', method: 'get' })
}
