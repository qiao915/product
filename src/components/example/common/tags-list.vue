<template>
  <div class="wrapper">
    <div class="dot"></div>
    <div class="tags-letter">
      {{A}}
    </div>
    <div class="tags-sub size12">
      <div class="tags-item" v-for="(tag, index) in tags" :key="index">
        <el-tag
          closable
          :type="tag.type"
          :key="tag.name"
          @close="tagsHandleDelete(tag)"
        >
          {{tag.name}}
        </el-tag>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TagsList',
  data() {
    return {
      A: 'A',
      tags: [
        {name: '标签三（已关联1个产品）', type: 'info'},
        {name: '标签三（已关联1个产品）', type: 'info'},
        {name: '标签三', type: 'info'},
        {name: '标签三', type: 'info'},
        {name: '标签三', type: 'info'},
        {name: '标签三', type: 'info'},
        {name: '标签三', type: 'info'},
        {name: '标签三', type: 'info'},
        {name: '标签三', type: 'info'},
        {name: '标签三', type: 'info'},
        {name: '标签三', type: 'info'},
        {name: '标签三', type: 'info'},
        {name: '标签三', type: 'info'},
      ]
    }
  },
  methods: {
    tagsHandleDelete (tag) {
      console.log(tag)
    }
  }
}
</script>
<style scoped>
.wrapper {
  border-left: 1px solid #333;
  display: flex;
}
.dot {
  width: 50px;
  height: 3px;
  border-bottom: 1px dotted #bbb;
}
.tags-letter {
  position: relative;
  top: -5px;
}
.tags-sub {
  display: flex;
  flex: 1;
  margin-left: 20px;
  justify-content: space-between;
  flex-wrap: wrap;
}
.tags-item {
  width: 19%;
  min-width: 150px;
  height: 30px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.tags-item /deep/ .el-tag {
  width: 100%;
  position: relative;
}
.tags-item /deep/ .el-tag .el-icon-close {
  font-size: 14px;
  position: absolute;
  top: 8px;
  right: 0px;
}
</style>
