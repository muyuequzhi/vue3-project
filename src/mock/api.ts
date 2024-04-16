import axios from 'axios'

export const getUserInfo = () => {
  return axios({ url: '/getData', method: 'get' })
}
