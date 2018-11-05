<template>
  <div class="file pointer" :class="isChecked ? 'file-active': 'file-no-choice'" @click="doSomething(file)">
    <div class="file-img XYcenter">
      <img src="../../../assets/server/folder.png" v-if="file.type==='folder'">
      <img src="../../../assets/server/bg-zip.png" v-else-if="file.url.indexOf('.zip')!== -1 || file.url.indexOf('.rar')!== -1" >
      <img src="../../../assets/server/bg-txt.png" v-else-if="file.url.indexOf('.txt')!== -1" >
      <img src="../../../assets/server/bg-word.png" v-else-if="file.url.indexOf('.doc')!== -1 ||file.url.indexOf('.docx')!== -1 " >
      <img src="../../../assets/server/bg-pdf.png" v-else-if="file.url.indexOf('.pdf')!== -1" >
      <img src="../../../assets/server/bg-video.png" v-else-if="file.url.indexOf('.mp4')!== -1" >
      <img :src="imgBolbUrl" v-else-if="file.url.indexOf('.png')!== -1 || file.url.indexOf('.jpg')!== -1 || file.url.indexOf('.jpeg')!== -1">
      <img src="../../../assets/server/bg-file.png" v-else>
    </div>
    <div class="file-name" :title="fileName" v-if="!isEdit" @dblclick="editName">
      <div class="name-text oneLine">{{fileName}}</div><i class="el-icon-edit size16 color33 edit-name pointer" :title="$t('imgSpace.file-item-edit')" @click="editName" v-if="isCanEidt"></i>
    </div>
    <input ref="inputName" type="text" class="file-name-input" v-model="fileName" v-else v-click-outside="inputClose" />
    <div class="file-size" v-if="file.type !=='folder'">{{$t('imgSpace.file-item-size')+spaceFormat(file.size)}}</div>
    <i class="checkbox-icon el-icon-circle-check size20 " @click="choiceFile(num)" v-show="isCanEidt"></i>
  </div>
</template>
<script>
export default {
  props:['file','num',"isChecked"],
  data() {
    return {
      imgBolbUrl: '',
      fileName: this.file.name,
      isEdit: false,
      isCanEidt: true,
      isNewFolder: false,
    }
  },
  created() {
    if(!this.file.isCanEdit){
      this.isCanEidt = false
    }
   
  },
  methods : {
    doSomething() {
      if(this.isEdit){
        return
      }
      if(this.file.type==='folder'){
        this.openNextFolder(this.file.id)
        return
      } 
      if(this.file.url.indexOf('.png')!== -1 || this.file.url.indexOf('.jpg')!== -1 || this.file.url.indexOf('.jpeg')!== -1){
        this.openBigImg(this.file.url)
      }else{
        this.filedoweload(this.file.url)
      }
    },
    downLoadImg(url){
      if(url && url !==''){
        if(url.indexOf('.png')!== -1 || url.indexOf('.jpg')!== -1 || url.indexOf('.jpeg')!== -1){
          // DownLoadImg('/Admin/'+url).then( (res)=> {
          //   let bolb = window.URL.createObjectURL(res)
          //   this.imgBolbUrl = bolb
          // })
        }
      }
    },
    openBigImg(url){

    },
    openNextFolder(folderId) { //打开文件夹

    },
    choiceFile(index){ //选中时
      this.$emit('choiceFile',index)
    },
    filedoweload(url) { //点击文件下载
      let flieNameAry = url.split('.')
      let fileType ='.'+ flieNameAry[flieNameAry.length-1]
      console.log(fileType)
      // DownLoadImg('/Admin/'+url).then( (res)=> {
      //     let bolb = window.URL.createObjectURL(res)
      //     this.utils.imgDowload(bolb, fileName+fileType)
      // })
    },
    editName() {
      if(!this.isCanEidt){
        return
      }
      let _this=this
      this.isEdit=true
      this.$nextTick(() => {
       this.$refs.inputName.focus();
      })
      
    },
    inputClose() { //输入框关闭
      this.isEdit = false
      console.log('修改后的文件名是：'+this.fileName)
      if(!this.fileName){
        this.$message({
          type: 'error',
          message: this.$t('message.server_img_no_name')
        })
        this.editName()
        return false
      }
      if(this.file.id == "00000"){ //新建文件夹提示
        this.$message({
          type: 'success',
          message: this.$t('message.server_img_new_floder')
        });
        return false
      }
      if(this.fileName !== this.file.name){ //修改文件夹名称提示
        this.$message({
          type: 'success',
          message: this.$t('message.server_img_change_name')
        });
      }
      
    },
    spaceFormat(limit) { //空间大小格式转化
      var size = "";
      if (limit < 0.1 * 1024) { //如果小于0.1KB转化成B  
        size = limit.toFixed(2) + "B";
      } else if (limit < 0.1 * 1024 * 1024) {//如果小于0.1MB转化成KB  
        size = (limit / 1024).toFixed(2) + "KB";
      } else if (limit < 0.1 * 1024 * 1024 * 1024) { //如果小于0.1GB转化成MB  
        size = (limit / (1024 * 1024)).toFixed(2) + "MB";
      } else { //其他转化成GB  
        size = (limit / (1024 * 1024 * 1024)).toFixed(2) + "GB";
      }
      var sizestr = size + "";
      var len = sizestr.indexOf("\.");
      var dec = sizestr.substr(len + 1, 2);
      if (dec == "00") {//当小数点后为00时 去掉小数部分  
        return sizestr.substring(0, len) + sizestr.substr(len + 3, 2);
      }
      return sizestr;
    },
  },
  watch : {
    file:{//深度监听
          handler(val, oldVal){
            this.fileName = val.name 
            if(val.id == "00000"){ //新建文件夹触发
              this.editName()
            }
          },
          deep:true
        }
  }

}
</script>
<style scoped>
  .file {
    width: 120px;
    height: 127px;
    margin: 4px 0 0 6px;
    text-align: center;
    border: 1px solid #fff;
    position: relative;
  }
  .file-active {
    background-color: #f1f5fa;
    border: 1px solid #90c3fd;
    border-radius: 5px;
  }
  .file .file-img {
    position: relative;
    margin: 9px auto 0;
    width: 84px;
    height: 84px;
    overflow: hidden;
  }
  .file .file-img img{
    max-width: 100%;
    max-height:100%;
  }
  .file .checkbox-icon {
    position: absolute;
    top: 5px;
    left: 5px;
    cursor: pointer;
    color: #f1f5fa;
    display:none;
  }
  .file-no-choice:hover {
    background-color: #f1f5fa;
    border: 1px solid #f1f5fa;
    border-radius: 5px;
  }
  .file-no-choice:hover .checkbox-icon {
    display:block;
    color: #90c3fd;
  }
  .file-no-choice .checkbox-icon:hover {
    color:#80b8f8
  }
  .file-active .checkbox-icon {
    display:block;
    color: #2681FE;
  }
  .file-name{
    display:flex ;
    text-align: center;
    padding: 0 5px;
  }
  .file-name .name-text {
    width:100%;
    text-align: center;
  }
  .file-name .edit-name {
    display:none;
  }
  .file-no-choice .file-name:hover .edit-name {
     display:block;
  }
  .file-no-choice .file-name .edit-name:hover {
    color:#2681FE;
  }
  .file-name-input {
    font-size:12px;
    width: 110px;
    padding-right:5px;
    padding-left:5px;
    height:18px;
    line-height:18px;
    border:1px solid #2681FE;
    border-radius:2px;
  }
  .file-name-input:focus {
    box-shadow: 0 0 2px 0 #2681FE;
  }
</style>


