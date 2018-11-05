<!--
  设置子SKU生成规则
	Created by 吴乔 on 2018/10/30.
-->
<template>
  <div class="setChildSku" @click="close">
    <div class="content" @click.stop>
      <div class="head size12 back26">
        <span class="fontB colorF size12">{{$t('editProduct.produce-setSKU-title')}}</span>
        <i class="el-icon-close size18 colorF pointer" :title="$t('editProduct.module-close')" @click="close"></i>
      </div>
      <div class="main">
        <span class="color33 size12 fontB">{{$t('editProduct.create-regulation')}}</span>
        <div class="setBox">
          <div class="elInput size12 color33">
            <div class="left"><em class="colorR">* </em>{{$t('editProduct.main')}}</div>
            <div class="right">
              <el-radio-group v-model="radio2" size="small">
                <el-radio label="1" style="width:190px;">{{$t('editProduct.0-9A-Z')}}</el-radio>
                <el-radio label="2" style="width:190px;">{{$t('editProduct.property-content')}}</el-radio>
              </el-radio-group>
            </div>
          </div>

          <div class="elInput size12 color33 martop15">
            <div class="left"><em class="colorR">* </em>{{$t('editProduct.select-digit')}}</div>
            <div class="right">
              <el-select v-model="value" class="width190" :placeholder="$t('editProduct.wrods-type-placeholder')" size="small">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
          </div>

          <div class="elInput size12 color33 martop15">
            <div class="left"><em class="colorR">* </em>{{$t('editProduct.set-parent-sku')}}</div>
            <div class="right">
              <el-radio-group v-model="radio1" size="small">
                <el-radio label="1" style="width:190px;">{{$t('editProduct.prefix')}}</el-radio>
                <el-radio label="2" style="width:170px;">{{$t('editProduct.suffix')}}</el-radio>
              </el-radio-group>
            </div>
          </div>

          <div class="elInput size12 color33 martop15">
            <div class="left">{{$t('editProduct.inter-symbol')}}</div>
            <div class="right">
              <el-select class="width190" v-model="value1" :placeholder="$t('editProduct.wrods-type-placeholder')" size="small">
                <el-option
                  v-for="item in options1"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
          </div>

        </div>
      </div>
      <div class="btnbox">
        <el-button type="primary" size="mini" round style="width: 123px" @click="close">{{$t('editProduct.product-save')}}</el-button>
        <el-button type="info" size="mini" round style="width: 123px" @click="close">{{$t('editProduct.product-cancel')}}</el-button>
      </div>
    </div>
  </div>
</template>

<script type="es6">
  export default {
    data() {
      return {
        radio1:"",
        radio2:"",        ///  主干
        options:[{        ///  选择位数
          value: '1',
          label: '1'
        }, {
          value: '2',
          label: '2'
        }, {
          value: '3',
          label: '3'
        }, {
          value: '4',
          label: '4'
        }, {
          value: '5',
          label: '……'
        }],
        value: '',
        options1:[{        ///  选择位数
          value: '1',
          label: '-'
        }, {
          value: '2',
          label: '_'
        }],
        value1: ''
      }
    },
    methods:{
      close(){
        this.$emit("setChildSku")
      }
    }
  }
</script>

<style scoped>
  .width190{
    width: 190px;
  }
  .martop15 {
    margin-top: 15px;
  }
  .setChildSku {
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
    display: flex;
    flex-direction: column;
  }
  .setBox{
    margin-top: 5px;
    border: 2px solid #efefef;
    border-radius: 8px;
    padding: 15px 0 15px 0px;
    box-sizing: border-box;
  }
  .btnbox {
    display: flex;
    justify-content: center;
  }
  .elInput {
    display: flex;
    overflow: hidden;
    align-items: center;
  }
  .elInput .left {
    line-height: 32px;
    width: 70px;
    text-align: right;
    margin-right: 15px;
    white-space: pre-wrap;
    word-break: break-all;

  }
  .elInput .right {
    flex: 1;
    display: flex;
    align-items: center;
  }
  .elInput .right span{
    white-space: nowrap;
  }
</style>
