<template>
  <div class="box">
    <breadcurmb :pathList="pathList"></breadcurmb>
    <title-info :info="$t('categoriesManager.categories_tip_info')" :titleInfo="'description'"></title-info>
    <el-row type="flex" align="middle" class="size12 marTop10 marBott10 borderTopF2 borderBottF2">
      <el-col :span="16" class="changingTips" v-show="tipShow">
        {{$t('categoriesManager.categories_change_tip_start') + changingAccount + $t('categoriesManager.categories_change_tip_end')}}
      </el-col>
      <el-button class="addCategories" @click="addCategoriesDialog = true" size="small" type="primary">{{$t('categoriesManager.categories_add')}}</el-button>
      <el-button class="modifyCategories" @click="modifyCategoriesDialog = true" size="small" type="primary">{{$t('categoriesManager.categories_modify')}}</el-button>
    </el-row>
    <div>
      <tree-table :data="tableData" :expand-all="expandAll">
        <el-table-column label=" " align="center" width="100">
          <template slot-scope="scope">
            <i :title="$t('categoriesManager.categories_add_sub')" class="el-icon-circle-plus add-btn pointer" @click="addSubCategoriesDialog = true;currentRow = scope.row"></i>
          </template>
        </el-table-column>
        <el-table-column :label="$t('categoriesManager.table_head_img')" align="center">
          <template slot-scope="scope">
            <img class="table-img" src="" alt="">
            {{scope.row.imageId}}
          </template>
        </el-table-column>
        <el-table-column :label="$t('categoriesManager.table_head_remark')" prop="remark" align="center">

        </el-table-column>
        <el-table-column :label="$t('categoriesManager.table_head_create_time')" align="center">
          <template slot-scope="scope">
            {{scope.row.createTime | moment}}
          </template>
        </el-table-column>
        <el-table-column :label="$t('categoriesManager.table_head_status')" width="200" align="center">
          <template slot-scope="scope">
            <el-switch
              style="display: block"
              v-model="scope.row.status"
              active-color="#25AC42"
              inactive-color="#BBBBBB"
              @change="stateChange(scope.row)">
            </el-switch>
            <i :title="$t('categoriesManager.categories_edit')" class="el-icon-edit-outline size18 pointer" @click="addCategoriesDialog = true;currentRow = scope.row"></i>
            <i :title="$t('categoriesManager.categories_delete')" class="el-icon-delete size18 pointer" @click="deleteCategoriesDialog = true;currentRow = scope.row"></i>
          </template>
        </el-table-column>
      </tree-table>
    </div>

    <!-- 添加子分类弹框 -->
    <el-dialog :title="$t('categoriesManager.categories_add_sub')" :visible.sync="addSubCategoriesDialog" width="600px" @closed="currentRow = {}">
      <div v-if="addSubCategoriesDialog">
        <category-add-sub @successEdit="successEdit('addSubCategoriesDialog')" @closeDialog="addSubCategoriesDialog = false; currentRow = {}" :formData="currentRow"></category-add-sub>
      </div>
    </el-dialog>
    <!-- 新建分类和 编辑分类弹框 -->
    <el-dialog :title="!currentRow.categoryId ? $t('categoriesManager.categories_add'): $t('categoriesManager.categories_edit')" :visible.sync="addCategoriesDialog" width="600px" @closed="currentRow = {}">
      <div v-if="addCategoriesDialog">
        <category-edit @successEdit="successEdit('addCategoriesDialog')" @closeDialog="addCategoriesDialog = false; currentRow = {}" :formData="currentRow" :categoryList="originData"></category-edit>
      </div>
    </el-dialog>
    <!-- 删除分类弹框 -->
    <el-dialog :title="$t('categoriesManager.categories_delete_title')" :visible.sync="deleteCategoriesDialog" width="600px" @closed="currentRow = {}">
      <div v-if="deleteCategoriesDialog">
        <category-delete @successEdit="successEdit('deleteCategoriesDialog')" @closeDialog="deleteCategoriesDialog = false; currentRow = {}" :formData="currentRow"></category-delete>
      </div>
    </el-dialog>
    <!-- 调整分类树弹框 -->
    <el-dialog :title="$t('categoriesManager.categories_modify')" :visible.sync="modifyCategoriesDialog" width="600px">
      <div v-if="modifyCategoriesDialog">
        <category-modify @successEdit="successEdit('modifyCategoriesDialog')" @closeDialog="modifyCategoriesDialog = false" :originTreeData="tableData"></category-modify>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Breadcurmb from '@/components/commonModule/breadcrumb'
import TitleInfo from '@/components/commonModule/titleInfo'
import TreeTable from '@/components/example/common/TreeTable'
import {getCategoriesList,enableCategory,disableCategory} from '@/api/categoriesManager'
import * as moment from 'moment'
import CategoryAddSub from './dialog/category-add-sub'
import CategoryEdit from './dialog/category-edit'
import CategoryDelete from './dialog/category-delete'
import CategoryModify from './dialog/category-modify'
import {toTreeData} from '@/public/arrayToTree'

export default {
  name: 'categoriesManager',
  data() {
    return {
      pathList: [{ "title": this.$t('description.title-parent'), "path": "" }, { "title": this.$t('route.categories_manager'), "path": "" }],
      addCategoriesDialog: false,
      addSubCategoriesDialog: false, // 点击 添加子分类快捷键
      modifyCategoriesDialog: false, // 调整分类弹出框
      deleteCategoriesDialog: false, // 删除分类弹出框
      tipShow: true, // 调整分类是 提醒别的用户 小框框
      changingAccount: '', // 正在调整的分类的账号
      expandAll: false,
      tableData: [],
      originData: [],
      currentRow: {}
    }
  },
  created() {
    this.$nextTick(() => {
      this._getCategoriesList()
    })
  },
  methods: {
    _getCategoriesList() {
      getCategoriesList().then(res => {
        this.originData = res
        let attributes = {
          id: 'categoryId',
          parentId: 'parentCategoryId'
        }
        this.tableData = toTreeData(this.originData.concat(), attributes)
        console.log(this.tableData)
      }).catch(err => {
        console.log(err)
      })
    },
    stateChange (row) {
      const resquest = row.status ? enableCategory : disableCategory
      const msg = row.status ? this.$t('categoriesManager.categories_enable') : this.$t('categoriesManager.categories_disable')
      resquest(`${row.categoryId}`, {}).then(res => {
        this.$message({
          message: msg,
          type: 'success'
        })
      }, err => {
        this.$message({
          message: msg,
          type: 'error'
        })
        row.status = !row.status
      })
    },
    successEdit(dialogAttr) {
      this._getCategoriesList()
      this[dialogAttr] = false
    },
  },
  filters: {
    moment(val, format) {
      const date = isNaN(val) ? moment(val) : moment(parseInt(val.padEnd(13, '0')))
      if (!(date.isValid())) {
          return val
      }
      return date.local().format(format || 'YYYY-MM-DD HH:mm:ss')
    }
  },
  components: {
    Breadcurmb,
    TitleInfo,
    TreeTable,
    CategoryAddSub,
    CategoryEdit,
    CategoryDelete,
    CategoryModify
  }
}
</script>
<style scoped>
.addCategories {
  margin-left: auto;
}
.modifyCategories {
  margin-left: 20px;
}
.changingTips {
  line-height:32px;
  padding-left: 50px;
}
.table-img {
  max-height: 35px;
  vertical-align: middle;
}
.add-btn {
  font-size: 23px;
  color: #198342;
  line-height: 0;
  vertical-align: middle;
}
</style>
