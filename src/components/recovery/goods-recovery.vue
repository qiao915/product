<template>
  <div class="goods-recovery">
    <div class="conditionNav size12 paddLeft14">
      <el-row type="flex" align="middle">
        <el-row type="flex" align="middle" class="paddTop10 paddBott10">
          <el-row class="textRight paddRight10">商品SKU :</el-row>
          <el-row>
            <el-input size="small" v-model="goodsSku" placeholder="请输入SKU搜索"></el-input>
          </el-row>
          <el-row class="textRight paddLeft10 paddRight10">商品标题 :</el-row>
          <el-row>
            <el-input size="small" v-model="goodsSku" placeholder="请输入商品搜索"></el-input>
          </el-row>
        </el-row>
        <el-row type="flex" align="middle" class="paddTop10 paddBott10">
          <el-row class="textRight paddLeft10 paddRight10">删除时段</el-row>
          <el-date-picker
            size="small"
            v-model="StartTime"
            align="right"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions1">
          </el-date-picker>
          —
          <el-date-picker
            size="small"
            v-model="EndTime"
            align="right"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions1">
          </el-date-picker>
        </el-row>
        <el-button type="primary" native-type="button" size="small"
                   class="butt_search_W size12 colorF marLeft10 marRight10" @click="searchPS">搜索
        </el-button>
      </el-row>
      <div class="checked-all">
        <el-checkbox v-model="ischeckBoxAry" @change="checkedAllFn" v-if="checkedLen === 0">全选</el-checkbox>
        <el-checkbox v-model="ischeckBoxAry" @change="checkedAllFn" v-else>已选中{{checkedLen}}个文件/文件夹</el-checkbox>
        <el-button class="el-button marLeft10 paddLeft14 colorF size12 el-button--primary el-button--small" @click="Recovery">全部恢复
        </el-button>
        <el-button class="el-button  colorF size12 el-button--primary el-button--small" @click="Delete">全部删除<i
          class="colorR">(永久)</i></el-button>
      </div>
    </div>
  <recoveryCommon
    :typeTitle="typeTitle"
    :data="RecoveryGoodsData"
    :DeleteRecoveryBoolean="DeleteRecoveryGoodsBoolean"
    @selectDeleteRecoveryArr="selectDeleteRecoveryArr"
    @selectCheckedLen="selectCheckedLen"
    @changeIscheckBoxAry="changeIscheckBoxAry"
  ></recoveryCommon>
</div>
</template>
<script type="es6">
  import {FormatTime,addClass,removeClass} from '../../../static/common-js/common'
  import recoveryCommon from './recovery-common'
  import {
    products,
    productsDelete,
    productsRecovery,
    productCategories
  } from '../../public/recycle-bin'
  export default {
    data() {
      return {
        typeTitle:'商品',
        goodsTitle:'', //商品标题
        goodsSku: "", //商品SKU
        StartTime: '', // 起始时间
        EndTime: '', // 结束时间
        DeleteRecoveryGoodsArr: [], //待删除数组sku or 待恢复数组sku
        DeleteRecoveryGoodsBoolean: [], //待删除数组布尔值 or 待恢复数组布尔值
        RecoveryGoodsData: [
          {
            title: '这是一张图片',
            sku: 'B07FDWYXN1',
            user: '李云',
            img: require('../../../static/image/img-icon.png'),
            disableSource: 'C:\\\\Windows',
            currentDate: '',
            check: false
          },
          {
            title: '这是一个视频',
            sku: 'B07FDWYXN2',
            user: '李云',
            img: require('../../../static/image/video-icon.png'),
            disableSource: 'C:\\\\Windows',
            currentDate: '',
            check: false
          },
          {
            title: '这是一张图片',
            sku: 'B07FDWYXN3',
            user: '李云',
            img: require('../../../static/image/img-icon.png'),
            disableSource: 'C:\\\\Windows',
            currentDate: '',
            check: false
          },
          {
            title: '这是一张图片',
            sku: 'B07FDWYXN4',
            user: '李云',
            img: require('../../../static/image/img-icon.png'),
            disableSource: 'C:\\\\Windows',
            currentDate: '',
            check: false
          },
          {
            title: '这是一张视频',
            sku: 'B07FDWYXN5',
            user: '李云',
            img: require('../../../static/image/video-icon.png'),
            disableSource: 'C:\\\\Windows',
            currentDate: '',
            check: false
          },

          {
            title: '这是一张视频',
            sku: 'B07FDWYXN6',
            user: '李云',
            img: require('../../../static/image/video-icon.png'),
            disableSource: 'C:\\\\Windows',
            currentDate: '',
            check: false
          },
        ], //资源回收数据
        pickerOptions1: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        checkedLen: 0, //已选中数
        ischeckBoxAry: false  //是否全选
      }
    },
    computed: {
    },
    created() {

      this.DeleteRecoveryGoodsBoolean = []
      for (let i = 0; i < this.RecoveryGoodsData.length; i++) {
        this.RecoveryGoodsData[i].currentDate = FormatTime("yyyy-MM-dd hh:mm:ss", new Date())
        this.DeleteRecoveryGoodsBoolean.push(false)
      }
    },
    methods: {
      selectDeleteRecoveryArr(DeleteRecoveryArr) {
        this.DeleteRecoveryGoodsArr = DeleteRecoveryArr
      },
      selectCheckedLen(checkedLen) {
        this.checkedLen = checkedLen
      },
      changeIscheckBoxAry(ischeckBoxAry) {
        this.ischeckBoxAry = ischeckBoxAry
      },
      checkedAllFn() {
        for (let i = 0; i < this.DeleteRecoveryGoodsBoolean.length; i++) {
          if (this.DeleteRecoveryGoodsBoolean[i] === true) {
            this.DeleteRecoveryGoodsBoolean.splice(i, 1, false)
            this.checkedLen = 0
          } else {
            this.DeleteRecoveryGoodsBoolean.splice(i, 1, true)
            this.checkedLen = this.DeleteRecoveryGoodsBoolean.length
          }
        }

      },
      //搜索 查询用户所输入产品或SKU
      searchPS() {
      },
      //恢复用户勾选的一条or多条产品
      Recovery() {
        this.$confirm('此操作将恢复该产品, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          // productsDelete(this.ShopCheckID).then(() => {
          // });
          // this.ShopCheckID = [];
          this.$message({
            type: 'success',
            message: '恢复成功!'

          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消恢复'
          });
        });
      },
      //删除用户勾选的一条or多条产品
      Delete() {
        this.$confirm('此操作将永久删除该产品, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          // productsDelete(this.ShopCheckID).then(() => {
          // });
          // this.ShopCheckID = [];
          this.$message({
            type: 'success',
            message: '删除成功!'

          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    },
    components: {
      recoveryCommon
    },
  }
</script>

<style scoped>
  .checked-all{
    display: inline-block;
  }
</style>
