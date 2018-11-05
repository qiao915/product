<template>
  <!-- alert 新建描述模板 -->
  <div @click.stop>
    <el-dialog :title="isEdit ? $t('description.alert-title-edit'):$t('description.alert-title-new')" :visible.sync="dialogDesc" :modal-append-to-body="false" :width="'600px'" :top="'18vh'">
      <!-- 模板名称 -->
        <div class="input-box">
          <div class="text must-write">{{$t('description.alert-cont-name')}}</div>
          <div class="input">
            <el-input
              :placeholder="$t('description.alert-cont-name')"
              v-model.trim="name"
              clearable
              size="small"
              style="width: 215px;height: 32px"
              class="input">
            </el-input>
          </div>
        </div>
        <!-- 关联品类 -->
        <div class="input-box margin-top20">
          <div class="text">{{$t('description.alert-cont-class')}}</div>
          <div class="input">
            <div class="add-class marBott15" v-for="(item, index) in addClassAry" :key="index">
              <el-input
                :placeholder="$t('description.alert-cont-name')"
                v-model.trim="addClassAry[index]"
                clearable
                size="small"
                style="width: 215px;height: 32px"
                class="input">
              </el-input>
              <i class="el-icon-close size14 pointer close-class" @click="closeAddClass(index)"></i>
            </div>
            <div class="color26 pointer" @click="addClass">{{$t('description.alert-add-class')}}</div>
          </div>
        </div>
        <!-- 模板内容 -->
        <div class="input-box margin-top20">
          <div class="text must-write">{{$t('description.alert-cont-cont')}}</div>
          <div class="input">
            <quill-editor v-model="content" :options="editorOption" ref="myQuillEditor"></quill-editor>  
          </div>
        </div>

        
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogDesc = false" size="small">{{$t('button.cancel')}}</el-button>
          <el-button type="primary" @click="onSubmit" size="small" >{{$t('button.submit')}}</el-button>
        </div>
    </el-dialog>
  </div>
</template>

<script>
import { quillEditor } from 'vue-quill-editor'
 export default {
      name: "alertDescription" ,//描述模板弹窗
      data(){
          return {
            dialogDesc: false,
            name: '',
            isEdit: false ,
            addClassAry: [''],
            content:'',
            editorOption: {
              modules:{
                toolbar:[
                  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
                    ['blockquote', 'code-block'],

                    [{'header':1},{'header':2}], // custom button values
                    [{'list': 'ordered'},{'list':'bullet'}], //列表
                    //[{'script':'sub'},{'script':'super'}], // 上标、下标 superscript/subscript
                    [{'indent':'-1'},{'indent':'+1'}], //outdent/indent 缩进
                    [{'direction':'rtl'}], //text direction 文本方向

                    //[{'size':['small',false,'large','huge']}], //custom dropdown
                    [{'header':[1,2,3,4,5,6,false]}],

                    [{'color':[]},{'background':[]}], //dropdown width defaults from theme
                    //[{'font': []}],
                    [{'align':[]}],

                    ['clean'] //remove formatting button
                ]
              }
            }
          }
      },
      methods: {
        openAlert(data){
          if(data){
            this.isEdit = true
            this.name = data.name
            this.content = data.content
            //富文本编辑器
            this.$nextTick(function() {
              this.$refs.myQuillEditor.quill.blur();
            });
          }
          this.dialogDesc = true
        },
        closeAlert(){
          this.dialogDesc = false
          this.$emit('vatDeclareFilesList')
        },
        onSubmit(){
          console.log(this.addClassAry)
          let newAddClassAry =[]
          //过滤空值的
          this.addClassAry.forEach( item => {
            if(item){
              newAddClassAry.push(item)
            }
          })
          console.log(newAddClassAry)

        },//增加关联品类
        addClass() {
          let len = this.addClassAry.length 
          this.addClassAry.splice(len ,0 ,'')
        }, //删除关联品类
        closeAddClass(index) {
          if(index!== 0){
            this.addClassAry.splice(index ,1)
          }else{
            this.addClassAry.splice(0 ,1,'')
          }
          
        }
      },
      components: {
        quillEditor
      }
    }
</script>

<style scoped>
.input-box {
  display:flex;
  width:100%;
  font-size:12px;
}
.input-box .text{
  width:85px;
  line-height:32px;
  text-align: right;
  padding-right:15px;
}
.input-box .input{
  flex: 1
}
.btn-box{
  padding:0 15px 20px;
}
/* 必填项的星号 */
.must-write::before {
    content: ' * ';
    color: #FD483F;
    font-size: 100%;
}
.margin-top20 {
  margin-top:20px;
}
.close-class {
  margin-left:5px;
  color:#999;
  display:none;
}
.add-class:hover .close-class{
  display:inline-block
}

</style>
