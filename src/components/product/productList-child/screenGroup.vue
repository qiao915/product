<!--
	Created by xieqiang on 2018/10/26.
-->
<template>
  <div class="register">
    <div class="content">
      <div class="head">
        <span class="size16 fontB color33">新建筛选组</span>
        <i class="el-icon-close size20 color33 mousePointer" @click="close"></i>
      </div>
      <div class="scroll registerFprm size12">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="90px" class="demo-ruleForm">
          <el-form-item label="筛选组名称" prop="name"  v-if="!isCondition">
            <el-input size="small" class="width320" v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="设置内容" v-for="(sc,index) in ruleForm.screen" :key="index">

            <el-select class="width120 marRight10" size="small" v-model="sc.name" placeholder="请选择字段名">
              <el-option label="字段一" value="name1"></el-option>
              <el-option label="字段二" value="name2"></el-option>
            </el-select>
            <el-select class="width120 marRight10" size="small" v-model="sc.operator" placeholder="请选择运算符">
              <el-option label="等于" value="operator1"></el-option>
              <el-option label="大于" value="operator2"></el-option>
            </el-select>
            <el-input class="width120 marRight10" size="small" v-model="sc.value" placeholder="请输入自定义名称"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button v-if="!isCondition" type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
            <el-button v-if="isCondition" type="primary">搜索</el-button>
            <el-button v-if="isCondition" type="primary">搜索并创建筛选组</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script type="es6">

  export default {
    props: ['isCondition'],
    data() {
      return {
        ruleForm: {
          name: '',
          screen:[
            {name:'',operator:'',value:''},
            {name:'',operator:'',value:''}
          ]
        },
        rules: {
          name: [
            { required: true, message: '请输入筛选组名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
        }
      };
    },
    methods: {

      close() {
        this.$alert('您确定要关闭当前页面？', {
          confirmButtonText: '确定',
          callback: action => {
            // this.$router.push({path:"/product/list"})
            this.$emit('childByValue', {'isScGroup':false})
          }
        });
      },
      submitForm(formName) {
        console.log(this.ruleForm)
        this.$emit('childByValue', {'isScGroup':false,'childGroup':this.ruleForm})
        // this.$refs[formName].validate((valid) => {
        //   if (valid) {
        //     alert('submit!');
        //   } else {
        //     console.log('error submit!!');
        //     return false;
        //   }
        // });
      },

    },

    created() {
    },
    mounted(){

    },
  }
</script>

<style scoped>
  .register {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
    display: flex;
    justify-content: center;
  }

  .register .content {
    background: white;
    height: 95%;
    width: 690px;
    border-radius: 12px;
    padding: 5px;
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .register .content .scroll {
    flex: 1;
    width: 100%;
    /*height: 100%;*/
    padding: 19px 21px 45px 21px;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    box-sizing: border-box;
  }

  .register .content .head {
    position: relative;
    text-align: center;
    padding: 19px 20px 0;
    box-sizing: border-box;
  }

  .register .content .head span {
    line-height: 24px;
  }

  .register .content .head .el-icon-close {
    position: absolute;
    right: 20px;
    top: 19px;
    line-height: 24px;
  }
  /*表单之间的间距*/
  .registerFprm /deep/ .el-form-item {
    margin-bottom: 12px !important;
  }

</style>
