<template>
  <div class="box size12">
    <breadcurmb :pathList="pathList"></breadcurmb>
    <div class="search-box size12 marTop10 marBott10 el-row is-align-middle el-row--flex">
      <div class="searchKeyword cf">
        <span class="size12 color47">{{$t('spec.search-keyword')}}</span>
        <el-input
          :placeholder="$t('imgSpace.keyword-placehold')"
          v-model="keyWord"
          size="small"
          style="width: 210px;box-sizing: border-box ;margin-right:15px;"
          clearable>
        </el-input>
        <span class="size12 color47">{{$t('imgSpace.search-time')}}</span>
        <el-date-picker
        size="small"
        v-model="time1"
        align="right"
        type="date"
        width
        placeholder="选择日期"
        :picker-options="pickerOptions1">
        </el-date-picker> —
        <el-date-picker
        size="small"
        v-model="time2"
        align="right"
        type="date"
        placeholder="选择日期"
        :picker-options="pickerOptions1">
        </el-date-picker>

        <el-button type="primary" native-type="button" size="small" class="butt_search_W size12 colorF" @click="searchMore()">{{$t('button.search')}}</el-button>
      </div>
    </div>
    <!-- 按钮层 -->
    <div class="size12 marTop10 marBott10 el-row is-align-middle el-row--flex">
      <el-button type="primary" native-type="button" size="small" class="butt_search_W colorF size12" @click="openUploadFn">
                  {{$t('button.upload')}}
                </el-button>
      <el-button type="primary" native-type="button" size="small" class="colorF size12" @click="newFolderFn">
        {{$t('imgSpace.new-folder')}}
      </el-button>
      <el-button type="primary" native-type="button" size="small" class="butt_search_W colorF size12" @click="delFileFn">
        {{$t('button.delete')}}
      </el-button>
        <!-- 编辑时触发的按钮显示 -->
      <el-button type="primary" native-type="button" size="small" class="butt_search_W colorF size12" @click="moveTo" v-show="isEdit">
      {{$t('imgSpace.move-to')}}
      </el-button>

      <div class="space-show marRight10">
        <div class="column-box">
          <div class="column back26"  :style="{'width': ((useSpace/allSpace)*100 +'%')}"></div>
        </div>
        <div class="info">
          {{$t('imgSpace.bracket-left')+$t('imgSpace.use-space')+ spaceFormat(useSpace) + $t('imgSpace.remainder-space')+ spaceFormat((Number(allSpace)-Number(useSpace))) + $t('imgSpace.barcket-right')}}
        </div>
      </div>
      <el-button type="primary" native-type="button" size="small" class="butt_search_W colorF size12" @click="addspaceFn">
        {{$t('imgSpace.add-space')}}
      </el-button>
    </div>
    <!-- 加载 -->
    <div class="paddBott10 checked-all el-row--flex">
      <el-checkbox v-model="checkedAll" @change="checkedAllFn">{{$t('imgSpace.checkbox-all-txt1')+checkedLen+ $t('imgSpace.checkbox-all-txt2')}}</el-checkbox>
      <div class="upload-num">
        <div v-if="!isUploading">{{$t('imgSpace.upload-num-txt1')+ allfile.length+ $t('imgSpace.upload-num-txt2') }}</div>
        <div v-else><i class="el-icon-loading size16 uploading"></i>{{$t('imgSpace.upload-more')}}</div>
      </div>
    </div>
    <div class="el-row--flex" style="flex-wrap:wrap">
      <file-box v-for="(file,index) in allfile" :key="index" :file="file" :num="index" @choiceFile="choiceFile" :isChecked="checkBoxAry[index]"></file-box>
    </div>
    <move-to ref="moveTo"></move-to>
    <img-cropper ref="imgCropper"></img-cropper>
  </div>
