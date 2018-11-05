<template>
  <div class="box">
    <breadcurmb :pathList="pathList"></breadcurmb>
    <title-info :info="$t('spec.title-info')" :titleInfo="'spec'"></title-info>
    <div class="search-box size12 marTop10 marBott10 el-row is-align-middle el-row--flex">
      <div class="searchKeyword cf">
        <span class="size12 color47">{{$t('spec.search-keyword')}}</span>
        <el-input
          :placeholder="$t('spec.keyword-placehold')"
          v-model="keyWord"
          size="small"
          style="width: 250px;box-sizing: border-box;margin-right:10px;"
          clearable>
        </el-input>
          <el-button type="primary" native-type="button" size="small" class="butt_search_W size12 colorF" @click="searchMore()">{{$t('button.search')}}</el-button>
      </div>
      <el-button type="primary" native-type="button" size="small" class="butt_add colorF size12" @click="openNewModule">
                  {{$t('spec.btn-text')}}
                </el-button>
    </div>

    <div class="table-box">
      <el-table
        :data="tableData"
        border
        size="small"
        header-row-class-name="size14"
        style="width: 100%">
        <template v-for="(col) in cols">
          <el-table-column v-if="col.prop === 'name'" :prop="col.prop"  :label='col.label' :key="col.prop" width="110px"  show-overflow-tooltip>
          </el-table-column>

          <el-table-column v-else-if="col.prop === 'state'" :prop="col.prop"  :label='col.label' :key="col.prop"
          width="110px"
            >
            <template slot-scope="scope">
              <el-switch
                class="switch-btn"
                v-model="scope.row.state"
                active-color="#25AC42"
                inactive-color="#BBBBBB"
                @change ='stateChange(scope.row.id)'>
              </el-switch>
              <i class="el-icon-edit-outline pointer size18 edit-btn" :title="$t('button.edit')" @click="editDesc(scope.row)" v-if="scope.row.state"></i>
              <i class="el-icon-delete pointer size18 edit-btn" :title="$t('button.edit')" v-else @click="editDesc(scope.row)"></i>
            </template>
          </el-table-column>
          <el-table-column v-else-if="col.type === 'time'" :prop="col.prop"  :label='col.label' :key="col.prop" width="125px"  show-overflow-tooltip>
          </el-table-column>
        <!--正常的表头，过多内容会省略-->
        <el-table-column v-else :prop="col.prop" :label="col.label" :key="col.prop" min-width="128px"></el-table-column>
      </template>

     </el-table>
    </div>
    <!-- 分页 -->
    <div class="page-box">
      <el-pagination
        layout="total, sizes, prev, pager, next, jumper"
        :pager-count= 5
        :page-sizes="[10, 20, 30, 40 ,50]"
        :page-size="pageSize"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange">
      </el-pagination>
    </div>
    <alert-description ref="alertDescription"></alert-description>
  </div>
</template>

<script type="es6">
import Breadcurmb from '../../commonModule/breadcrumb'
import TitleInfo from '../../commonModule/titleInfo'
import AlertDescription from './alertSpec'
  export default {
    data() {
        return {
          pathList:[{"title":this.$t('description.title-parent'),"path":""},{"title":this.$t('spec.title-next'),"path":""}],
          keyWord: '',
          cols: [ //table 表头字段
            { label: this.$t("spec.table-name-text"), prop: "name", type: "normal", sortable:false},
            { label: this.$t("spec.table-about-text"), prop: "aboutClass", type: "normal", sortable:false},
            { label: this.$t("spec.table-common-text"), prop: "common", type: "normal", sortable:false},
            { label: this.$t("spec.table-amazon-text"), prop: "amazon", type: "normal", sortable:false},
            { label: this.$t("spec.table-ebay-text"), prop: "ebay", type: "normal", sortable:false},
            { label: this.$t("spec.table-wish-text"), prop: "wish", type: "normal", sortable:false},
            { label: this.$t("spec.table-vova-text"), prop: "vova", type: "normal", sortable:false},
            { label: this.$t("spec.table-souq-text"), prop: "souq", type: "normal", sortable:false},
            { label: this.$t("spec.table-cdiscount-text"), prop: "cdiscount", type: "normal", sortable:false},
            { label: this.$t("spec.table-time-text"), prop: "creatTime", type: "time", sortable:false},
            { label: this.$t('spec.table-state-text'), prop: "state", type: "normal", sortable:false},
          ],
          tableData : [
            {
              id: '1',
              name: '退货政策',
              aboutClass: ['衣服','汽车配件'],
              common:'品牌1，品牌2',
              amazon: '品牌1',
              ebay: '品牌2',
              wish: '品牌1，品牌3',
              vova: '品牌2',
              souq: '品牌5',
              cdiscount: '品牌1，品牌2',
              creatTime: '2010-12-01 20:12',
              state: false,
            },
            {
              id: '1',
              name: '退货政策',
              aboutClass: ['衣服','汽车配件'],
              common:'品牌1，品牌2',
              amazon: '品牌1',
              ebay: '品牌2',
              wish: '品牌1，品牌3',
              vova: '品牌2',
              souq: '品牌5',
              cdiscount: '品牌1，品牌2',
              creatTime: '2010-12-01 20:12',
              state: false,
            },
            {
              id: '1',
              name: '退货政策',
              aboutClass: ['衣服','汽车配件'],
              common:'品牌1，品牌2',
              amazon: '品牌1',
              ebay: '品牌2',
              wish: '品牌1，品牌3',
              vova: '品牌2',
              souq: '品牌5',
              cdiscount: '品牌1，品牌2',
              creatTime: '2010-12-01 20:12',
              state: false,
            }
          ],
          pageNumber: 1,
          pageSize: 10,
          total: 0,
        }
    },
    created() {
      console.log('spec')
    },
    mounted() {

    },
    methods: {
      searchMore() {

      },
      openNewModule() {
        this.$refs.alertDescription.openAlert()
      },//编辑按钮
      editDesc(data) {
        console.log(data)
        this.$refs.alertDescription.openAlert(data)
      },
      //品类处理
      aboutClassChange(ary){
        let all =''
        ary.forEach((item)=> {
          all = all+ item+' ; '
        })
        all = all.substring(0,all.length-2)
        return all
      }
      ,//状态更改
      stateChange(id) {
        console.log(id)
      }, //分页 pageSize
      handleSizeChange(val) {
        console.log('pageSize'+val)
      },// 分页pageNumber
      handleCurrentChange(val){
        console.log('pageNumber'+val)
      }

    },
    components: {
      Breadcurmb,
      TitleInfo,
      AlertDescription
    },
  }
</script>

<style scoped>

   .searchKeyword {
    display: flex;
    height: 33px;
  }

  .searchKeyword span:nth-child(1) {
    line-height: 33px;
    width: 45px;
    text-align: left;
  }

  .searchKeyword span:nth-last-child(1) {
    line-height: 33px;
    text-decoration: underline;
  }
  .butt_add{
    margin-left:auto;
  }
  .width60{width: 60px}
  .btn-box {
    padding:13px 0;

  }
  .table-box {
    text-align: center;
  }
  .table-box /deep/ .el-table th{
    text-align: center;
  }
  .table-box .switch-btn{
    vertical-align: middle
  }
  .table-box .edit-btn{
    vertical-align: middle;
    margin-left:20%;
  }
  .table-box /deep/ .el-table__body tr.current-row > td{
    background: #fff;
  }
  .page-box {
    text-align: right;
    padding-right:20px;
    margin-top: 20px;
  }
</style>
