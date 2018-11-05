<!--
  添加管理标签组件
	Created by 吴乔 on 2018/10/30.
-->
<template>
  <div class="addManageTags" @click="close">
    <div class="content" @click.stop>
      <div class="head size12 back26">
        <span class="fontB colorF size12">{{$t('editProduct.add-manage-tags')}}</span>
        <i class="el-icon-close size18 colorF pointer" :title="$t('editProduct.module-close')" @click="close"></i>
      </div>

      <ul class="main size12">
        <li v-for="(item,index) in 20" @click="activeIndex = index" class="pointer" :class="{'active': activeIndex == index}">张三 {{index}}</li>
        <li class="color26 pointer">{{$t('editProduct.manage-tags-change')}}</li>
      </ul>
      <div class="btnbox">
        <el-button type="primary" size="mini" round style="width: 123px" @click="close">{{$t('editProduct.product-add')}}</el-button>
        <el-button type="info" size="mini" round style="width: 123px" @click="close">{{$t('editProduct.product-cancel')}}</el-button>
      </div>
    </div>
  </div>
</template>

<script type="es6">
  export default {
    data() {
      return {
        activeIndex:"",      ///  选中的标签index
      }
    },
    watch:{
      activeIndex:function (value) {
        console.log(value)
      }
    },
    methods:{
      close(){
        this.$emit("addManageTags")
      }
    }


  }
</script>

<style scoped>
  .addManageTags {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.4);
    z-index: 999;
  }
  .content {
    background: white;
    border-radius: 9px;
    box-shadow: 2px 3px 5px #bbb;
    overflow: hidden;
    padding-bottom: 5px;
    margin-bottom: 30px;
    max-height: 75%;
    width: 750px;

  }
  .content .head {
    height: 32px;
    background: #2681FE;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    box-sizing: border-box;

  }
  .main {
    width: 100%;
    padding-left: 26px;
    margin: 5px 0 15px;
    max-height: 50vh;
    box-sizing: border-box;
    overflow-y: auto;
    display: flex;
    flex-wrap: wrap;
  }
  .main li{
    text-align: center;
    width: 115px;
    border-radius: 5px;
    margin-top: 10px;
    padding:5px;
    background: #bbb;
    margin-right: 26px;
    box-sizing: border-box;
  }
  .main li:hover{
    color: white;
    background: #2681FE;
  }
  .main li.active{
    color: white;
    background: #2681FE;
  }
  .btnbox {
    display: flex;
    justify-content: center;
  }
  .main li:nth-last-child(1){
    background: transparent;
    text-align: left;
  }
  .main li:nth-last-child(1):hover{
    background: transparent;
    color: #2681FE;
  }

</style>
