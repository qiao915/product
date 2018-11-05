import utils from './oidcRoot'

let promiseApi = {
  post (url, data) {
    return new Promise((resolve, reject) => {
      utils.getPlatformApi(url, 'POST', data, (res) => {
        resolve(JSON.parse(res))
      }, (error) => {
        reject(JSON.parse(error))
      })
    })
  },
  get (url, data) {
    return new Promise((resolve, reject) => {
      utils.getPlatformApi(url, 'GET', data, (res) => {
        resolve(JSON.parse(res))
      }, (error) => {
        reject(JSON.parse(error))
      })
    })
  },
  put (url, data) {
    return new Promise((resolve, reject) => {
      utils.getPlatformApi(url, 'PUT', data, (res) => {
        resolve(JSON.parse(res))
      }, (error) => {
        reject(JSON.parse(error))
      })
    })
  },
  delete (url, data) {
    return new Promise((resolve, reject) => {
      utils.getPlatformApi(url, 'DELETE', data, (res) => {
        resolve(JSON.parse(res))
      }, (error) => {
        reject(JSON.parse(error))
      })
    })
  }
}

export default promiseApi
