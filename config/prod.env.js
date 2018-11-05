'use strict'

const ml = process.env.npm_lifecycle_event;
var obj = {};
if(ml == 'test'){   //test 环境
  obj = {
    NODE_ENV: '"production"',
    API_ROOT: '"https://api.globalpcf.net/identityService"', //api网关（普通）
    SAAS_HOST:'"https://globalpcf.net/"',                  //网站
    SAAS_AUTH:'"https://auth.globalpcf.net/"',                      //登录
    SAAS_PLATFORM:'"https://api.globalpcf.net/shopService"',        //店铺绑定
    FILE_SERVICE: '"https://api.globalpcf.net/fileService"', //api网关（下载）
  }
}else if(ml == 'build'){    //线上环境
  obj= {
    NODE_ENV: '"production"',
    API_ROOT: '"https://api.vesaas.com/identityService"', //api网关（普通）
    SAAS_HOST:'"https://vesaas.com/"',                  //网站
    SAAS_AUTH:'"https://auth.vesaas.com/"',                      //登录
    SAAS_PLATFORM:'"https://api.vesaas.com/shopService"',        //店铺绑定
    FILE_SERVICE: '"https://api.vesaas.com/fileService"', //api网关（下载）
  }
}

module.exports = obj;
