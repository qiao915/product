<!--
  工具箱
	Created by 吴乔 on 2018/11/5.
-->
<template>
  <div class="toolKit"  @mouseenter="toolImgShow=true" @mouseleave="toolImgShow=false">
    <div class="imgBox pointer">
      <img v-show="!toolImgShow" src="../../assets/toolKit-01.png"/>
      <img v-show="toolImgShow" src="../../assets/toolKit-02.png"/>
    </div>
    <transition name="el-zoom-in-top">
      <div class="detail size12" v-show="toolImgShow">
        <!--<div class="detail size12">-->
        <ul class="content">
          <li @mouseenter="toolImg1Show=true" @mouseleave="toolImg1Show=false">
            <div class="left">
              <img v-show="!toolImg1Show" src="../../assets/toolKit-06.png">
              <img v-show="toolImg1Show" src="../../assets/toolKit-03.png">
            </div>
            <div class="right">
              <span v-for="(item,index) in link1Arr" :key="index" @click="$router.push({path:item.link})">{{item.title}}
              </span>
            </div>
          </li>
          <li @mouseenter="toolImg2Show=true" @mouseleave="toolImg2Show=false">
            <div class="left">
              <img v-show="!toolImg2Show" src="../../assets/toolKit-05.png">
              <img v-show="toolImg2Show" src="../../assets/toolKit-04.png">
            </div>
            <div class="right">
              <span v-for="(item,index) in link2Arr" :key="index" @click="$router.push({path:item.link})">{{item.title}}
              </span>
            </div>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script type="es6">
  export default {
    data() {
      return {
        toolImgShow: false,
        toolImg1Show: false,
        toolImg2Show: false,
        link1Arr: [],
        link2Arr: [],
      }
    },
    created() {
      this.link1Arr = [
        {title: this.$t('toolKit.categories'), link: "./categories-manager", jurisCode: ""},
        {title: this.$t('toolKit.attribute'), link: "./attribute-manager", jurisCode: ""},
        {title: this.$t('toolKit.description'), link: "./description", jurisCode: ""},
        {title: this.$t('toolKit.spec'), link: "./spec", jurisCode: ""}];
      this.link2Arr = [
        {title: this.$t('toolKit.tags'), link: "./tags-manager", jurisCode: ""},
        {title: this.$t('toolKit.sku'), link: "", jurisCode: ""},
        {title: this.$t('toolKit.price'), link: "", jurisCode: ""},
        {title: this.$t('toolKit.language'), link: "", jurisCode: ""},
        {title: this.$t('toolKit.recycle'), link: "", jurisCode: ""}];
    // jurisCode    后期做权限时候的权限code 节点v-show来处理显示和隐藏
    }
  }
</script>

<style scoped>
  .toolKit {
    position: relative;

  }

  .imgBox {
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .imgBox img {
    height: 60px;
    width: 60px;
  }

  .detail {
    position: absolute;
    right: 0;
    top: 85px;
    z-index: 999;
    width: 275px;
  }

  .content {
    padding: 15px 12px;
    background-color: #fff;
    position: relative;
    box-sizing: border-box;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    box-shadow: 1px 0px 1px rgba(81, 81, 81, 0.2) inset, 2px 2px 1px rgba(81, 81, 81, 0.2) inset, -1px 0px 1px rgba(81, 81, 81, 0.2) inset, -2px -2px 2px rgba(81, 81, 81, 0.2) inset;
  }

  .content li {
    display: flex;
    align-items: center;
  }

  .content li:nth-child(2) {
    margin-top: 15px;
  }

  .content li .left {
    width: 32px;
    margin-right: 20px;
  }

  .content li .left img {
    width: 100%;
  }

  .content li .right {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
  }

  .content li .right span {
    margin-right: 15px;
    cursor: pointer;
    width: 50px;
    line-height: 1.7em;
  }

  .content li .right span:hover {
    color: #2681FE;
  }

  .content::before {
    position: absolute;
    top: -24px;
    right: 24px;;
    width: 0;
    height: 0;
    border: .75rem solid transparent;
    border-bottom-color: rgba(81, 81, 81, 0.32);
    content: '';
    box-sizing: border-box;
  }

  .content::after {
    position: absolute;
    top: -22px;
    right: 24px;
    width: 0;
    height: 0;
    border: .75rem solid transparent;
    content: '';
    box-sizing: border-box;
    border-bottom-color: #fff;
  }

  /*.content*/

</style>
