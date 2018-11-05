<template>
  <!-- alert 新建规格模板 -->
<div @click.stop>
  <div class="alert-box" v-show="dialogDesc" @click="back">
    <div class="cont size12" @click.stop>
      <div class="title">{{isEdit ? $t('spec.alert-title-edit'):$t('spec.alert-title-new')}}
        <span class="close" @click="back">
          <i class="el-icon-close"></i>
        </span>
      </div>
      <div class="info-box">
      <!-- 模板名称 -->
        <div class="item-box marBott20">
          <div class="tle must-write size14 marBott10">
            {{$t('description.alert-cont-name')}}
          </div>
          <div class="marLeft10">
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
        <div class="item-box marBott20">
          <div class="tle must-write size14 marBott10">
            {{$t('description.alert-cont-class')}}
          </div>
           <div class="marLeft10">
              <div class="add-class marBott10" v-for="(item, index) in addClassAry" :key="index">
                  <el-input
                    :placeholder="$t('description.alert-cont-class')"
                    v-model.trim="addClassAry[index]"
                    clearable
                    size="small"
                    style="width: 215px;height: 32px"
                    class="input">
                  </el-input>
                  <i class="el-icon-close size14 pointer close-class" @click="closeAddClass(index)"></i>
              </div>
              <div class="color26 pointer size12" @click="addClass">{{$t('description.alert-add-class')}}</div>
           </div>
        </div>
        <!-- 已有字段 -->
        <div class="item-box marBott20" v-show="isEdit">
          <div class="tle must-write size14 marBott10">
            {{$t('spec.alert-items-text')}}
          </div>
          <div class="marLeft10">
            <div class="has-class marBott10" v-for="(item, index) in hasClassAry" :key="index">
                <span class="text">{{item.itemName}}</span>
                <div class="edit-style">
                  <!-- 文本 -->
                  <el-input
                    v-if="item.itemStyle==='txt'"
                    v-model.trim="txtInput"
                    :placeholder="$t('spec.alert-style-cont-txt')"
                    clearable
                    size="small"
                    style="width: 215px;height: 32px"
                    class="input">
                  </el-input>
                  <!-- 时间 -->
                  <div v-if="item.itemStyle==='time'">
                      <el-time-picker
                        v-if="item.styleCont === 'time'"
                        v-model="time1"
                        :placeholder="$t('spec.alert-style-cont-time1')">
                      </el-time-picker>
                      <el-date-picker
                       v-else-if="item.styleCont === 'date'"
                       :picker-options="pickerOptions"
                        v-model="time2"
                        type="date"
                        :placeholder="$t('spec.alert-style-cont-time2')">
                      </el-date-picker>
                      <el-date-picker
                       v-else-if="item.styleCont === 'datetime'"
                       :picker-options="pickerOptions"
                        v-model="time3"
                        type="datetime"
                        :placeholder="$t('spec.alert-style-cont-time3')">
                      </el-date-picker>
                  </div>
                  <!-- 多选框 -->
                  <el-checkbox v-model="one.checked" disabled v-else-if="item.itemStyle==='checkbox'" v-for="one in item.styleCont" :key="one">{{one}}</el-checkbox>
                  <!-- 单选框 -->
                   <el-radio v-model="radio" label="2" disabled v-else-if="item.itemStyle==='radio'" v-for="two in item.styleCont" :key="two">{{two}}</el-radio>
                </div>
               
                <i class="el-icon-edit-outline size18 pointer color26 midle" @click="eidtOldeItem(item)"></i>
                <i class="el-icon-delete pointer size18 color26 midle" :title="$t('button.delete')" @click="delOldItem(index)"></i>
            </div>
          </div>
        </div>
         <div class="item-box marBott20">
          <div class="tle must-write size14 marBott10">
            {{$t('spec.alert-add-item')}}
          </div>
          <!-- 添加字段 -->
          <add-item ref="addItem" :itemData="itemData"></add-item>

           <div class="add-item-btn paddTop10">
              <el-button type="primary" @click="onAddItem" size="small" >{{$t('button.add')}}</el-button>
           </div>
          <div class="dottedLine" v-show="tableData.lenth>0"></div>
          <div class="table-box size12" v-show="tableData.lenth>0">
             <el-table
              :data="tableData"
              border
              size="small"
              header-row-class-name="size14"
              style="width: 100%">
                <el-table-column
                  prop="name"
                  :label="$t('spec.alert-add-item-name')"
                  show-overflow-tooltip>
                  <template slot-scope="scope">
                    {{scope.row.name}}
                  </template>
                </el-table-column>
                 <el-table-column
                  prop="style"
                  :label="$t('spec.alert-add-item-style')"
                  show-overflow-tooltip width="100px">
                  <template slot-scope="scope">
                    {{scope.row.style}}
                  </template>
                </el-table-column>
                <el-table-column
                  prop="remarke"
                  :label="$t('spec.alert-table-remark')"
                  show-overflow-tooltip>
                  <template slot-scope="scope">
                    {{scope.row.remarke}}
                  </template>
                </el-table-column>
                <el-table-column
                  prop="mustWrite"
                  :label="$t('spec.alert-add-item-info')"
                  show-overflow-tooltip width="120px">
                  <template slot-scope="scope">
                    {{scope.row.mustWrite}}
                  </template>
                </el-table-column>
                <el-table-column
                  prop="platform"
                  :label="$t('spec.alert-add-item-platform')"
                  show-overflow-tooltip>
                  <template slot-scope="scope">
                    {{scope.row.platform}}
                  </template>
                </el-table-column>

                <el-table-column  prop="id"  :label="$t('spec.alert-table-do')" width="60px" >
                  <template slot-scope="scope">
                    <i class="el-icon-delete pointer size18 edit-btn" :title="$t('button.delete')" @click="del(scope.row.index)"></i>
                  </template>
                </el-table-column>
            </el-table>
          </div>
          
         </div>
        </div>

        <div class="dialog-footer">
          <el-button type="primary" @click="onSubmit" size="small" >{{$t('button.save')}}</el-button>
          <el-button @click="back" size="small">{{$t('button.cancel')}}</el-button>
        </div>
      </div>
    </div>
     <alert-edit-item ref="alertEditItem" @addAlertTable="addAlertTable"></alert-edit-item>
  </div>
