<!--
   title提醒信息展示
-->
<template>
    <div class="title-info size12" v-show="isShow">
      <div style="flex:1">
        {{info}}
      </div>
      <div class="btn-box">
        <el-button type="info" native-type="button" size="small" class="btn" @click="close">{{$t('description.not-tie')}}</el-button>
      </div>
      
    </div>
</template>

<script type="es6">
  /*
  * 入参：info
  * 入参格式示例：
  * 入参参数说明：info -> 要提醒的文字信息
  *              titleInfo-> 该页面的名称，
  * 功能： 传入一个页面的名称，会去本地查询该页面是否被查看过。
  * */
    export default {
      props: {
        info:{
          type: String,
          default: ''
        },
        titleInfo: {
          type: String,
          default: ''
        }
      },
      data() {
          return {
            isShow : true,
          }
      },
      created() {
        if(window.localStorage.getItem('titleInfoAry')){
          let titleInfoAry = JSON.parse(window.localStorage.getItem('titleInfoAry'))
          console.log(titleInfoAry)
          titleInfoAry.forEach((item)=> {
            if(item === this.titleInfo){
              this.isShow = false
            }else{
              this.isShow = true
            }
          })
        }
      },
      methods: {
        close() {
          this.isShow = false
          let titleInfoAry =[]
          if(window.localStorage.getItem('titleInfoAry')){
            titleInfoAry = JSON.parse(window.localStorage.getItem('titleInfoAry'))
          }
          titleInfoAry.push(this.titleInfo)
           console.log(titleInfoAry)
          window.localStorage.setItem('titleInfoAry',JSON.stringify(titleInfoAry))
        }
      }
    }
</script>

<style scoped>
  .title-info{
    height: 50px;
    padding-left:15px;
    display: flex;
    align-items: center;
    position:relative;
    color:#333;
    background:#eaedf1;
  }
  .btn-box{
    width:110px;
    text-align:left;
    padding-left:10px;
  }
  
</style>
