<template>
  <!-- alert 新建描述模板 -->
  <div @click.stop>
    <el-dialog :title="$t('spec.alert-edit-item')" :visible.sync="dialogDesc" :modal-append-to-body="false" :width="'800px'" :top="'18vh'">
      <div>
        <!-- 编辑字段 -->
          <add-item ref="addItem" :itemData="itemData"></add-item>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogDesc = false" size="small">{{$t('button.cancel')}}</el-button>
        <el-button type="primary" @click="onSubmit" size="small" >{{$t('button.submit')}}</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import addItem from './addItem'
export default {
  data() {
    return {
      dialogDesc: false,
      itemData: {},
    }
  },
  methods: {
    openAlert(data){
      this.dialogDesc = true
      if(data){
        this.itemData = data
      }

    },
    onSubmit() {
      let item = this.$refs.addItem.getItemData()
      this.$emit('addAlertTable',item)
      this.dialogDesc = false
      this.itemData= {
        itemName: '',
        itemStyle: '',
        styleCont:'',
        isChecked: false,
        platform: {
          Amazon: '',
          eBay: '',
          Wish: '',
          Vova:'',
          SouQ:'',
          Cdiscount: ''
        },
      }
      this.$message({
        showClose: true,
        type: 'success',
        message: this.$t('message.spec_edit_item_success')
      });
    }


  },
  components: {
    addItem
  }
}
</script>
<style scoped>

</style>



