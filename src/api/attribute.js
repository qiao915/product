import axios from 'axios'
axios.defaults.baseURL = 'https://easy-mock.com/mock/5bcd7753797770257d19107d/api/product'

export function getAttrList () {
  const url = '/getAttrList'
  return axios.get(url)
    .then(res => {
      return Promise.resolve(res.data)
    })
    .catch(err => {
      console.log(err)
      return Promise.reject(err)
    })
}
