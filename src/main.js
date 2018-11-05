// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './element-variables.scss'
import directive from './public/directive'
import axios from 'axios'
// 语言转换
import '../static/common-css/common.css'
import '../static/common-css/quillFontSize.css'
import i18n from './i18n/i18n';
// 引用API文件

// Vue.prototype.progressTime = null;      //定时器

Vue.use(ElementUI)

Vue.config.productionTip = false
const AUTH_TOKEN = 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkJFQ0M4NUNBOTc1MDEyQTZERUMzNzk2MzczODBBN0ZGQUZGMjkzMEMiLCJ0eXAiOiJKV1QiLCJ4NXQiOiJ2c3lGeXBkUUVxYmV3M2xqYzRDbl82X3lrd3cifQ.eyJuYmYiOjE1NDEyNDM1NjYsImV4cCI6MTU0MTI0NzE2NiwiaXNzIjoiaHR0cHM6Ly9hdXRoLmdsb2JhbHBjZi5uZXQiLCJhdWQiOlsiaHR0cHM6Ly9hdXRoLmdsb2JhbHBjZi5uZXQvcmVzb3VyY2VzIiwicHJvZHVjdFNlcnZpY2UiXSwiY2xpZW50X2lkIjoiUHJvZHVjdFN3YWdnZXJVSSIsInN1YiI6Ijg5MWRjZmNiLTYxZjItNDZjYy1hMDZmLTJmZWQzMTdjZDMxNCIsImF1dGhfdGltZSI6MTU0MTIyODIxMiwiaWRwIjoibG9jYWwiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJsZW8uaHVhbmdsaWFuZzIwMTVAZ21haWwuY29tIiwidW5pcXVlX25hbWUiOiJsZW8uaHVhbmdsaWFuZzIwMTVAZ21haWwuY29tIiwidGVuYW50Y29kZSI6InNhYXMwMSIsInRlbmFudG5hbWUiOiIiLCJyZWdpc3RlcmZyb20iOiJPbmxpbmUiLCJwYXNzd29yZGZpcnN0dGltZXVwZGF0ZWQiOmZhbHNlLCJmdWxsX25hbWUiOiLkuq7lk6UiLCJyb2xlIjoiVGVuYW50T3duZXIiLCJlbWFpbCI6Imxlby5odWFuZ2xpYW5nMjAxNUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGhvbmVfbnVtYmVyIjoiMTgzMzI1NTU0ODQiLCJwaG9uZV9udW1iZXJfdmVyaWZpZWQiOnRydWUsInNjb3BlIjpbInByb2R1Y3RTZXJ2aWNlIl0sImFtciI6WyJwd2QiXX0.VJ8rlOk5Es8THMo9DfjfXqJ6oAkNwRItgBXPNcfFunW5W7F4l_SQ3Vx24LoWEX5GUwJ8SS3JVzIpwTcSrJhY4bbkAgX8DL-nnzzL7EFJ_fMGhbiDafzX6BptwQ_hBj-XdhtWZrvKGO581VG4Kr1FuETbTIPuvbPl43QpTcoYrNXuLNVnAwwRUu13GtverP00FHwV2-HWyU1Iox5gLlk-o24ivrnvAaGXimvJnBNK_r800IvhHwd3WgkjjwiX1pyBc5Qqy8lm8q55lUPMkQWuDCVFs_qc7J-AEhoVvLUYmkMeAcQs3EBx0c3QZrA0-2_2DVB-avweXl7j0-p0mTQv4g'
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  directive,
  components: { App },
  template: '<App/>'
})
