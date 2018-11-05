<!--
  电商平台选择
	Created by 吴乔 on 2018/10/24.
-->
<template>
    <div class="selectPlatform">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane v-for="(item,index) in PlatformList" :label="item.name" :name="item.code" :key="index"></el-tab-pane>
      </el-tabs>
    </div>
</template>

<script type="es6">
    export default {
        data() {
            return {
              activeName:"1",      ///  选中绑定值
              PlatformList:[
                {code:"1",name:"通用",title:""},
                {code:"amazon",name:"Amazon",title:""},
                {code:"ebay",name:"eBay",title:""},
                {code:"qish",name:"Wish",title:""},
                {code:"vova",name:"Vova",title:""},
                {code:"souq",name:"SouQ",title:""},
                {code:"cdiscount",name:"Cdiscount",title:""},
              ],
              /*
              * PlatformList为平台选择绑定数据。
              * 参数说明： code -> 为平台标识，正式值视后期接口需求修改为准
              *           name  -> 为平台名字
              *           title -> 备用字段，我也不知道后期会增加什么，先写着栗子吧
              * */
            }
        },
        methods:{
          handleClick(tab, event) {
            this.$emit('select',this.activeName2)
          }
        }
    }
</script>

<style scoped>

</style>
