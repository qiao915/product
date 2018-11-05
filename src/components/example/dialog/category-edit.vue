<template>
  <div>
    <el-form :model="requestForm" :rules="rules" ref="requestForm" size="mini" class="" @submit.native.prevent>
      <el-form-item :label="$t('categoriesManager.categories_edit_name')" prop="categoryName" label-width="100px">
        <el-input v-model.trim="requestForm.categoryName"></el-input>
      </el-form-item>
      <div class="el-form-item is-required">
        <label for="name" class="el-form-item__label" style="width:100px;">{{$t('categoriesManager.categories_edit_img')}}</label>
        <div @click="uploadImgWrap" class="avatar-uploader">
          <input v-show="false" type="file" name="categoryImg" @change="fileUpload($event)" id="file_btn" />
          <img v-if="requestForm.img_url" :src="img_g_url + requestForm.img_url" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </div>
      </div>
      <el-form-item :label="$t('categoriesManager.categories_edit_pid_name')" prop="parentCategoryId" label-width="100px">
        <el-cascader
          expand-trigger="hover"
          change-on-select
          :options="categoryTree"
          v-model="pids"
          clearable
          :show-all-levels="false"
          @change="handleChange">
        </el-cascader>
      </el-form-item>
      <el-form-item :label="$t('categoriesManager.categories_edit_remark')" prop="remark" label-width="100px">
        <el-input type="textarea" v-model="requestForm.remark"></el-input>
      </el-form-item>
    </el-form>
    <div class="el-dialog__footer ph-0 pb-0">
      <el-button type="primary" @click="submitForm('requestForm')" size="mini">{{$t('button.save')}}</el-button>
      <el-button @click="close" size="mini">{{$t('button.cancel')}}</el-button>
    </div>
  </div>
</template>
<script>
import {toTreeData} from '@/public/arrayToTree'
import {addCategories, editCategories} from '@/api/categoriesManager'
export default {
  props: {
    formData: Object,
    categoryList: {
      type: Array,
      default: []
    }
  },
  data () {
    return {
      requestForm: {
        categoryName: this.formData.categoryName,
        imageId: 'default1',
        categoryId: this.formData.categoryId,
        parentCategoryId: this.formData.parentCategoryId || '',
        remark: this.formData.remark
      },
      rules: {
        categoryName: [
          {
            required: true,
            message: this.$t('message.categories_form_rule_name'),
            trigger: 'blur'
          }
        ]
      },
      categoryTree: [],
      pids: []
    }
  },
  created() {
    console.log(this.categoryList)
    let attributes = {
      id: 'categoryId',
      parentId: 'parentCategoryId'
    }
    this.categoryList.forEach(t => {
      t.label = t.categoryName
      t.value = t.categoryId
    })
    this.categoryTree = toTreeData(this.categoryList.concat(), attributes)
    this._cleanTreeChildren(this.categoryTree)
    this.categoryTree.unshift({
      label: '一级分类',
      value: '',
      categoryId: '',
      parentCategoryId: ''
    })
    this._findPids(this.requestForm.parentCategoryId)
    if (this.pids.length === 0) {
      this.pids.unshift('')
      this.requestForm.parentCategoryId = ''
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log(this.requestForm.categoryId)
          const request = !!this.requestForm.categoryId
            ? editCategories
            : addCategories
          request(this.requestForm, this.requestForm.categoryId).then(resp => {
            const message = !!this.requestForm.categoryId
              ? this.$t('message.categories_edit_success')
              : this.$t('message.categories_add_success')
            this.$message({
              message: message,
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
    uploadImgWrap() {
      let upBtn = document.querySelector('#file_btn')
      let event = document.createEvent('MouseEvents');
      event.initEvent("click", false, true);
      upBtn.dispatchEvent(event)
    },
    fileUpload(el) {
      var fileObj = el.currentTarget.files[0];
      if (!fileObj) return
      var isLt8M = fileObj.size / 1024 / 1024 < 10;
      if (!isLt8M) {
        this.$message({
          message: '上传文件大小不能超过 10MB!',
          type: 'warning',
          duration: 1500
        });
        return false;
      }
      let _this = this;
      this.$http
        .upload('/goods-category/upload-img', fileObj).then((res) => {
          if (res.code === 0) {
            _this.requestForm.img_url = res.msg
          }
        }).catch(err => {
          _this.$message({
            showClose: true,
            message: '上传失败，请重新选取上传,或刷新页面',
            type: 'error'
          });
        })
    },
    handleChange(val) {
      this.requestForm.parentCategoryId = this.pids[this.pids.length - 1]
    },
    close() {
      this.$emit('closeDialog');
    },
    _cleanTreeChildren(tree) {
      tree.forEach(t => {
        if (t.children) {
          if (t.children.length === 0) {
            delete t.children
          }else {
            this._cleanTreeChildren(t.children)
          }
        }
      })
    },
    _findPids(parentCategoryId) {
      if (parentCategoryId === '') return
      this.categoryList.forEach(t => {
        if (t.categoryId === parentCategoryId) {
          this.parentCategoryId.unshift(t.categoryId)
          if (t.parentCategoryId === '') {
            return false
          }
          this._findPids(t.parentCategoryId)
        }
      })
    }
  }
}
</script>
<style scoped>
.avatar-uploader {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  display: inline-block;
}
.avatar-uploader:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  min-width: 178px;
  max-height: 178px;
  display: block;
}
.form-wrap /deep/ .el-form-item {
  margin-bottom: 0;
}
</style>
