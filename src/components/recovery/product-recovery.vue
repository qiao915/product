<template>
  <div class="product-recovery">
    <div class="conditionNav size12 paddLeft14">
      <el-row type="flex" align="middle">
        <el-row type="flex" align="middle" class="paddTop10 paddBott10">
          <el-row class="textRight paddRight10" style="min-width: 94px">产品/商品SKU :</el-row>
          <el-row>
            <el-input size="small" v-model="typeSku" placeholder="请输入SKU搜索"></el-input>
          </el-row>
          <el-row class=" paddLeft10 textRight paddRight10" style="min-width: 105px">产品/商品标题 :</el-row>
          <el-row>
            <el-input size="small" v-model="typeTitle" placeholder="请输入产品搜索"></el-input>
          </el-row>
        </el-row>
        <el-row type="flex" align="middle" class="paddTop10 paddBott10">
          <el-row class="textRight paddLeft10 paddRight10" style="min-width: 68px">删除时段</el-row>
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
        <el-button
          class="el-button marLeft10 paddLeft14 colorF size12 el-button--primary el-button--small"
          @click="Recovery">全部恢复
        </el-button>
        <el-button class="el-button  colorF size12 el-button--primary el-button--small"
                   @click="Delete">全部删除<i
          class="colorR">(永久)</i></el-button>
      </div>
    </div>
    <recoveryCommon
      :data="RecoveryproductData"
      :checkedLen="checkedLen"
      :DeleteRecoveryBoolean="DeleteRecoveryProductBoolean"
      @selectDeleteRecoveryArr="selectDeleteRecoveryArr"
      @selectCheckedLen="selectCheckedLen"
      @changeIscheckBoxAry="changeIscheckBoxAry"
    ></recoveryCommon>
    <div class="page">
      <el-pagination :current-page="1" :page-sizes="[10, 20, 30, 40]" :page-size="10" :pager-count='5'
                     layout="total, sizes, prev, pager, next, jumper" :total="totalRecords"
                     @size-change="handleSizeChange" @current-change="handleCurrentChange"
                     @prev-click="handlePrevClick" @next-click="handleNextClick">
      </el-pagination>
    </div>
  </div>
</template>
<script type="es6">
  import {FormatTime, addClass, removeClass} from '../../../static/common-js/common'
  import recoveryCommon from './recovery-common'
  import {
    recycleBinItems,
    productsDelete,
    productsRecovery,
    productCategories
  } from '../../public/recycle-bin'

  export default {
    data() {
      return {
        typeTitle: '',  //产品or商品标题
        typeSku: "", //产品 or 商品 SKU
        StartTime: '', // 起始时间
        EndTime: '', // 结束时间
        DeleteRecoveryProductArr: {}, //待删除对象sku or 待恢复对象sku
        DeleteRecoveryProductBoolean: [], //待删除数组布尔值 or 待恢复数组布尔值
        RecoveryproductData: [   //资源回收数据
          {
            title: '这是一张图片',
            sku: 'B07FDWYXN1',
            user: '李云',
            img: require('../../../static/image/img-icon.png'),
            disableSource: 'C:\\\\Windows',
            currentDate: '',
          },
          {
            title: '这是一个视频',
            sku: 'B07FDWYXN2',
            user: '李云',
            img: require('../../../static/image/video-icon.png'),
            disableSource: 'C:\\\\Windows',
            currentDate: '',
          },
          {
            title: '这是一张图片',
            sku: 'B07FDWYXN3',
            user: '李云',
            img: require('../../../static/image/img-icon.png'),
            disableSource: 'C:\\\\Windows',
            currentDate: '',
          },
          {
            title: '这是一张图片',
            sku: 'B07FDWYXN4',
            user: '李云',
            img: require('../../../static/image/img-icon.png'),
            disableSource: 'C:\\\\Windows',
            currentDate: '',
          },
          {
            title: '这是一张视频',
            sku: 'B07FDWYXN5',
            user: '李云',
            img: require('../../../static/image/video-icon.png'),
            disableSource: 'C:\\\\Windows',
            currentDate: '',
          },

          {
            title: '这是一张视频',
            sku: 'B07FDWYXN6',
            user: '李云',
            img: require('../../../static/image/video-icon.png'),
            disableSource: 'C:\\\\Windows',
            currentDate: '',
          },
        ],
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
        ischeckBoxAry: false,  //是否全选
        PageNumber:1,
        PageSize:10,
        totalRecords:0,
      }
    },
    computed: {},
    created() {
      this._recycleBinItems()
      this.DeleteRecoveryProductBoolean = []
      for (let i = 0; i < this.RecoveryproductData.length; i++) {
        this.RecoveryproductData[i].currentDate = FormatTime("yyyy-MM-dd hh:mm:ss", new Date())
        this.DeleteRecoveryProductBoolean.push(false)
      }
    },
    methods: {
      //查询产品回收项列表
      _recycleBinItems() {
        recycleBinItems(this.PageNumber, this.PageSize).then(res => {
          this.RecoveryproductData = res.data
          this.totalRecords = res.totalRecords
        })
      },
      //点击上一页按钮改变当前页后触发
      handlePrevClick(val) {
        this.PageNumber = val;
        this._products(this.PageNumber,this.PageSize);
      },
      //点击下一页按钮改变当前页后触发
      handleNextClick(val) {
        this.PageNumber = val;
        this._products(this.PageNumber,this.PageSize);
      },
      //pageSize 每页条数改变时会触发
      handleSizeChange(val) {
        this.PageSize = val;
        this._products(this.PageNumber, this.PageSize);
      },
      //currentPage 当前页改变时会触发
      handleCurrentChange(val) {
        this.PageNumber = val;
        this._products(this.PageNumber,this.PageSize);
      },
      selectCheckedLen(index) {
        let isChecked = !this.DeleteRecoveryProductBoolean[index]
        if (isChecked) {
          this.checkedLen++
        } else {
          this.checkedLen--
        }
        this.DeleteRecoveryProductBoolean.splice(index, 1, isChecked);
      },
      changeIscheckBoxAry(ischeckBoxAry) {
        this.ischeckBoxAry = ischeckBoxAry
      },
      checkedAllFn() {
        this.checkedLen = 0
        this.RecoveryproductData.forEach((item, index) => {
          if (this.ischeckBoxAry) {
            if (!this.DeleteRecoveryProductBoolean[index]) {
              this.DeleteRecoveryProductBoolean.splice(index, 1, true);
            }
            this.checkedLen++
            this.DeleteRecoveryProductArr[index] = this.RecoveryproductData[index].sku
          } else {
            if (this.DeleteRecoveryProductBoolean[index]) {
              this.DeleteRecoveryProductBoolean.splice(index, 1, false);
            }
            this.DeleteRecoveryProductArr = {}
          }
        })
      },
      selectDeleteRecoveryArr() {
        for (let i in this.RecoveryproductData) {
          if(this.DeleteRecoveryProductBoolean[i] === true) {
            this.DeleteRecoveryProductArr[i] = this.RecoveryproductData[i].sku
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
  .checked-all {
    display: inline-block;
  }
  .page {
    text-align: right;
  }
</style>
