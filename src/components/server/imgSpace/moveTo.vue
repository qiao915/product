<template>
  <!-- alert 移动到 其他文件夹 -->
  <div @click.stop class="tree-box">
    <el-dialog :title="$t('imgSpace.move-to')" :visible.sync="dialogMoveTo" :modal-append-to-body="false" :width="'550px'" :top="'18vh'">
      <div class="folder-tree ">
        <el-tree :data="treeData" :props="defaultProps" @node-click="handleNodeClick" :render-content="renderContent"></el-tree>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogMoveTo = false" size="small">{{$t('button.cancel')}}</el-button>
        <el-button type="primary" @click="onSubmit" size="small" >{{$t('button.submit')}}</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data(){
    return {
      dialogMoveTo:false ,
      allFolderData: [{
          id:'b',
          parentId:'',
          name:'一级文件夹1'
        },
        {
          id:'c',
          parentId:'',
          name:'一级文件夹2'
        },
        {
          id:'d',
          parentId:'',
          name:'一级文件夹3'
        },
        {
          id:'e',
          parentId:'',
          name:'一级文件夹4'
        },
        {
          id:'f',
          parentId:'b',
          name:'二级文件夹1'
        },
        {
          id:'g',
          parentId:'b',
          name:'二级文件夹2'
        },
        {
          id:'h',
          parentId:'c',
          name:'二级文件夹3'
        }],
       treeData: [],
        defaultProps: {
          children: 'children',
          label: 'name'
        }
    }
  },
  methods : {
    openAlert() {
      this.dialogMoveTo = true
     
      let attributes = {
        id: 'id',
        parentId: 'parentId'
      }
      this.treeData = this.toTreeData(this.allFolderData, attributes)
      console.log(this.treeData)
    },
    handleNodeClick(data) {
      console.log(data);
    },
    renderContent(h, { node, data, store }) {
      return (
          <span class="size12">
            <i class="icon"></i>
            <span>{node.label}</span>
          </span>
        );
    },
    onSubmit() {

    },
    treeObj(originObj) { //复制数据
      let objClone = Array.isArray(originObj) ? [] : {}
      if (originObj && typeof originObj === 'object') {
        for (var key in originObj) {
          if (originObj.hasOwnProperty(key)) {
            // 判断ojb子元素是否为对象，如果是，递归复制
            if (originObj[key] && typeof originObj[key] === 'object') {
              objClone[key] = this.treeObj(originObj[key])
            } else {
              // 如果不是，简单复制
              objClone[key] = originObj[key]
            }
          }
        }
      }
      if (!Array.isArray(originObj)) {
        objClone['children'] = []
      }
      return objClone
    },
    //data：带转换成树形结构的对象数组
    //attributes：对象属性
    toTreeData(data, attributes) {
      let resData = data;
      let tree = [];
      let _this = this

      //找寻根节点
      for (let i = 0; i < resData.length; i++) {
        if (resData[i][attributes.parentId] === '' || resData[i][attributes.parentId] === null || resData[i][attributes.parentId] === 'None') {
          tree.push(this.treeObj(resData[i]));
          resData.splice(i, 1);
          i--;
        }
      }
      console.log(tree)
      run(tree);

      //找寻子树
      function run(chiArr) {
        if (resData.length !== 0) {
          for (let i = 0; i < chiArr.length; i++) {
            for (let j = 0; j < resData.length; j++) {
              if (chiArr[i][attributes.id] === resData[j][attributes.parentId]) {
                let obj = _this.treeObj(resData[j]);
                chiArr[i].children.push(obj);
                resData.splice(j, 1);
                j--;
              }
            }
            run(chiArr[i].children);
          }
        }
      }
      return tree;
    }
  }
}
</script>
<style scoped>
 .tree-box /deep/ .el-dialog__body {
    padding: 20px ;
    padding-bottom:10px;
  }
  .folder-tree {
    height: 220px;
    overflow:auto ;
  }
  .folder-tree /deep/ .el-tree-node__content {
    height: 30px;
  }
  .folder-tree /deep/ .icon {
    display:inline-block;
    margin-right: 5px;
    height: 19px;
    width: 22px;
    background: url(/static/image/folder-small.png) 0 0 no-repeat;
    vertical-align: top;
  }
  
</style>


