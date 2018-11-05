<template>
  <div class="box">
    <breadcurmb :pathList="pathList"></breadcurmb>
    <title-info :info="$t('attributeManager.attribute_tip_info')" :titleInfo="'description'"></title-info>
    <div class="">
      <el-row type="flex" align="middle" class="size12 marTop10 marBott10">
        <el-button class="addAttr" @click="addAttrDialog = true" size="small" type="primary">{{$t('attributeManager.attribute_add')}}</el-button>
      </el-row>
    </div>
    <el-table
      size="small"
      :data="tableData"
      border
      fit
      :header-cell-style="getRowClass"
      highlight-current-row
      style="width: 100%">
      <el-table-column prop="attributeName" :label="$t('attributeManager.attribute_name')" width="180"/>
      <el-table-column prop="attributeContent" :label="$t('attributeManager.attibute_content')" />
      <el-table-column :label="$t('attributeManager.attribute_category_relate')">
        <template slot-scope="scope">
          <template v-for="(categories, index) in scope.row.attributeCategories">
            <categories-table-cell :key="index" :data="categories" :isLast="index != scope.row.attributeCategories.length - 1"></categories-table-cell>
          </template>
        </template>
      </el-table-column>
      <el-table-column :label="$t('attributeManager.attribute_state')" align="center" class="flex">
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.status"
            active-color="#25AC42"
            inactive-color="#BBBBBB"
          >
          </el-switch>
          <i class="el-icon-edit-outline pointer size18 edit-btn" :title="$t('attributeManager.attribute_edit')" @click="addAttrDialog = true; editRow = scope.row"></i>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalRecords">
      </el-pagination>
    </div>
    <el-dialog :title="!editRow.id ? $t('attributeManager.attribute_add'): $t('attributeManager.attribute_edit')" :visible.sync="addAttrDialog" width="600px" @closed="closeDialog">
      <div v-if="addAttrDialog">
        <attribute-edit @successEdit="successEdit" @closeDialog="closeDialog" :formData="editRow"></attribute-edit>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import {getAttrList} from '@/api/attribute'
import CategoriesTableCell from './common/categories-table-cell'
import AttributeEdit from './dialog/attribute-edit'
import Breadcurmb from '@/components/commonModule/breadcrumb'
import TitleInfo from '@/components/commonModule/titleInfo'
export default {
  name: 'attributeManager',
  data () {
    return {
      pathList:[{"title":this.$t('description.title-parent'),"path":""},{"title":this.$t('route.attribute_manager'),"path":""}],
      addAttrDialog: false,
      totalRecords: 0, // 总条数
      totalPages: 1,  // 总页数
      currentPage: 1, // 当前页数
      pageSize: 10, // 每页条数
      tableData: [],
      // categoryList: [], // 传进
      editRow: {}
    }
  },
  created () {
    this.$nextTick(() => {
      this._getAttrList()
    })
  },
  methods: {
    getRowClass({ row, column, rowIndex, columnIndex }) {
      if (rowIndex == 0) {
        return "background:#EAEDF1"
      } else {
        return ""
      }
    },
    _getAttrList () {
      getAttrList().then(resp => {
        this.tableData = resp.data
        this.totalRecords = resp.totalRecords
        this.totalPages = resp.totalPages
      })
    },
    // 表格 分页控制
    handleSizeChange (pageSize) {
      this.pageSize = pageSize
      this._getAttrList()
    },
    handleCurrentChange (currentPage) {
      this.currentPage = currentPage
      this._getAttrList()
    },
    successEdit () {
      this._getAttrList()
      this.addAttrDialog = false
    },
    closeDialog () {
      this.addAttrDialog = false
      this.editRow = {}
    }
  },
  components: {
    CategoriesTableCell,
    AttributeEdit,
    Breadcurmb,
    TitleInfo
  }
}
</script>
<style scoped>
.box {
  width: 100%;
  padding: 0 40px 55px 26px;
  overflow-y: auto;
  min-width: 1000px;
}
.addAttr {
  margin-left: auto
}
.block {
  margin-top: 15px;
  text-align: right;
}
.block /deep/ .el-pagination {
  padding-right: 0;
}
.edit-btn{
  vertical-align: middle;
  margin-left: 6%;
}
</style>
