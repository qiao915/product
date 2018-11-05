<template>
  <div class="box">
    <breadcurmb :pathList="pathList"></breadcurmb>
    <title-info :info="$t('categoriesManager.categories_tip_info')" :titleInfo="'description'"></title-info>
    <el-row type="flex" align="middle" class="size12 marTop10 marBott10">
      <el-input size="small" class="search-btn" :placeholder="$t('categoriesManager.categories_search_placeholder')" v-model="searchVal" clearable></el-input>
      <el-button class="butt_search_W" type="primary" size="small" @click="handleSearch">{{$t('button.search')}}</el-button>
    </el-row>
    <el-row type="flex" align="middle" class="size12 marTop10 marBott10 borderTopF2 borderBottF2">
      <el-button class="addCategories" @click="addCategoriesDialog = true" size="small" type="primary">{{$t('categoriesManager.categories_add')}}</el-button>
    </el-row>
    <div>
      <drag-tree-table :data="treeData" :onDrag="onTreeDataChange"></drag-tree-table>
    </div>
  </div>
</template>
<script>
import Breadcurmb from '@/components/commonModule/breadcrumb'
import TitleInfo from '@/components/commonModule/titleInfo'
import DragTreeTable from '@/components/example/DragTreeTable'
export default {
  name: 'categoriesManager',
  data() {
    return {
      pathList: [{ "title": this.$t('description.title-parent'), "path": "" }, { "title": this.$t('route.categories_manager'), "path": "" }],
      addCategoriesDialog: false,
      searchVal: '',
      isDrag: true,
      treeData: {
        columns: [],
        list: []
      },
    }
  },
  mounted() {
    let vm = this
    let columns = [
      {
        type: 'selection',
        title: '名称',
        field: 'name',
        align: 'left',
        formatter: (item) => {
          return '<span>' + item.name + '</span>'
        }
      },
      {
        title: '',
        type: 'action',
        width: 50,
        align: 'center',
        actions: {
          render(h, item) {
            return (<el-button type="primary" icon="el-icon-circle-plus" circle size="mini" onClick={vm.onAddSubCategories.bind(this, item)}></el-button>)
          }
        }
      },
      {
        title: '封面配图',
        type: 'action',
        align: 'center',
        actions: {
          render(h, item) {
            return (<img class="table-img" draggable="false" src={item.imgSrc} />)
          }
        }
      },
      {
        title: '标签',
        field: 'label',
        align: 'center'
      },
      {
        title: '备注',
        field: 'remarks',
        align: 'center'
      },
      {
        title: '状态',
        type: 'action',
        align: 'center',
        actions: {
          render(h, item) {
            return (<el-button>delete</el-button>)
          }
        }
      }
    ]
    this.treeData = {
      columns: columns,
      list: [
        {
          name: '家用电器',
          id: 1,
          parent_id: 0,
          order: 0,
          open: false,
          label: '美君专属',
          remarks: '美君创建的，适合美君使用；',
          imgSrc: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2943822324,1412741981&fm=26&gp=0.jpg',
          status: true,
          children: [
            {
              name: '生活电器',
              id: 5,
              parent_id: 1,
              order: 0,
              open: false,
              label: '美君专属',
              imgSrc: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2943822324,1412741981&fm=26&gp=0.jpg',
              status: true,
              children: [
                {
                  name: '插座',
                  id: 10,
                  parent_id: 5,
                  order: 0,
                  open: false,
                  label: '美君专属',
                  imgSrc: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2943822324,1412741981&fm=26&gp=0.jpg',
                  status: true,
                  children: []
                },
                {
                  name: '加电配件',
                  id: 11,
                  parent_id: 5,
                  order: 1,
                  open: false,
                  label: '美君专属',
                  imgSrc: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2943822324,1412741981&fm=26&gp=0.jpg',
                  status: true,
                  children: []
                }
              ]
            },
            {
              name: '厨房小电',
              id: 6,
              parent_id: 1,
              order: 1,
              open: false,
              label: '美君专属',
              imgSrc: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2943822324,1412741981&fm=26&gp=0.jpg',
              status: true,
              children: []
            }
          ]
        },{
          name: '玩具乐器',
          id: 2,
          parent_id: 0,
          order: 1,
          open: false,
          label: '美君专属',
          imgSrc: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2943822324,1412741981&fm=26&gp=0.jpg',
          status: true,
          children: []
        }
      ]
    }
  },
  methods: {
    handleSearch() {

    },
    onTreeDataChange (list) {
      console.log(list)
      this.treeData.list = list
    },
    onAddSubCategories(item, e) {
      e.stopPropagation()
      console.log('添加', item)
    }
  },
  components: {
    Breadcurmb,
    TitleInfo,
    DragTreeTable
  }
}
</script>
<style>
.table-img {
  max-height:35px;
  vertical-align: middle;
}
</style>

<style scoped>
.search-btn {
  width: 300px;
  height: 34px;
  margin-right: 33px;
}
.addCategories {
  margin-left: auto;
}

</style>
