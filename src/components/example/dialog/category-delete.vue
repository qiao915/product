<template>
  <div>
    <div>
      {{$t('categoriesManager.categories_delete_table_tip')}}
    </div>
    <el-table>
      
    </el-table>
    <div class="el-dialog__footer ph-0 pb-0">
      <el-button type="primary" size="mini">{{$t('button.add')}}</el-button>
      <el-button @click="close" size="mini">{{$t('button.cancel')}}</el-button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    formData: Object
  },
  data () {
    return {
      requestForm: {
        categoryNames: ''
      },
      rules: {
        name: [
          {
            required: true,
            message: this.$t('message.categories_form_sub'),
            trigger: 'blur'
          }
        ],
        attributeContent: [{required: true, message: this.$t('message.attribute_form_rule_content'), trigger: 'blur'}]
      },
    }
  },
  methods: {
    close() {
      this.$emit('closeDialog');
    },
  }
}
</script>
<style scoped>
.notes {
  padding-left: 80px;
}
</style>
