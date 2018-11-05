import Vue from 'vue'
import router from '../router'
import axios from 'axios'
import qs from 'qs'
import { MessageBox, Message, Loading} from 'element-ui'

const axiosInstance = axios.create();
const apiRoot = process.env.API_ROOT;    //接口前缀
// http request 拦截器
axiosInstance.interceptors.request.use(
  config => {   //在请求发出之前进行一些操作

    Loading.service({    //请求loading显示
      lock: true,
      text: 'Loading',   //显示文本
      background:"rgba(0, 0, 0, 0.8)",  //背景颜色
      // spinner: 'el-icon-loading',  //loading icon
      customClass:'loadingName color26',   //附加calss
    });

    if (config.url.indexOf('/login') === -1) {    //请求中不包含'/login'时候 即不是登录请求的时候
      if (!localStorage.getItem('assess_token')) {    //没有用户标识  即需要用户去登陆
        return router.push({ path: '/login' });   //路由到登录页面
      } else {
        config.headers['Access-Token'] = localStorage.getItem('assess_token');      //有用户标识 则将用户标识符设置为请求头
      }
    }
    return config
  },
  error => {
    MessageBox.alert(error, '接口请求错误', {
      confirmButtonText: '确定',
    });
    if (!!error) {
      return Promise.reject(error);
    }
  }
)

/**
 * http response 拦截器
 * resp.data.code:
 *    -10: 登录超时
 *    -1：登录无效
 *    0：成功，正常
 *    400：成功返回，需特殊处理
 */
axiosInstance.interceptors.response.use(
  resp => {     //在这里对返回的数据进行处理

    //loading 关闭
    let loadingInstance = Loading.service();
    loadingInstance.close();

    if (resp.data.code === -10) {     //后台返回登录超时   则置空缓存中的用户标识 并登录
      localStorage.removeItem('assess_token');
      return Message({
        message: '登录超时',
        type: 'error',
        duration: '1000',
        onClose: function() {
          router.push({ path: '/login' });
        }
      });
    } else if (resp.data.code === -1) {    //后台返回登录无效   则置空缓存中的用户标识 并登录
      localStorage.removeItem('assess_token');
      return Message({
        message: '登录无效',
        type: 'error',
        duration: '1000',
        onClose: function() {
          router.push({ path: '/login' });
        }
      });
    } else {       //后台返回400
      if (resp.data.code !== 0 && resp.data.code !== 400) {
        MessageBox.alert(resp.data.msg, '请求错误', {
          confirmButtonText: '确定'
        });
      }
    }
    return Promise.resolve(resp.data);
  },
  error => {
    if(localStorage.getItem('assess_token')){
      MessageBox.alert('接口请求错误，请联系管理员', '接口请求错误', {
        confirmButtonText: '确定',
      });
    }else{
      MessageBox.alert('登录无效，请登录', '登录无效',{
        confirmButtonText: '确定',
      });
    }
    return Promise.reject(error);
  }
);
export default {
  post(url, data) {     //post请求
    if(url.indexOf('http') == -1){
      url = apiRoot + url;
    }
    return axiosInstance({
      method: 'post',
      url: url,
      data: qs.stringify(data),
      timeout: 60000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    });
  },

  get(url, params) {        //get请求
    if(url.indexOf('http') == -1){
      url = apiRoot + url;
    }
    return axiosInstance({
      method: 'get',
      url: url,
      params: params,
      timeout: 60000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    });
  }
}
