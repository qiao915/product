<!--
  引用现有产品组件
	Created by 吴乔 on 2018/10/27.
-->
<template>
  <div class="quoteExitingProduct" @click="close">
    <div class="content" @click.stop>
      <div class="head size12 back26">
        <span class="fontB colorF size12">{{$t('editProduct.quote-exiting-product')}}</span>
        <i class="el-icon-close size18 colorF pointer" :title="$t('editProduct.module-close')" @click="close"></i>
      </div>
      <div class="main">
        <div class="elInput size12 color33">
          <!--<div class="left" style="line-height: 32px">关键词</div>-->
          <div class="right">
            <el-input
              class="width320"
              size="small"
              :placeholder="$t('editProduct.input-sku-search')"
              clearable>
            </el-input>
            <el-button type="primary" size="mini" class="width60">{{$t('editProduct.search')}}</el-button>
          </div>
        </div>

        <table>
          <thead>
          <tr>
            <td>{{$t('editProduct.select')}}</td>
            <td>{{$t('editProduct.product-image')}}</td>
            <td>{{$t('editProduct.produce-name')}}</td>
            <td>{{$t('editProduct.local-class')}}</td>
            <td>SKU</td>
            <td>{{$t('editProduct.yet-claim-shop')}}</td>
            <td>{{$t('editProduct.manage-tags')}}</td>
            <td>{{$t('editProduct.product-from')}}</td>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              <el-radio class="radio" v-model="radio" label="1"></el-radio>
            </td>
            <td><img src="../../assets/goods.jpg"/></td>
            <td>Cell Phones Smart phones</td>
            <td>3C>cell phone； Technic phone；</td>
            <td>NNKBR-8</td>
            <td>SHOP1;SHOP2</td>
            <td>淘宝；</td>
            <td>采集产品</td>
          </tr>
          <tr>
            <td>
              <el-radio class="radio" v-model="radio" label="2"></el-radio>
            </td>
            <td><img src="../../assets/goods.jpg"/></td>
            <td>Cell Phones Smart phones</td>
            <td>3C>cell phone； Technic phone；</td>
            <td>NNKBR-8</td>
            <td>SHOP1;SHOP2</td>
            <td>淘宝；</td>
            <td>采集产品</td>
          </tr>
          <tr>
            <td>
              <el-radio class="radio" v-model="radio" label="3"></el-radio>
            </td>
            <td><img src="../../assets/goods.jpg"/></td>
            <td>Cell Phones Smart phones</td>
            <td>3C>cell phone； Technic phone；</td>
            <td>NNKBR-8</td>
            <td>SHOP1;SHOP2</td>
            <td>淘宝；</td>
            <td>采集产品</td>
          </tr>
          <tr>
            <td>
              <el-radio class="radio" v-model="radio" label="4"></el-radio>
            </td>
            <td><img src="../../assets/goods.jpg"/></td>
            <td>Cell Phones Smart phones</td>
            <td>3C>cell phone； Technic phone；</td>
            <td>NNKBR-8</td>
            <td>SHOP1;SHOP2</td>
            <td>淘宝；</td>
            <td>采集产品</td>
          </tr>
          <tr>
            <td>
              <el-radio class="radio" v-model="radio" label="5"></el-radio>
            </td>
            <td><img src="../../assets/goods.jpg"/></td>
            <td>Cell Phones Smart phones</td>
            <td>3C>cell phone； Technic phone；</td>
            <td>NNKBR-8</td>
            <td>SHOP1;SHOP2</td>
            <td>淘宝；</td>
            <td>采集产品</td>
          </tr>
          <tr>
            <td>
              <el-radio class="radio" v-model="radio" label="6"></el-radio>
            </td>
            <td><img src="../../assets/goods.jpg"/></td>
            <td>Cell Phones Smart phones</td>
            <td>3C>cell phone； Technic phone；</td>
            <td>NNKBR-8</td>
            <td>SHOP1;SHOP2</td>
            <td>淘宝；</td>
            <td>采集产品</td>
          </tr>
          <tr>
            <td>
              <el-radio class="radio" v-model="radio" label="7"></el-radio>
            </td>
            <td><img src="../../assets/goods.jpg"/></td>
            <td>Cell Phones Smart phones</td>
            <td>3C>cell phone； Technic phone；</td>
            <td>NNKBR-8</td>
            <td>SHOP1;SHOP2</td>
            <td>淘宝；</td>
            <td>采集产品</td>
          </tr>
          <tr>
            <td>
              <el-radio class="radio" v-model="radio" label="8"></el-radio>
            </td>
            <td><img src="../../assets/goods.jpg"/></td>
            <td>Cell Phones Smart phones</td>
            <td>3C>cell phone； Technic phone；</td>
            <td>NNKBR-8</td>
            <td>SHOP1;SHOP2</td>
            <td>淘宝；</td>
            <td>采集产品</td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="btnbox">
        <el-button type="primary" size="mini" round style="width: 123px" @click="close">{{$t('editProduct.product-quote')}}</el-button>
      </div>

    </div>

  </div>
</template>

<script type="es6">
  export default {
    data() {
      return {
        radio: "",     ///   勾选的引用产品
      }
    },
    methods: {
      close() {
        this.$emit('quotePruduct')
      }
    },
    mounted(){

    }

  }
</script>

<style scoped>
  .quoteExitingProduct {
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
    padding: 0 15px;
    margin: 15px 0;
    max-height: 50vh;
    box-sizing: border-box;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .elInput {
    width: 100%;
    display: flex;
  }

  .elInput .right {
    display: flex;
  }

  table {
    margin-top: 15px;
    width: 100%;
    max-width: 100%;
    text-align: center;
    border-right: 1px solid #EAEDF1;
    font-size: 12px;
    position: relative;
  }

  table thead {
    height: 40px;
    background: #EAEDF1;
    font-weight: bold;
    position: relative;
    z-index: 999;

  }
  table thead tr td:nth-child(1){
    position: relative;
    z-index: 9999;
  }
  table thead td {
    white-space: nowrap;

  }

  table tbody tr td:nth-child(1) {
    position: relative;
    z-index: 0;
  }

  table tr:hover {
    background: #EAEDF1;
  }

  table tr td:nth-child(3) {
    width: 100px;
  }

  table tr td:nth-child(4) {
    width: 150px;
  }

  table td {
    white-space: pre-wrap;
    height: 40px;
    text-align: center;
    border-style: solid;
    border-color: #EAEDF1;
    border-width: 0px 0px 1px 1px;
    padding: 5px 5px;
    box-sizing: border-box;
  }

  table td img {
    max-height: 100%;
    max-width: 100%;
  }
  .btnbox{
    display: flex;
    justify-content: center;
  }
</style>
