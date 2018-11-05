import axios from 'axios'

//产品查询
export function recycleBinItems(PageNumber,PageSize,SKU,ProductName,operationTimeBegin,operationTimeEnd) {
  const url = 'http://192.168.1.91:6301/api/recycleBinItems'
  return axios.get(url, {
    params: {
      PageNumber,
      PageSize,
      SKU,
      ProductName,
      operationTimeBegin,
      operationTimeEnd
    }
  })
    .then((res) => {
      return Promise.resolve(res.data)
    })
    .catch(function (err) {
      console.log(err)
    })
}


//单个or批量删除
export function productsDelete(productIds) {
  const url = '/api/recycleBinItems/products'
  const data = {
    productIds
  }
  return axios.delete(url, data)
    .then((res) => {
      return Promise.resolve(res)

    })
    .catch(function (err) {
      console.log(err)
    })
}

//单个or批量恢复
export function productsRecovery(productIds) {
  const url = '/api/recycleBinItems/products/{productId}/recovery'
  const data = {
    productIds
  }
  return axios.post(url, data)
    .then((res) => {
      return Promise.resolve(res)

    })
    .catch(function (err) {
      console.log(err)
    })
}

//已删除的分类查询
export function productCategories(keyword, operationTimeBegin, operationTimeEnd, PageNumber, PageSize) {
  const url = '/api/recycleBinItems/productCategories'
  const data = {
    keyword,
    operationTimeBegin,
    operationTimeEnd,
    PageNumber,
    PageSize
  }
  return axios.get(url, data)
    .then((res) => {
      return Promise.resolve(res)

    })
    .catch(function (err) {
      console.log(err)
    })
}
