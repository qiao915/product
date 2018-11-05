<!--
	Created by xieqiang on 2018/10/23.
-->
<template>
  <el-container>
    <!--<el-aside :width="width" class="tl backF7 color33" :style="{height: '100%',minHeight: clientHeight + 'px'}">-->
      <!--<div class="backF7 size16 fontB textCenter paddTop10 paddBott10">产品中心</div>-->
      <!--<el-menu :default-active="defaultActiveMenu"-->
               <!--@select="handleSelect"-->
               <!--:unique-opened="true"-->
               <!--class="color33">-->
        <!--<el-submenu v-for="(submenu,index) in menuList"-->
                    <!--:key="index" :index="submenu.name"-->
                    <!--v-if="submenu.perantMenuItemName == 'ProductCenterMenuItem'">-->
          <!--<template slot="title">-->
            <!--&lt;!&ndash;<i class="el-icon-location"></i>&ndash;&gt;-->
            <!--<span class="color33">{{submenu.displayName}}</span>-->
          <!--</template>-->
          <!--<el-menu-item-group v-for="(subitem,i) in menuList" :key="i" v-if="subitem.perantMenuItemName==submenu.name">-->
            <!--<el-menu-item :index="subitem.name" class="XYcenter">{{subitem.displayName}}</el-menu-item>-->
          <!--</el-menu-item-group>-->
        <!--</el-submenu>-->
      <!--</el-menu>-->
    <!--</el-aside>-->
    <el-container class="boxAllCont backF">
      <!-- 路由匹配到的组件将渲染在这里 -->
      <router-view></router-view>
    </el-container>
  </el-container>
</template>

<script type="es6">
    export default {
        data() {
            return {
              menuList: [
                {
                  "name":"ProductListMenuItem",
                  "displayName":"产品列表",
                  "serviceModuleName":"ProductCenter",
                  "perantMenuItemName":"ProductCenterMenuItem",
                  "permissionCode":""
                },
                {
                  "name":"AllProductMenuItem",
                  "displayName":"所有产品",
                  "serviceModuleName":"ProductCenter",
                  "perantMenuItemName":"ProductListMenuItem",
                  "permissionCode":""
                },
                {
                  "name":"OneselfProductMenuItem",
                  "displayName":"自建产品",
                  "serviceModuleName":"ProductCenter",
                  "perantMenuItemName":"ProductListMenuItem",
                  "permissionCode":""
                },
                {
                  "name":"CollectionProductMenuItem",
                  "displayName":"采集产品",
                  "serviceModuleName":"ProductCenter",
                  "perantMenuItemName":"ProductListMenuItem",
                  "permissionCode":""
                },


                {
                  "name":"SettingsAndToolsMenuItem",
                  "displayName":"通用设置及工具",
                  "serviceModuleName":"ProductCenter",
                  "perantMenuItemName":"ProductCenterMenuItem",
                  "permissionCode":""
                },
                {
                  "name":"ManageTagsMenuItem",
                  "displayName":"管理标签",
                  "serviceModuleName":"ProductCenter",
                  "perantMenuItemName":"SettingsAndToolsMenuItem",
                  "permissionCode":""
                },
                {
                  "name":"ManageSortMenuItem",
                  "displayName":"分类管理",
                  "serviceModuleName":"ProductCenter",
                  "perantMenuItemName":"SettingsAndToolsMenuItem",
                  "permissionCode":""
                },
                {
                  "name":"ManageAttributeMenuItem",
                  "displayName":"属性管理",
                  "serviceModuleName":"ProductCenter",
                  "perantMenuItemName":"SettingsAndToolsMenuItem",
                  "permissionCode":""
                },
                {
                  "name":"ProductDescTemplateMenuItem",
                  "displayName":"描述模板",
                  "serviceModuleName":"ProductCenter",
                  "perantMenuItemName":"SettingsAndToolsMenuItem",
                  "permissionCode":""
                },
                {
                  "name":"SpecificationsDescMenuItem",
                  "displayName":"规格模板",
                  "serviceModuleName":"ProductCenter",
                  "perantMenuItemName":"SettingsAndToolsMenuItem",
                  "permissionCode":""
                },


                {
                  "name":"RecycleBinMenuItem",
                  "displayName":"回收站",
                  "serviceModuleName":"ProductCenter",
                  "perantMenuItemName":"ProductCenterMenuItem",
                  "permissionCode":""
                },
                {
                  "name":"RecycleBinMenuItem",
                  "displayName":"回收站",
                  "serviceModuleName":"ProductCenter",
                  "perantMenuItemName":"RecycleBinMenuItem",
                  "permissionCode":""
                },



              ],
              titOption: '',
              menuPaths: [],   //用户选项
              defaultOpenMenuId: ['0'],
              defaultActiveMenu: '',
              width: '216px',    //左侧导航栏宽度
              clientHeight: document.documentElement.clientHeight - 100,
            }
        },
        watch: {},//监听
        created() {
        },
        mounted() {
        },
        methods: {
          handleSelect(key) {
            console.log(key)
            this.defaultActiveMenu = key
            if(key=='AllProductMenuItem'){
              this.$router.push({path:"/product"})//所有产品列表
            }
            else if(key=='OneselfProductMenuItem'){
              this.$router.push({path:"/newProduct"})//新建产品
            }
            else if(key=='ManageTagsMenuItem'){
              this.$router.push({path:"/tags-manager"})//标签管理
            }
            else if(key=='ManageSortMenuItem'){
              this.$router.push({path:"/categories-manager"})//分类管理
            }
            else if(key=='ManageAttributeMenuItem'){
              this.$router.push({path:"/attribute-manager"})//属性管理
            }
            else if(key=='ProductDescTemplateMenuItem'){
              this.$router.push({path:"/description"})//描述模板
            }
            else if(key=='SpecificationsDescMenuItem'){
              this.$router.push({path:"/spec"})//规格模板
            }
            localStorage["usOption"] = key
          }
        },
        components: {},
    }
</script>

<style scoped>

</style>
