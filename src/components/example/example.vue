<template>
  <div class="box">
    <drag-tree-table :data="treeData" :onDrag="onTreeDataChange">

    </drag-tree-table>
    <tree-node v-for="(item, index) in data1" :key="index" :depth="0" :model="item">

    </tree-node>
    <el-button size="small" type="primary" v-clipboard:copy="1111111" v-clipboard:success="handleCopySuccess">copy</el-button>
    <el-button size="small" type="primary" @click.stop="vShow = !vShow">show</el-button>
    <div style="width:200px;height:200px;border:1px solid red" v-show="vShow" v-click-outside="handleClose">
      <div>
        2222222
      </div>
    </div>
  </div>
</template>
<script>
import DragTreeTable from '@/components/example/DragTreeTable';
import TreeNode from './tree-node'
export default {
  data() {
    return {
      treeData: {
        columns: [],
        list: []
      },
      data1: [],
      vShow: false
    }
  },
  created() {
    this.data1 = [{
      id: 1,
      parent_id: 0,
      open: true,
      text: '第一级',
      children: [
        {
          id: 3,
          parent_id: 1,
          open: true,
          text: '第一级 -1',
          children: []
        }, {
          id: 4,
          parent_id: 1,
          open: true,
          text: '第一级 -2',
          children: []
        }
      ]
    }, {
      id: 2,
      parent_id: 0,
      open: true,
      text: '第二级',
      children: []
    }]
  },
  mounted() {
    let vm = this
    var columns = [
      {
        type: 'selection',
        title: '菜单名称',
        field: 'name',
        align: 'left',
        formatter: (item) => {
          return '<span>' + item.name + '</span>'
        }
      },
      {
        title: '链接',
        // field: 'uri',
        type: 'action',
        align: 'center',
        actions: {
          render (h, item) {
            return (<el-button size="mini" type="warning" onClick={vm.onDetail.bind(this, item)}>test</el-button>)
          }
        }
      },
      {
        title: '操作',
        type: 'action',
        align: 'center',
        actions: [
          {
            text: '修改',
            type: 'warning',
            onclick: this.onDetail
          },
          {
            text: '删除',
            type: 'danger',
            onclick: this.onEdit
          }
        ]
      },
    ]
    this.treeData = {
      columns: columns,
      list: [
        {
          "id": 40,
          "parent_id": 0,
          "order": 0,
          "name": "动物类",
          "uri": "/masd/ds",
          "open": true,
          "children": []
        }, {
          "id": 5,
          "parent_id": 0,
          "order": 1,
          "name": "昆虫类",
          "uri": "/masd/ds",
          "open": true,
          "children": [
            {
              "id": 12,
              "parent_id": 5,
              "open": true,
              "order": 1,
              "name": "蚂蚁",
              "uri": "/masd/ds",
              "children": []
            },
            {
              "id": 13,
              "parent_id": 5,
              "open": true,
              "order": 0,
              "name": "蜜蜂",
              "uri": "/masd/ds",
              "children": []
            }
          ]
        },
        {
          "id": 19,
          "parent_id": 0,
          "order": 2,
          "name": "植物类",
          "uri": "/masd/ds",
          "open": true,
          "children": []
        }
      ]
    }

  },
  methods: {
    handleCopySuccess() {
      this.$message({
        message: 'copy !',
        type: 'success'
      })
    },
    handleClose () {
      this.vShow = false
    },
    onTreeDataChange(list) {
      console.log(list)
      this.treeData.list = list
    },
    onEdit(item, e) {
      cosnole.log(event)
      console.log('编辑', item)
    },
    onDetail(item, e) {
      e.stopPropagation()
      console.log('详情', item)
    }
  },
  components: {
    DragTreeTable,
    TreeNode
  }
}
</script>
<style scoped>
</style>
