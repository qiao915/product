<template>
  <div>
    <el-tree
      :data="treeData"
      node-key="id"
      default-expand-all
      draggable
      @node-drag-start="handleDragStart"
      @node-drag-enter="handleDragEnter"
      @node-drag-leave="handleDragLeave"
      @node-drag-over="handleDragOver"
      @node-drag-end="handleDragEnd"
      @node-drop="handleDrop"
      :allow-drop="allowDrop"
    >
     <span class="custom-tree-node" slot-scope="{ node, data }">
        <span>{{ node.label }}</span>
        <span>
          <i class="el-icon-rank size18"></i>
        </span>
      </span>
    </el-tree>
    <div class="el-dialog__footer ph-0 pb-0">
      <el-button type="primary" size="mini">{{$t('button.save')}}</el-button>
      <el-button @click="close" size="mini">{{$t('button.cancel')}}</el-button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    originTreeData: Array
  },
  data() {
    return {
      requestForm: {},
      treeData: []
    }
  },
  created() {
    // this.treeData = this._deepClone(this.originTreeData)
    this.treeData = [
      {
        id: 1,
        order: 0,
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [
            {
              id: 9,
              order: 0,
              label: '三级 1-1-1'
            },
            {
              id: 10,
              order: 1,
              label: '三级 1-1-2'
            }]
        }]
      },
      {
        id: 2,
        order: 1,
        label: '一级 2',
        children: [
          {
            id: 5,
            order: 0,
            label: '二级 2-1'
          },
          {
            id: 6,
            order: 1,
            label: '二级 2-2'
          }]
      },
      {
        id: 3,
        order: 2,
        label: '一级 3',
        children: [
          {
            id: 7,
            order: 0,
            label: '二级 3-1'
          },
          {
            id: 8,
            order: 1,
            label: '二级 3-2',
            children: [
              {
                id: 11,
                order: 0,
                label: '三级 3-2-1'
              },
              {
                id: 12,
                order: 1,
                label: '三级 3-2-2'
              },
              {
                id: 13,
                order: 2,
                label: '三级 3-2-3'
              }]
          }]
      }
    ]
    this._initLevel(this.treeData)
    console.log(this.treeData)
  },
  methods: {
    handleDragStart(node, ev) {
      console.log('drag start', node);
    },
    handleDragEnter(draggingNode, dropNode, ev) {
      // console.log('tree drag enter: ', dropNode.label);
    },
    handleDragLeave(draggingNode, dropNode, ev) {
      // console.log('tree drag leave: ', dropNode.label);
    },
    handleDragOver(draggingNode, dropNode, ev) {
      // console.log('tree drag over: ', dropNode.label);
    },
    handleDragEnd(draggingNode, dropNode, dropType, ev) {
      // console.log('tree drag end: ', dropNode && dropNode.label, dropType);
    },
    handleDrop(draggingNode, dropNode, dropType, ev) {
      // console.log('tree drop: ', dropNode.label, dropType);
      this._initOrder(this.treeData)
      console.log(this.treeData)
    },
    allowDrop(draggingNode, dropNode, type) {
      if (dropNode.data.level === 4) {
        return type !== 'inner';
      } else {
        return true;
      }
    },
    allowDrag(draggingNode) {
      // return draggingNode.data.label.indexOf('三级 3-2-2') === -1;
    },
    close() {
      this.$emit('closeDialog');
    },
    _initOrder(arr, level = null) {
      for (let i = 0; i < arr.length; i++) {
        let _level = 0
        if (level !== undefined && level !== null) {
          _level = level + 1
        }
        this.$set(arr[i], 'level', _level)
        arr[i].order = i
        // arr[i].level = level
        if (arr[i].children && arr[i].children.length) {
          this._initOrder(arr[i].children, _level)
        }
      }
    },
    _initLevel(arr, level = null) {
      for (let i = 0; i < arr.length; i++) {
        let _level = 0
        if (level !== undefined && level !== null) {
          _level = level + 1
        }
        this.$set(arr[i], 'level', _level)
        if (arr[i].children && arr[i].children.length) {
          this._initLevel(arr[i].children, _level)
        }
      }
    },
    _deepClone(obj) {
      let objClone = Array.isArray(obj) ? [] : {}
      if (obj && typeof obj === "object") {
        for (var key in obj) {
          if (obj.hasOwnProperty(key)) {
            //判断ojb子元素是否为对象，如果是，递归复制
            if (obj[key] && typeof obj[key] === "object") {
              objClone[key] = this._deepClone(obj[key])
            } else {
              //如果不是，简单复制
              objClone[key] = obj[key]
            }
          }
        }
      }
      return objClone
    }
  }
}
</script>
<style scoped>
.notes {
  padding-left: 80px;
}
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
</style>
