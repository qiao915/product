<template>
  <div>
    <el-form :model="requestForm" :rules="rules" ref="requestForm" size="mini" class="" @submit.native.prevent>
      <el-form-item :label="$t('tagsManager.tags_name')" prop="name" label-width="80px">
        <el-input v-model="requestForm.name"></el-input>
      </el-form-item>
      <div class="size12 notes">
        {{$t('tagsManager.tags_name_notes')}}
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
  name: 'TagsEdit',
  data() {
    return {
      requestForm: {
        name: ''
      },
      rules: {
        name: [
          {
            required: true,
            message: this.$t('message.tags_form_rule_name'),
            trigger: 'blur'
          }
        ]
      },
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          
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
