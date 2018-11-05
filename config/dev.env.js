'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_ROOT: '"/apiHost"',
  SAAS_PLATFORM: '"/shopService"',
  SAAS_HOST:'"/saasHost"',
  SAAS_AUTH:'"/saasAuth"',
  FILE_SERVICE: '"/fileService"',
})
