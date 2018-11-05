import axios from 'axios'
axios.defaults.baseURL = 'http://192.168.1.91:6301/api'

// 获取分类管理页 列表
export function getCategoriesList() {
  const url = '/productCategories'
  return axios.get(url)
    .then(res => {
      return Promise.resolve(res.data)
    })
    .catch(err => {
      console.log(err)
      return Promise.reject(err)
    })
}
// 新建分类
export function addCategories(params) {
  const url = '/productCategories'
  return axios.post(url, params)
    .then(res => {
      return Promise.resolve(res.data)
    })
    .catch(err => {
      console.log(err)
      return Promise.reject(err)
    })
}
// 编辑分类
export function editCategories(params,categoryId) {
  const url = `/productCategories/${categoryId}`
  return axios.put(url, params)
    .then(response => {
      return Promise.resolve(response.data)
    })
    .catch(error => {
      console.log(error)
      return Promise.reject(error)
    })
}

// 添加子分类 （批量）
export function addSubCategories(params) {
  const url = '/productCategories/batch'
  return axios.post(url, params)
    .then(response => {
      return Promise.resolve(response.data)
    })
    .catch(error => {
      console.log(error)
      return Promise.reject(error)
    })
}

// 启用分类
export function enableCategory(categoryId, params) {
  const url = `/productCategories/${categoryId}/enable`
  return axios.post(url, params)
    .then(response => {
      return Promise.resolve(response.data)
    })
    .catch(error => {
      console.log(error)
      return Promise.reject(error)
    })
}

// 禁用分类
export function disableCategory(categoryId, params) {
  const url = `/productCategories/${categoryId}/disable`
  return axios.post(url, params)
    .then(response => {
      return Promise.resolve(response.data)
    })
    .catch(error => {
      console.log(error)
      return Promise.reject(error)
    })
}