</template>
<script>
import Breadcurmb from '../../commonModule/breadcrumb'
import fileBox from './fileBox'
import moveTo from './moveTo'
import imgCropper from './img-cropper'
export default {
  data() {
    return {
      pathList:[{"title":this.$t('imgSpace.title-parent'),"path":""},{"title":this.$t('imgSpace.title-next'),"path":"/imgSpace"}],
      keyWord: '',
      time1: '',
      time2:'',
      pickerOptions1: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
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
      useSpace: 1024* 1024*800,
      allSpace: 1024*1024*1024,
      parentId: 0,
      allfile: [{
        id: 1,
        parentId:0,
        name:'上传图片',
        type: 'folder',
        size: '',
        url: '',
        isCanEdit:false,
      },{
        id: 2,
        parentId:0,
        name:'上传视频',
        type: 'folder',
        size: '',
        url: '',
        isCanEdit:false,
      },
      {
        id: 3,
        parentId:0,
        name:'采集图片',
        type: 'folder',
        size: '',
        url: '',
        isCanEdit:false,
      },{
        id: 4,
        parentId:0,
        name:'采集视频',
        type: 'folder',
        size: '',
        url: '',
        isCanEdit:false,
      },
      {
        id: 5,
        parentId:0,
        name:'美女与野兽',
        type: 'unfolder',
        size: '180000',
        url: '',
        isCanEdit:true,
      },
      {
        id: 6,
        parentId:0,
        name:'压缩包',
        type: 'unfolder',
        size: '203000',
        url: 'aa.zip',
        isCanEdit:true,
      },
      {
        id: 7,
        parentId:0,
        name:'pdf文件',
        type: 'unfolder',
        size: '203000',
        url: 'aa.pdf',
        isCanEdit:true,
      },
      {
        id: 8,
        parentId:0,
        name:'txt文件',
        type: 'unfolder',
        size: '203000',
        url: 'aa.txt',
        isCanEdit:true,
      },
      {
        id: 9,
        parentId:0,
        name:'word文件',
        type: 'unfolder',
        size: '203000',
        url: 'aa.docx',
        isCanEdit:true,
      }],
      checkBoxAry: [],
      checkedAll: false,
      checkedLen: 0,
      isUploading: false,
      isEdit: false,
    }
  },
  created() {
    for(let i = 0; i<this.allfile.length ;i++){
      this.checkBoxAry.push(false)
    }
  },
  methods: {
    spaceFormat(limit) { //空间大小格式转化
      var size = "";  
      if( limit < 0.1 * 1024 ){ //如果小于0.1KB转化成B  
          size = limit.toFixed(2) + "B";    
      }else if(limit < 0.1 * 1024 * 1024 ){//如果小于0.1MB转化成KB  
          size = (limit / 1024).toFixed(2) + "KB";              
      }else if(limit < 0.1 * 1024 * 1024 * 1024){ //如果小于0.1GB转化成MB  
          size = (limit / (1024 * 1024)).toFixed(2) + "MB";  
      }else{ //其他转化成GB  
          size = (limit / (1024 * 1024 * 1024)).toFixed(2) + "GB";  
      }  
      var sizestr = size + "";   
      var len = sizestr.indexOf("\.");  
      var dec = sizestr.substr(len + 1, 2);  
      if(dec == "00"){//当小数点后为00时 去掉小数部分  
          return sizestr.substring(0,len) + sizestr.substr(len + 3,2);  
      }  
      return sizestr;  
    },
    openUploadFn() { //上传文件

    },
    newFolderFn() { //新建文件夹
      let data = {
        id :"00000",
        parentId:0,
        name:'新建文件夹',
        type: 'folder',
        size: '',
        url: '',
        isCanEdit:true,
      }
      this.allfile.splice(4,0,data)
      this.checkBoxAry.splice(4,0,false)
      console.log(this.allfile)
    },
    delFileFn() { //删除
      let fileIdAry =[]
      let newcheckBoxAry = this.checkBoxAry
      newcheckBoxAry.forEach( (item,index) => {
        if(item) {
          fileIdAry.push(this.allfile[index].id)
          this.checkBoxAry.splice(index,1)
          this.allfile.splice(index,1)
        }
      })
      if(fileIdAry.length === 0){
        this.$message({
          type: 'warning',
          message: this.$t('message.server_img_choice_file')
        })
      }else {
        this.isEdit = false //把选中时会显示的按钮隐藏
      }
      console.log(fileIdAry)
      
    },
    moveTo() {
      this.$refs.moveTo.openAlert()
    },
    addspaceFn() { //点击请求购买空间大小

    },
    choiceFile(index) { //操作选中的文件
      let isChecked = !this.checkBoxAry[index]
      if(isChecked){
        this.checkedLen++
      }else{
         this.checkedLen--
      }
      if(this.checkedLen > 0){
        this.isEdit = true
      }else {
        this.isEdit = false
      }
     this.checkBoxAry.splice(index, 1 ,isChecked);
     let trueNum = JSON.stringify(this.checkBoxAry).substring(24).indexOf('false')
     if(trueNum === -1){
        this.checkedAll = true
     }else{
       this.checkedAll = false
     }
     
    },
    checkedAllFn() { //全选
      this.checkedLen = 0
      this.allfile.forEach((item,index) => {
        if(!item.isCanEdit){
          return false
        }
        if(this.checkedAll){
          if(!this.checkBoxAry[index]){
            this.checkBoxAry.splice(index, 1 ,true);
          }
           this.checkedLen++
        }else {
          if(this.checkBoxAry[index]){
           this.checkBoxAry.splice(index, 1 ,false);
         }
        }
      })
    }

  },
  components: {
    Breadcurmb,
    fileBox,
    moveTo,
    imgCropper
  }
}
</script>
<style scoped>
  .space-show {
    width: 220px;
    margin-left:auto;

  }
  .space-show .column-box {
    height:12px;
    border-radius:6px;
    background: #dfdfdf;
  }
  .space-show .column {
    height:100%;
    border-radius:6px;
    background: -webkit-linear-gradient(left,#0076BE,#2681FE);
    background: -moz-linear-gradient(left,#0076BE,#2681FE);
    background: -o-linear-gradient(left,#0076BE,#2681FE);
    background: -ms-linear-gradient(left,#0076BE,#2681FE);
    background: linear-gradient(left,#0076BE,#2681FE);
    box-shadow: inset 0 -2px 2px rgba(0, 0, 0, 0.2);
    animation: loader 0.8s linear;
  }
  @keyframes loader {
        0% {
            width: 0%;
        }
    }
  .space-show .info {
    text-align: center;
    margin-top: 3px;
  }
  .upload-num {
    margin-left:auto;
    line-height:20px;
  }
  .uploading {
    margin-right:5px;
    vertical-align: middle;
  }
  .checked-all {
    border-bottom:1px solid #f2f6fd
  }
  
</style>
