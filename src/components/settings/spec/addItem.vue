<template>
  <div class="addItem">
    <!-- 字段名称 -->
      <div class="input-box marBott10">
        <div class="text must-write">{{$t('spec.alert-add-item-name')}}</div>
        <div class="input">
          <el-input
            :placeholder="$t('spec.alert-add-item-name')"
            v-model.trim="itemName"
            clearable
            size="small"
            style="width: 215px;height: 32px"
            >
          </el-input>
        </div>
        </div>
        <!-- 设置格式 -->
        <div class="input-box marBott10">
        <div class="text must-write">{{$t('spec.alert-add-item-style')}}</div>
        <div class="input">
          <el-select v-model="itemStyle" :placeholder="$t('spec.alert-add-item-style-placehold')" @change ='styleSelChange' style="width: 215px;height: 32px" size="small">
              <el-option
                v-for="item in itemStyleAry"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
            <el-select v-model="styleCont" :placeholder="$t('spec.alert-add-item-time-placehold')" @change ='styleSelChange' style="width: 215px;height: 32px" size="small" v-show="itemStyle === 'time'">
              <el-option
                v-for="item in timeselAry"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
            <el-input
              v-show="itemStyle === 'checkbox' || itemStyle === 'radio'"
              :placeholder="$t('spec.alert-add-radio-placehold')"
              v-model.trim="styleCont"
              clearable
              size="small"
              style="width: 275px;height: 32px"
              >
            </el-input>
          <div style="margin-top:5px;">
            <el-checkbox v-model="isChecked">{{$t('spec.alert-add-item-info')}}</el-checkbox>
          </div>
        </div>
        </div>
        <!-- 映射到具体平台 -->
        <div class="size12 marBott10" style="margin-left:12px">{{$t('spec.alert-add-item-platform')}}</div>
        <div class="platform">
          <div class="input-box marBott10 width250" v-for="(item,key) in platform" :key ="key">
            <div class="text">{{key}}</div>
            <div class="input">
              <el-input
                v-model.trim="platform[key]"
                clearable
                size="small"
                style="width: 160px;height: 32px"
                >
              </el-input>
            </div>
          </div>
        </div>
        <div class="platform-info size12">{{$t('spec.alert-add-item-info2')}}</div>
  </div>
</template>
<script>
export default {
  // props:['itemName','itemStyle','platform'],
  props: {
    itemData: {
      type:Object,
      default:{
        itemName: '',
        itemStyle: '',
        styleCont: '',
        isChecked: true,
        platform: {
          Amazon: '',
          eBay: '',
          Wish: '',
          Vova:'',
          SouQ:'',
          Cdiscount: ''
        },
      }
    }
  },
  data() {
    return {
      itemName: this.itemData.itemName,
      itemStyle: this.itemData.itemStyle,
      styleCont: this.itemData.styleCont,
      platform: this.itemData.platform,
      remarkInput: '',
      itemStyleAry: [
        {
          label: this.$t('spec.alert-add-item-text'),
          value: 'txt',
        },
        {
          label: this.$t('spec.alert-add-item-time'),
          value: 'time',
        },
        {
          label: this.$t('spec.alert-add-item-checkbox'),
          value: 'checkbox',
        },
        {
          label: this.$t('spec.alert-add-item-radio'),
          value: 'radio',
        }
      ],
      timesel: '',
      timeselAry: [
        {
          label: this.$t('spec.alert-add-item-day1'),
          value: 'time'
        },
        {
          label: this.$t('spec.alert-add-item-day2'),
          value: 'date'
        },
        {
          label: this.$t('spec.alert-add-item-day3'),
          value: 'datetime'
        },
      ],
      isChecked: this.itemData.isChecked,
    }
  },
  created() {

  },
  methods: {
    //设置格式
    styleSelChange() {

    },
    getItemData(){
      if(!this.itemName) {
        this.$message({
            showClose: true,
            message: this.$t('message.spec_add_item_name'),
            type: 'error'
          });
          return 
      }else if(!this.itemStyle){
        this.$message({
            showClose: true,
            message:  this.$t('message.spec_add_item_style'),
            type: 'error'
          });
          return
      }
       let  data = {
                itemName: this.itemName ,
                itemStyle: this.itemStyle,
                remarke: 'aaaaaaaaaa',
                isChecked: this.isChecked,
                platform: this.platform,
              }
      return data
    }
  },
  watch: {
    'itemData'(Date){
      if(Date){
        this.itemName = Date.itemName
        this.itemStyle = Date.itemStyle
        this.platform = Date.platform
        this.isChecked = Date.isChecked
      }
      console.log(Date)
    },

  }
}
</script>
<style>
  .input-box {
    display:flex;
    width:100%;
    font-size:12px;
  }
  .input-box .text{
    width:68px;
    line-height:32px;
    text-align: right;
    padding-right:10px;
  }
  .input-box .input{
    flex: 1
  }
  .platform {
    width:760px;
    display:flex;
    flex-direction:row ;
    flex-wrap:wrap;
  }
  .width250 {
    width:250px;
  }
</style>


