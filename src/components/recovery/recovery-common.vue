<template>
    <div class="recovery-common">
      <div class="Recovery-content marTop10 paddLeft10 size12">
        <div v-for="(item, index) in data"
             :key="index"
             :file="item"
             :data-index="index"
             @mouseenter="enter($event)"
             @mouseleave="leave($event)"
             :class="{'mjOzZO': DeleteRecoveryBoolean[index]}"
             class="Recovery-item marRight12 marBott10"
             @click.stop="SelectTerm(index,item)">
          <img :src="item.imageId" class="image">
          <ul class="Recovery-detailed">
            <li>标题 :{{item.name}}</li>
            <li>产品SKU :{{item.sku}}</li>
          </ul>
          <!--<i class="selectRecovery"></i>-->
          <div class="float-detailed show">
            <p>删除人 :{{item.operator}}</p>
            <p>删除源 :{{item.foreignKey}}</p>
            <p>删除时间 :{{Parsing}}</p>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
  import {addClass,removeClass,FormatTime} from '../../../static/common-js/common'
  export default {
      props: {
        data: {
          type: Array,
          default: []
        },
        DeleteRecoveryBoolean: {
          type: Array,
          default: []
        },
        checkedLen: {
          type:Number,
          default:0
        }
      },
       data() {
         return {
         }
       },
    created () {
    },
    computed :{
      Parsing: function (){
        let newTime = ''
        this.data.forEach(function (item, index) {
          newTime =  FormatTime("yyyy-MM-dd hh:mm:ss", new Date(item.operationTime))
        })
        return newTime
      }
    },
      methods :{
        //点击选中 组合一个待删除or恢复 数组
        SelectTerm(index, item) {
          this.$emit('selectCheckedLen',  index)
          this.$emit('selectDeleteRecoveryArr')
          let trueNum = JSON.stringify(this.DeleteRecoveryBoolean).indexOf('false')
          if (trueNum === -1) {
            this.ischeckBoxAry = true
          } else {
            this.ischeckBoxAry = false
          }
          this.$emit('changeIscheckBoxAry',  this.ischeckBoxAry)
        },
        //鼠标移入
        enter(e) {
          addClass(e.target, 'tpnNpxN')
        },
        //鼠标移出
        leave(e) {
          removeClass(e.target, 'tpnNpxN')
        }
      }

    }
</script>

<style scoped>
  /*.mjOzZO .selectRecovery {*/
    /*position: absolute;*/
    /*background: url("../../../static/image/select-blue.png") no-repeat;*/
    /*width: 20px;*/
    /*height: 20px;*/
    /*left: -30px;*/
    /*top: 5px;*/
  /*}*/
  /*.tpnNpxN .selectRecovery {*/
    /*position: absolute;*/
    /*background: url("../../../static/image/select-gray.png") no-repeat;*/
    /*width: 20px;*/
    /*height: 20px;*/
    /*left: -30px;*/
    /*top: 5px;*/
  /*}*/
  .mjOzZO{
    background-color: #f1f5fa !important;
    border: 1px solid #90c3fd !important;
    border-radius: 5px;
    background: url("../../../static/image/select-blue.png") no-repeat;
    background-position: 5px 5px;
  }
  .tpnNpxN{
    background-color: #f1f5fa !important;
    border: 1px solid #f1f5fa !important;
    border-radius: 5px;
    background: url("../../../static/image/select-gray.png") no-repeat;
    background-position: 5px 5px;
  }
  .show {
    display: none !important;
  }
  .tpnNpxN .show{
    display: block !important;
  }

  .Recovery-content {
    display: flex;
    flex-wrap: wrap;
  }
  .Recovery-item {
    flex-wrap: nowrap;
    border-radius: 4px;
    border: 1px solid transparent;
    background-color: #fff;
    color: #303133;
    padding: 5px;
    position: relative;
    cursor: pointer;
    text-align: center;
  }
  .Recovery-item .image{
    max-width: 90px;
  }
  .float-detailed {
    z-index: 2;
    text-align: left;
    position: absolute;
    bottom: -65px;
    left: -100px;
    padding: 5px;
    background: #e5e5f0;
    border: 1px solid #767676;
    border-radius: 3px;
  }
</style>
