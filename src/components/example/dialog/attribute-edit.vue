<template>
  <div>
    <el-form :model="requestForm" :rules="rules" ref="requestForm" size="mini" class="" @submit.native.prevent>
      <el-form-item :label="$t('attributeManager.attribute_name')" prop="name" label-width="80px">
        <el-input v-model="requestForm.name"></el-input>
      </el-form-item>
      
      <!-- <el-form-item label="分类类别" prop="pid">
        <el-cascader
          expand-trigger="hover"
          change-on-select
          :options="categoryTree"
          v-model="pids"
          clearable
          :show-all-levels="false"
          @change="handleChange">
        </el-cascader>
      </el-form-item> -->
      <el-form-item :label="$t('attributeManager.attibute_content')" prop="attributeContent" label-width="80px">
        <el-input v-model="requestForm.attributeContent"></el-input>
      </el-form-item>
      <div class="size12 notes">
        {{$t('attributeManager.attribute_content_notes')}}
      </div>
    </el-form>
    <div class="el-dialog__footer ph-0 pb-0">
      <el-button type="primary" @click="submitForm('requestForm')" size="mini">{{$t('button.save')}}</el-button>
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
        name: this.formData.attributeName,
        id: this.formData.id,
        pid: this.formData.pid,
        attributeContent: this.formData.attributeContent
      },
      rules: {
        name: [
          {
            required: true,
            message: this.$t('message.attribute_form_rule_name'),
            trigger: 'blur'
          }
        ],
        attributeContent: [{required: true, message: this.$t('message.attribute_form_rule_content'), trigger: 'blur'}]
      },
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          const apiUrl = !!this.requestForm.id
            ? '/goods-category/edit-process'
            : '/goods-category/add-process'
          this.requestForm.name = this.requestForm.name.trim()
          this.$http.post(apiUrl, this.requestForm).then(resp => {
            if (resp.code === 0) {
              const message = !!this.requestForm.id
                ? this.$t('message.attribute_edit_success')
                : this.$t('message.attribute_add_success')
              this.$message({
                message: message,
                type: 'success',
                showClose: true
              })
              this.$emit('successEdit')
            }
          });
        } else {
          return false
        }
      })
    },
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
