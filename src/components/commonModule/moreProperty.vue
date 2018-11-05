<!--
  更多属性组件
	Created by 吴乔 on 2018/10/30.
-->
<template>
  <div class="moreProperty"@click="close">
    <div class="content" @click.stop>
      <div class="head size12 back26">
        <span class="fontB colorF size12">{{$t('editProduct.more-property')}}</span>
        <i class="el-icon-close size18 colorF pointer" :title="$t('editProduct.module-close')" @click="close"></i>
      </div>

      <div class="main">
        <div class="elInput size12 color33">
          <!--<div class="left" style="line-height: 32px">关键词</div>-->
          <div class="right">
            <el-input
              class="width320"
              size="small"
              :placeholder="$t('editProduct.input-property-search')"
              clearable>
            </el-input>
            <el-button type="primary" size="mini" class="width60">{{$t('editProduct.search')}}</el-button>
          </div>
        </div>
        <table>
          <thead>
          <tr>
            <td>
              <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll"
                           @change="handleCheckAllChange"></el-checkbox>
            </td>
            <td>{{$t('editProduct.property-name')}}</td>
            <td>{{$t('editProduct.property-content')}}</td>
            <td>{{$t('editProduct.describe-module-class')}}</td>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(key,i) in orderIdList" :key="i">
            <td>
              <el-checkbox-group v-model="checkedNo" @change="handleCheckedCitiesChange" class="checkbox">
                <el-checkbox :key="key" :label="key"></el-checkbox>
              </el-checkbox-group>
            </td>
            <td>颜色（colour）<i class="color26 size18 el-icon-edit pointer"></i></td>
            <td>白色，黄色，蓝色，青色，紫色，绿色，黑色，白色，黄色，蓝色，青色，紫色，绿色，黑色</td>
            <td>一级分类>二级分类； 一级分类</td>
          </tr>
          </tbody>
        </table>

      </div>
      <div class="btnbox">
        <el-button type="primary" size="mini" round style="width: 123px" @click="close">{{$t('editProduct.product-add')}}</el-button>
      </div>
    </div>
  </div>
</template>

<script type="es6">
  export default {
    data() {
      return {
        checkAll: false,                            ///  全选
        isIndeterminate: true,                      ///  全选
        orderIdList: ["1", "2", "3", "4", "5", "6","7","8","9"],      ///  每个勾选项绑定的值  列表数据
        checkedAllList: ["1", "2", "3", "4", "5", "6","7","8","9"],                         ///  内容
        checkedNo: [],                              ///  选中的No
      }
    },
    methods: {
      close() {
        this.$emit("morePropert")
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.checkedAllList.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.checkedAllList.length;
      },
      handleCheckAllChange(val) {
        this.checkedNo = val ? this.checkedAllList : [];
        this.isIndeterminate = false;
      },
    },
    mounted() {

    }


  }
</script>

<style scoped>
  .martop15 {
    margin-top: 15px;
  }

  .moreProperty {
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
  }

  table thead td {
    white-space: nowrap;

  }

  table tr:hover {
    background: #EAEDF1;
  }
  table tr td:nth-child(3){
    max-width: 230px;
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
  .btnbox {
    display: flex;
    justify-content: center;
  }
</style>
