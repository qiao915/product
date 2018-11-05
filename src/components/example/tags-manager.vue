<template>
  <div class="box">
    <breadcurmb :pathList="pathList"></breadcurmb>
    <title-info :info="$t('tagsManager.tags_tip_info')" :titleInfo="'description'"></title-info>
    <el-row type="flex" align="middle" class="size12 marTop10 marBott10">
      <el-input size="small" class="search-btn" :placeholder="$t('tagsManager.tags_search_placeholder')" v-model="searchVal" clearable></el-input>
      <el-button class="butt_search_W" type="primary" size="small" @click="handleSearch">{{$t('button.search')}}</el-button>
    </el-row>
    <el-row type="flex" align="middle" class="size12 marTop10 marBott10 borderTopF2 borderBottF2">
      <el-button class="addTags" @click="addTagsDialog = true" size="small" type="primary">{{$t('tagsManager.tags_add')}}</el-button>
    </el-row>
    <tags-list></tags-list>
    <el-dialog :title="$t('tagsManager.tags_add')" :visible.sync="addTagsDialog" width="600px" @closed="closeDialog">
      <div v-if="addTagsDialog">
        <tags-edit @successEdit="successEdit" @closeDialog="closeDialog"></tags-edit>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Breadcurmb from '@/components/commonModule/breadcrumb'
import TitleInfo from '@/components/commonModule/titleInfo'
import TagsList from '@/components/example/common/tags-list'
import TagsEdit from './dialog/tags-edit'
export default {
  data () {
    return {
      pathList:[{"title":this.$t('description.title-parent'),"path":""},{"title":this.$t('route.tags_manager'),"path":""}],
      searchVal: '',
      addTagsDialog: false
    }
  },
  methods: {
    handleSearch () {
      
    },
    successEdit () {

    },
    closeDialog () {
      this.addTagsDialog = false
    }
  },
  components: {
    Breadcurmb,
    TitleInfo,
    TagsList,
    TagsEdit
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
.search-btn {
  width: 300px;
  height: 34px;
  margin-right: 33px;
}
.addTags {
  margin-left: auto
}
</style>
