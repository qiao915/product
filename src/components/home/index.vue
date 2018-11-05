<!--
	Created by xieqiang on 2018/10/23.
-->
<template>
    <div class="app">
      <!--中英文切换-->
      <!--<el-dropdown trigger="hover" @command="command" class="marginLR0">-->
        <!--<span class="el-dropdown-link color33 size14 pointer">-->
          <!--{{langText}}<i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>-->
        <!--</span>-->
        <!--<el-dropdown-menu slot="dropdown" class="userBoxTip">-->
          <!--<el-dropdown-item v-for="item in options"-->
                            <!--:key="item.value"-->
                            <!--:command="item.value"-->
                            <!--:disabled="item.disabled" class="colorF">{{item.label}}</el-dropdown-item>-->
        <!--</el-dropdown-menu>-->
      <!--</el-dropdown>-->
      <!--<p>{{$t('productHome.product_home_font')}}</p>-->
      <!--<el-button type="text" @click="open">{{$t('productHome.product_open_font')}}</el-button>-->
      <el-row class="marTop10 marBott10 XYcenter fontB size16">欢迎进入产品库</el-row>
      <router-link to="/product"><el-row class="productHomeImg"><img class="app" src="../../../static/image/productHome_01.png" alt=""></el-row></router-link>
    </div>
</template>

<script type="es6">
    export default {
        data() {
            return {
              langText: '中文',
              options: [{
                value: 'cn',
                label: '中文'
              },{
                value: 'en',
                label: 'English'
              }
              ],
            }
        },
        watch: {},//监听
        created() {
        },
        mounted() {
        },
        methods: {
          // 切换语言
          command(value) {
            console.log(value);
            if(value == 'en'){
              this.langText = 'English'
            }else{
              this.langText = '中文'
            }
            this.$i18n.locale = value;
          },
          // 弹窗
          open() {
            this.$alert(this.$t('productHome.product_open_concent'), this.$t('productHome.product_open_title'), {
              callback: action => {

              }
            });
          }
        },
        components: {},
    }
</script>

<style scoped>
.productHomeImg{
  width: 80%;
  margin: 0 auto;
}
</style>
