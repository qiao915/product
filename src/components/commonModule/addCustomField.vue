<!--
  添加自定义字段组件
	Created by 吴乔 on 2018/10/29.
-->
<template>
  <div class="addCustomField" @click="close">
    <div class="content" @click.stop>
      <div class="head size12 back26">
        <span class="fontB colorF size12">{{$t('editProduct.add-custom')}}</span>
        <i class="el-icon-close size18 colorF pointer" :title="$t('editProduct.module-close')" @click="close"></i>
      </div>
      <div class="main" id="table-cont">
        <div class="headWR">
          <div class="elInput size12 color33">
            <div class="left"><em class="colorR">* </em>{{$t('editProduct.wrods-name')}}</div>
            <div class="right">
              <el-input
                style="width: 500px"
                v-model="keyWord"
                size="small"
                :placeholder="$t('editProduct.wrods-name')"
                clearable>
              </el-input>
            </div>
          </div>

          <div class="elInput size12 color33 martop10">
            <div class="left"><em class="colorR">* </em>{{$t('editProduct.wrods-type')}}</div>
            <div class="right">
              <el-select v-model="value" size="small" :placeholder="$t('editProduct.wrods-type-placeholder')">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>

              <el-select v-model="value1" size="small" style="margin-left: 5px" v-show="value==2" :placeholder="$t('editProduct.wrods-type-placeholder')">
                <el-option
                  v-for="item in options1"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>

              <el-input
                style="margin-left: 5px;width: 400px"
                v-show="value==3 || value==4"
                :placeholder="$t('editProduct.wrods-input-placeholder')"
                v-model="arrKey"
                size="small"
                clearable>
              </el-input>
            </div>
          </div>

          <div class="elInput size12 color33 martop5">
            <div class="left" style="line-height: 32px"></div>
            <div class="right">
              <el-checkbox v-model="checked">{{$t('editProduct.set-mast-input')}}</el-checkbox>
            </div>
          </div>
        </div>

        <div class="result martop15">
          <span class="size12 color33">{{$t('editProduct.create-words')}}</span>
          <div class="resultBox">

            <!--文本-->
            <div class="elInput size12 color33" v-show="value==1">
              <div class="left"><em class="colorR" v-show="checked">* </em>{{keyWord}}</div>
              <div class="right">
                <el-input
                  size="small"
                  clearable>
                </el-input>
              </div>
            </div>

            <!--所有时间格式-->
            <div class="elInput size12 color33" v-show="value == 2">
              <div class="left"><em class="colorR" v-show="checked">* </em>{{keyWord}}</div>
              <div class="right" v-show="value1 == 2">
                <el-time-picker
                  style="width: 140px"
                  size="small"
                  v-model="time1"
                  :placeholder="$t('editProduct.all-time-format')"
                  :picker-options="{selectableRange: '00:00:00 - 23:59:59'}">
                </el-time-picker>
              </div>

              <!--所有日期格式-->
              <div class="right" v-show="value1 == 1">
                <el-date-picker
                  style="width: 140px"
                  size="small"
                  v-model="time2"
                  :placeholder="$t('editProduct.all-date-format')"
                  type="date">
                </el-date-picker>
              </div>

              <!--所有日期 + 时间格式-->
              <div class="right" v-show="value1 == 3 || !value1">
                <el-date-picker
                  style="width: 175px"
                  v-model="time3"
                  size="small"
                  type="datetime"
                  :placeholder="$t('editProduct.all-timeDate-format')"
                >
                </el-date-picker>
              </div>
            </div>

            <!--单选框-->
            <div class="elInput size12 color33" v-show="value==4">
              <div class="left"><em class="colorR" v-show="checked">* </em>{{keyWord}}</div>
              <div class="right">
                <el-radio v-for="(item,index) in arrWord" :key="index" v-model="radio" :label="index" v-show="item" style="margin-top:5px;margin-left: 0;margin-right: 30px;min-width: 60px;white-space: pre-wrap">{{item}}</el-radio>
              </div>
            </div>

            <!--复选框-->
            <div class="elInput size12 color33" v-show="value==3">
              <div class="left"><em class="colorR" v-show="checked">* </em>{{keyWord}}</div>
              <div class="right">
                <el-checkbox v-for="(item,index) in arrWord" :key="item" v-show="item" style="margin-top:5px;margin-left: 0;margin-right: 30px;min-width: 60px;white-space: pre-wrap">{{item}}</el-checkbox>
              </div>
            </div>


          </div>
        </div>

        <div class="bcmb martop15">
          <div class="elInput size12 color33">
            <div class="left" style="line-height: 32px">{{$t('editProduct.save-speci-module')}}</div>
            <div class="right">
              <el-checkbox>{{$t('editProduct.speci-module')}}1</el-checkbox>
              <el-checkbox>{{$t('editProduct.speci-module')}}2</el-checkbox>
              <el-checkbox>{{$t('editProduct.speci-module')}}3</el-checkbox>
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
        options: [],
        options1:[],
        value: '',
        value1: '',
        checked: false,     ///  设置为必填项
        keyWord: "",        ///  字段名称
        arrWord: [],
        arrKey: "",
        radio:"",           ///  单选框
        time1:"",           ///  时间1
        time2:"",           ///  时间2
        time3:"",           ///  时间3
      }
    },
    watch: {
      arrKey: function (value) {
        let str = value.replace(/\;/g, ",");
        let arr = Array.from(new Set(str.split(",")));
        this.arrWord = arr;
      }
    },
    methods: {
      close() {
        this.$emit('customField')
      }
    },
    created(){
      this.options = [{
        value: '1',
        label: this.$t('editProduct.speci-module-text')
      }, {
        value: '2',
        label: this.$t('editProduct.speci-module-date')
      }, {
        value: '3',
        label: this.$t('editProduct.speci-module-checkBox')
      }, {
        value: '4',
        label: this.$t('editProduct.speci-module-rideo')
      }]
      this.options1=[
        {
          value: '1',
          label: this.$t('editProduct.all-date-format')
        }, {
          value: '2',
          label: this.$t('editProduct.all-time-format')
        }, {
          value: '3',
          label: this.$t('editProduct.all-timeDate-format')
        }]
    }

  }
</script>

<style scoped>
  .martop5 {
    margin-top: 5px;
  }

  .martop10 {
    margin-top: 10px;
  }

  .martop15 {
    margin-top: 15px;
  }

  .addCustomField {
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

  .btnbox {
    display: flex;
    justify-content: center;
  }

  .elInput {
    display: flex;
    overflow: hidden;
    /*align-items: center;*/
  }

  .elInput .left {
    line-height: 32px;
    width: 90px;
    text-align: right;
    margin-right: 15px;
    white-space: pre-wrap;
    word-break: break-all;

  }

  .elInput .right {
    display: flex;
    align-items: center;
  }

  .result .resultBox {
    margin-top: 5px;
    border: 2px solid #efefef;
    border-radius: 8px;
    padding: 15px;
    box-sizing: border-box;
  }

  .result .elInput{
    align-items: center;
  }
  .result .elInput .left {
    width: 75px;
    line-height: 1em!important;
  }

  .result .elInput .right {
    flex: 1;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
</style>
