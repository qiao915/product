<!--
  名词解释
	Created by 吴乔 on 2018/10/26.
-->
<template>
    <div class="explanationOfNouns" @click="close">
      <div class="content" @click.stop>
        <div class="head size12 colorF fontB">
          <span v-if="num == 1">{{$t('editProduct.translate')}}</span>
          <span v-if="num == 2">UPC/EAN</span>
          <span v-if="num == 3">{{$t('editProduct.produce-SKU')}}</span>
          <span v-if="num == 4">{{$t('editProduct.produce-SKU-gj')}}</span>
          <span v-if="num == 5">{{$t('editProduct.produce-class')}}</span>
          <span v-if="num == 6">{{$t('editProduct.HS-NO')}}</span>
          <span v-if="num == 7">{{$t('editProduct.custom')}}</span>
          <span v-if="num == 8">{{$t('editProduct.select-custom')}}</span>
          <span v-if="num == 9">{{$t('editProduct.suggested-retail-price')}}</span>
          <span v-if="num == 10">{{$t('editProduct.product-property')}}</span>
          <span v-if="num == 11">{{$t('editProduct.product-describe-module')}}</span>
          <span v-if="num == 12">{{$t('editProduct.manage-tags')}}</span>
          <i class="el-icon-close size18 colorF pointer" :title="$t('editProduct.module-close')" @click="close"></i>
        </div>

        <div class="main">
          <!-- todo 翻译语言 -->
          <div v-if="num == 1">
            <span class="indent2em size12 color33">{{$t('explanationOfNouns.translate-message')}}</span>
            <span class="indent2em size12 color26 pointer">{{$t('explanationOfNouns.set-translate')}}</span>
          </div>

          <!-- todo UPC/EAN -->
          <div v-if="num == 2">
            <span class="indent2em size12 color33">{{$t('explanationOfNouns.upc-ean-message1')}}</span>
            <span class="indent2em size12 color33">{{$t('explanationOfNouns.upc-ean-message2')}}</span>
            <span class="indent2em size12 color33">{{$t('explanationOfNouns.upc-ean-message3')}}</span>
            <span class="indent2em size12 color33">{{$t('explanationOfNouns.upc-ean-message4')}}</span>
            <span class="indent2em size12 color26 pointer">{{$t('explanationOfNouns.buy-upc-ean')}}</span>
          </div>

          <!-- todo 产品SKU -->
          <div v-if="num == 3">
            <span class="indent2em size12 color33"> {{$t('explanationOfNouns.product-sku')}}</span>
          </div>

          <!-- todo SKU工具 -->
          <div v-if="num == 4">
            <span class="indent2em size12 color33">{{$t('explanationOfNouns.sku-tool')}}</span>
            <span class="indent2em size12 color26 pointer">{{$t('explanationOfNouns.set-sku-rule')}}</span>
          </div>

          <!-- todo 分类 -->
          <div v-if="num == 5">
            <span class="indent2em size12 color33">{{$t('explanationOfNouns.produce-class')}}</span>
            <span class="indent2em size12 color26 pointer">{{$t('explanationOfNouns.set-produce-class')}}</span>
          </div>

          <!-- todo HS 编码 -->
          <div v-if="num == 6">
            <span class="indent2em size12 color33">{{$t('explanationOfNouns.hs-no')}}</span>
            <span class="indent2em size12 color26 pointer"><a href="http://www.customs.gov.cn/publish/portal0/tab67737/" target="_blank">http://www.customs.gov.cn/publish/portal0/tab67737/</a> </span>
          </div>

          <!-- todo 自定义 -->
          <div v-if="num == 7">
            <span class="indent2em size12 color33">{{$t('explanationOfNouns.custom-message')}}</span>
            <!--<span class="indent2em size12 color26 pointer"></span>-->
          </div>

          <!-- todo 切换自定义规格模版 -->
          <div v-if="num == 8">
            <span class="indent2em size12 color33">{{$t('explanationOfNouns.select-custom-module')}}</span>
            <!--<span class="indent2em size12 color26 pointer"></span>-->
          </div>

          <!-- todo 建议零售价格 -->
          <div v-if="num == 9">
            <span class="indent2em size12 color33"> {{$t('explanationOfNouns.suggested-retail-price')}}</span>
            <span class="indent2em size12 color26 pointer">{{$t('explanationOfNouns.set-suggested-retail-price')}}</span>
          </div>

          <!-- todo 属性 -->
          <div v-if="num == 10">
            <span class="indent2em size12 color33">{{$t('explanationOfNouns.product-property-message1')}}</span>
            <span class="indent2em size12 color33">{{$t('explanationOfNouns.product-property-message2')}}</span>
            <span class="indent2em size12 color33">{{$t('explanationOfNouns.product-property-message3')}}</span>
            <span class="indent2em size12 color33">{{$t('explanationOfNouns.product-property-message4')}}</span>
            <!--<span class="indent2em size12 color26 pointer"></span>-->
          </div>

          <!-- todo 描述模版 -->
          <div v-if="num == 11">
            <span class="indent2em size12 color33">{{$t('explanationOfNouns.describe-module')}}</span>
            <span class="indent2em size12 color26 pointer">{{$t('explanationOfNouns.set-describe-module')}}</span>
          </div>

          <!-- todo 管理标签 -->
          <div v-if="num == 12">
            <span class="indent2em size12 color33">{{$t('explanationOfNouns.manage-tags')}}</span>
            <span class="indent2em size12 color26 pointer">{{$t('explanationOfNouns.set-manage-tags')}}</span>
          </div>
        </div>

        <div class="btnBox">
          <el-button style="width: 123px" type="info" native-type="button" size="mini" class="btnWidth" round @click="close">{{$t('editProduct.module-close')}}</el-button>
        </div>
      </div>
    </div>
</template>

<script type="es6">
    export default {
      props:['num'],
        data() {
            return {}
        },
      methods:{
        close(){
          this.$emit("nounsClose")
        }
      }

    }
</script>

<style scoped>
  .explanationOfNouns{
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
  .content{
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 9px;
    box-shadow: 2px 3px 5px #bbb;
    overflow: hidden;
    padding-bottom: 5px;
    margin-bottom: 30px;
    max-height: 75%;
    width: 600px;
  }
  .content .head{
    height: 32px;
    background: #2681FE;
    width: 100%;
    text-align: center;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    box-sizing: border-box;
  }
  .content .main{
    flex: 1;
    display: flex;
    flex-direction: column;
    padding:10px 15px;
    box-sizing: border-box;
    -webkit-overflow-scrolling: touch;
  }
  .content .main div{
    display: flex;
    flex-direction: column;
  }
  .content .main div span{
    margin-top: 5px;
  }
</style>
