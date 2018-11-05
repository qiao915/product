<template>
  <div>
    <el-form :model="requestForm" :rules="rules" ref="requestForm" size="mini" class="" @submit.native.prevent>
      <el-form-item :label="$t('categoriesManager.categories_add_selected')" label-width="80px">
        <div>
          {{formData.categoryName}}
        </div>
      </el-form-item>
      <el-form-item :label="$t('categoriesManager.categories_add_sub_label')" prop="categoryNames" label-width="80px">
        <el-input v-model.trim="requestForm.categoryNames" :placeholder="$t('categoriesManager.categories_placeholder')" @keyup.enter.native="inputEnter"></el-input>
      </el-form-item>
      <div class="size12 notes">
        <el-tag
          v-for="(tag, index) in tags"
          :key="index"
          closable
          type="info"
          @close="closeTags(tag, index)"
        >
          {{tag}}
        </el-tag>
      </div>
    </el-form>
    <div class="el-dialog__footer ph-0 pb-0">
      <el-button type="primary" @click="submitForm('requestForm')" size="mini">{{$t('button.add')}}</el-button>
      <el-button @click="close" size="mini">{{$t('button.cancel')}}</el-button>
    </div>
  </div>
</template>
<script>
import {addSubCategories} from '@/api/categoriesManager'
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
      tags: []
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          const params = {
            parentCategoryId: this.formData.categoryId,
            categoryNames: this.tags
          }
          addSubCategories(params).then(resp => {
            this.$message({
              message: this.$t('message.categories_add_sub_success'),
              type: 'success',
              showClose: true
            })
            this.$emit('successEdit')
          }).catch(err => {
            console.log(err)
          })
        } else {
          return false
        }
      })
    },
    close() {
      this.$emit('closeDialog')
    },
    closeTags(tag, index) {
      this.tags.splice(index, 1)
      this.requestForm.categoryNames = this.tags.join(';') + ';'
    },
    inputEnter() {
      let last = this.requestForm.categoryNames[this.requestForm.categoryNames - 1]
      if (!/,|，|；|;/.test(last)) {
        this.requestForm.categoryNames = this.requestForm.categoryNames + ';'
      }
    }
  },
  watch: {
    'requestForm.categoryNames' (newVal) {
      let val = newVal
      this.tags = val.replace(/,|，|；/g, ';').split(';')
      console.log(this.tags)
    }
  }
}
</script>
<style scoped>
.notes {
  padding-left: 80px;
}
</style>
