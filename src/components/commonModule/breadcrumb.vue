<!--
   面包屑
	Created by 吴乔 on 2018/10/24.
-->
<template>
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item v-for="(item,index) in pathList" :key="index" :to="{ path: item.path }" :class="{'color26' : item.path,'color33':!item.path}">{{item.title}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
</template>

<script type="es6">
  /*
  * 入参：pathList
  * 入参格式示例：[{"title":"所有产品","path":"/product/list"},{"title":"新建产品","path":""}]
  * 入参参数说明：title -> 面包屑显示文字
  *              path -> 面包屑点击路由(指定了path，即可点击切换，文字颜色#2681FE
  * */
    export default {
        props:["pathList"],
        data() {
            return {}
        },
    }
</script>
<style scoped>
  .breadcrumb{
    height: 40px;
    display: flex;
    align-items: center;
  }
</style>