</template>

<script>
import { quillEditor } from 'vue-quill-editor'
import addItem from './addItem'
import alertEditItem from './alertEditItem'
 export default {
      name: "alertSpec" ,//规格模板弹窗
      data(){
          return {
            dialogDesc: false,
            name: '',
            isEdit: false ,
            addClassAry: [''],
            tableData:[],
            itemData: {
              itemName: '',
              itemStyle: '',
              isChecked: true,
              platform: {
                Amazon: '',
                eBay: '',
                Wish: '',
                Vova:'',
                SouQ:'',
                Cdiscount: ''
              },
            },
            hasClassAry:[],

          //没有数据。style-cont展示作用
            pickerOptions: {
              shortcuts: [{
                text: '今天',
                onClick(picker) {
                  picker.$emit('pick', new Date());
                }
              }, {
                text: '昨天',
                onClick(picker) {
                  const date = new Date();
                  date.setTime(date.getTime() - 3600 * 1000 * 24);
                  picker.$emit('pick', date);
                }
              }, {
                text: '一周前',
                onClick(picker) {
                  const date = new Date();
                  date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                  picker.$emit('pick', date);
                }
              }]
            },
            txtInput: '',
            time1: '',
            time2: '',
            time3: '',
            radio:'',
            
          }
      },
      methods: {
        openAlert(data){
          if(data){
            this.isEdit = true
            this.name = data.name
            this.hasClassAry = [{
              itemName: 'dd',
              itemStyle: 'txt',
              isChecked: true,
              platform: {
                Amazon: 'ss',
                eBay: 'cd',
                Wish: '',
                Vova:'ff',
                SouQ:'',
                Cdiscount: ''
              }  
            }]
            
          }
          this.dialogDesc = true

        },
        back(){
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

          if(this.isEdit){ //编辑状态时，要加上已有字段

          }

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
          
        }, //保存 添加字段
        onAddItem() {
          let item = this.$refs.addItem.getItemData()
          console.log(item)
          let platformStr = ''
          for(let key in item.platform){
            if(item.platform[key]){
              platformStr+= key+':'+ item.platform[key]+'; '
              item.platform[key] = ''
            } 
          }
            
          let styleText = '' 
          if(item.itemStyle === 'txt'){
            styleText = this.$t('spec.alert-add-item-text')
          }else if(item.itemStyle === 'time'){
            styleText = this.$t('spec.alert-add-item-time')
          }else if(item.itemStyle === 'checkbox') {
            styleText = this.$t('spec.alert-add-item-checkbox')
          }else if(item.itemStyle === 'radio') {
            styleText = this.$t('spec.alert-add-item-radio')
          }
          let data= {
            name : item.itemName,
            style: item.itemStyle,
            mustWrite:  item.isChecked? '是': '否',
            remarke: item.styleCont,
            platform: platformStr,
            index: this.tableData.length
          }
          this.tableData.push(data)
          this.itemData= {
              itemName: '',
              itemStyle: '',
              styleCont: '',
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
        },
        del(index) {
          let _this = this
          this.comfirmDel(function(){
            _this.tableData.splice(index,1)
          })
          
        },
        eidtOldeItem(data) {
          this.$refs.alertEditItem.openAlert(data)
        },
        delOldItem(index){
          let _this = this
          this.comfirmDel(function(){
            _this.addClassAry.splice(index ,1)
          })
        },
        addAlertTable(data){
          console.log(data)
        },
        comfirmDel(callback){
          this.$confirm(this.$t('message.spec_del_item_confim_cont'), this.$t('message.spec_del_item_confime_title'), {
            confirmButtonText: this.$t('button.confirm'),
            cancelButtonText: this.$t('button.cancel'),
            type: 'warning'
          }).then(() => {
            callback()
            this.$message({
              type: 'success',
              message: this.$t('message.spec_del_item_confime_success')
            });
          }).catch(() => {
                  
          });
        }
      },
      components: {
        quillEditor,
        addItem,
        alertEditItem
      }
    }
</script>

<style scoped>
  .alert-box {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .2);
    z-index: 2;
    text-align: left
  }

  .alert-box .cont {
    margin: 0px auto 0;
    width: 80%;
    max-width: 1040px;
    min-width: 800px;
    background: #fff;
    z-index: 3;
    border-radius: 5px;
    height:98%;
    display:flex;
    flex-direction:column ;
  }

  .alert-box .title {
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    font-weight:bold;
    position: relative;
    border-radius: 5px 5px 0 0;
    text-align: center;
  }

  .alert-box .close {
    position: absolute;
    right: 27px;
    top: 0px;
    font-size: 20px;
  }

  .alert-box .close:hover {
    cursor: pointer;
    color: #FD483F;
  }

  .info-box {
    flex:1 ;
    padding: 0px 20px;
    overflow-y: auto;
  }
  .dialog-footer {
    height:80px;
    text-align: center;
    height: 45px;
    text-align: center;
    padding-top: 15px;
  }
.has-class{
  padding-left:12px;
}
.edit-style {
  cursor:pointer;
  display:inline-block;
  vertical-align: middle;
  height:32px;
  line-height:32px;
}
.edit-style-txt{
  border:1px solid #bbb;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
}
.has-class .text{
  display:inline-block;
  vertical-align: middle;
  line-height:32px;
  text-align: right;
  padding-right:10px;
}
.midle {
    vertical-align: middle;
    margin-left: 5px;
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
.add-class:hover .close-class {
  display:inline-block
}

.platform-info {
  padding-left: 12px;
}
.add-item-btn {
  margin-left:12px;
}
.add-item-btn /deep/ .el-button--small {
  padding: 6px 12px;
}
.dottedLine{
  height: 1px;
  width: 100%;
  background: linear-gradient(90deg,#bbb,#bbb 8px,transparent 0,transparent);
  background-size: 16px 100%;
  margin-top: 15px
}
.table-box{
  margin-top:15px;
  text-align: center;
}
.table-box /deep/ .el-table th{
  text-align: center;
}
</style>
