<template>
  <!-- alert 图片裁剪 -->
<div @click.stop>
  <div class="alert-box" v-show="dialogDesc">
    <div class="cont size12" :style="{'margin:10px auto 0':cropperMore}">
      <div class="title">{{$t('imgSpace.cropper-alert-title1')}}
        <span class="close" @click="back">
          <i class="el-icon-close"></i>
        </span>
      </div>
      <div class="info-box">
        <div class="size12 el-row is-align-middle el-row--flex marBott10 marTop10">
          <span class="size12 color47 marRight10">{{$t('imgSpace.cropper-size-txt')}}</span>
          <el-input
            :placeholder="$t('imgSpace.cropper-size-width-placehold')"
            v-model="imgWidth"
            @blur="changeWidth"
            size="small"
            style="width: 160px;box-sizing: border-box ;margin-right:10px;"
            clearable>
          </el-input>
          <i class="el-icon-close size16"></i>
          <el-input
            :placeholder="$t('imgSpace.cropper-size-height-placehold')"
            v-model="imgHeight"
            @blur="changeHeight"
            size="small"
            style="width: 160px;box-sizing: border-box ;margin-left:10px;"
            clearable>
          </el-input>
           <!-- <el-checkbox v-model="checkedAll" class="marLeft10">全部裁剪该尺寸</el-checkbox> -->
        </div>
        <div class="size12 marBott20 color47">注：可输入截图尺寸，或是选定任意图片截图操作。</div>
        <div class="cropper-box">
          <div class="cropper-do">
            <vue-cropper
              ref="cropper"
              :img="option.img"
              :outputSize="option.size"
              :outputType="option.outputType"
              :info="true"
              :original ="option.original"
              :full="option.full"
              :canMove="option.canMove"
              :canMoveBox="option.canMoveBox"
              :fixedBox="option.fixedBox"
              :canScale="option.canScale"
              :autoCrop="option.autoCrop"
              :autoCropWidth="option.autoCropWidth"
              :autoCropHeight="option.autoCropHeight"
              :fixed="option.fixed"
              @realTime="realTime"
              ></vue-cropper>
          </div>
        </div>
        <!-- 裁剪后展示 -->
        <div class="img-show marTop10" v-show="false">
          <div class="show-preview" :style="{'width': previews.w + 'px', 'height': previews.h + 'px',  'overflow': 'hidden', 'margin': '5px',zoom: 0.4}">
            <div :style="previews.div">
              <img :src="previews.url" :style="previews.img">
            </div>
          </div>
        </div>
        <!-- 全部图片列表 -->
        <div class="img-box" ref="imgBox">
            <ul class="ul-box marTop10" ref="ulBox" :style="{'left': imgBoxLeft + 'px'}">
              <li v-for="(item,index) in lists" :key="index" class="XYcenter pointer" :class="{'active':item.isChoice}" @click="changeImg(item,index)">
                <img :src="item.img" alt="">
              </li>
            </ul>
        </div>
        
        <div class="dialog-footer">
          <el-button type="primary" @click="onSubmit" size="small" >{{$t('button.save')}}</el-button>
          <el-button @click="back" size="small">{{$t('button.cancel')}}</el-button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import { VueCropper }  from "vue-cropper" 
export default {
  data() {
    return {
      dialogDesc : true,
      cropperMore: true, //是否是多图操作
      checkedAll: false,
      imgWidth: '',
      imgHeight: '',
			previews: {},
      lists: [
					{
						img: 'https://fengyuanchen.github.io/cropper/images/picture.jpg',
            isChoice: true,
					},
					{
						img: 'http://ofyaji162.bkt.clouddn.com/touxiang.jpg',
            isChoice: false,
					},
          {
						img: 'http://ofyaji162.bkt.clouddn.com/touxiang.jpg',
            isChoice: false,
					},
          {
						img: 'http://ofyaji162.bkt.clouddn.com/touxiang.jpg',
            isChoice: false,
					},
          {
						img: 'http://ofyaji162.bkt.clouddn.com/touxiang.jpg',
            isChoice: false,
					},
          {
						img: 'http://ofyaji162.bkt.clouddn.com/touxiang.jpg',
            isChoice: false,
					},
          {
						img: 'http://ofyaji162.bkt.clouddn.com/touxiang.jpg',
            isChoice: false,
					},
          {
						img: 'http://ofyaji162.bkt.clouddn.com/touxiang.jpg',
            isChoice: false,
					},
          {
						img: 'http://ofyaji162.bkt.clouddn.com/touxiang.jpg',
            isChoice: false,
					},
          {
						img: 'http://ofyaji162.bkt.clouddn.com/touxiang.jpg',
            isChoice: false,
					},
          {
						img: 'http://ofyaji162.bkt.clouddn.com/touxiang.jpg',
            isChoice: false,
					},
          {
						img: 'http://ofyaji162.bkt.clouddn.com/touxiang.jpg',
            isChoice: false,
					},
          {
						img: 'http://ofyaji162.bkt.clouddn.com/touxiang.jpg',
            isChoice: false,
					},

				],
      option: {
					img: require('../../../assets/goods.jpg'),
					size: 1,
					full: false,
					outputType: 'png',
					canMove: true,
					fixedBox: false,
					original: true,
					canMoveBox: true,
          canScale: true, //是否支持滚轮

          autoCrop: true,
					// 只有自动截图开启 宽度高度才生效
					autoCropWidth: 200,
					autoCropHeight: 200,
					// 开启宽度和高度比例
					// fixed: true,
					// fixedNumber: [4, 3]
				},
      imgBoxLeft: 0,
    }
  },
  mounted() {
    //this.$refs.cropper.startCrop()
    
  },
  methods :{
    back(){
      this.dialogDesc = false
    },
    changeWidth() {
      if(this.imgWidth){
        this.$refs.cropper.cropW = Number(this.imgWidth)
        console.log(this.$refs.cropper.cropW)
      }
    },
    changeHeight() {
      if(this.imgHeight){
        if( Number(this.imgHeight) > 400) {
          this.$message({
            type: 'warning',
            message: this.$t('message.超出最大高度，请重新输入')
          })
          this.imgHeight =''
          return 
        }
        this.$refs.cropper.cropH  = Number(this.imgHeight)
      }
    },
    // 实时预览函数
    realTime (data) {
      this.previews = data
    }, //多图切换裁剪
    changeImg (item,index) {
			this.option.img = item.img 
      for(let i= 0; i< this.lists.length; i++){
        if(this.lists[i].isChoice){
          this.lists[i].isChoice = false
          break 
        }
      }
      this.lists[index].isChoice = true
      console.log(this.lists)
      // let boxWidth =  this.$refs.imgBox.offsetWidth
      // let ulBoxWidth =  this.$refs.ulBox.offsetWidth
      // if(ulBoxWidth > boxWidth) {
      //   this.imgBoxLeft = -(index* 87)
      //   console.log(this.imgBoxLeft)
      // }
		},
    onSubmit() {

    }

  },
  components : {
    VueCropper,
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
    margin: 80px auto 0;
    width: 80%;
    max-width: 1000px;
    min-width: 800px;
    max-height:98%;
    background: #fff;
    z-index: 3;
    border-radius: 5px;
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
    padding-top: 40px;
  }

  .cropper-box {
    width:100%;
    height:400px;
    display:flex ;
  }
  .cropper-do {
    width:100%;
    height:400px;
  }
  .img-show{
    flex:1;
  }
  .img-box{
    width:100%;
    height:100px;;
    overflow: hidden;
    position:relative;
  }
  .ul-box {
    display: flex ;
    position:absolute;
    left:0;
    top:0;
  }
  .ul-box li {
    width:80px;
    height:80px;
    border-radius:2px;
    border:1px solid transparent;
    margin-right:5px;
  }
  .ul-box li.active {
    border:1px solid #2681FE;
  }
  .ul-box li:hover {
    border:1px solid #2681FE;
  }
  .ul-box li img {
    max-width: 80px;
    max-height:80px;
  }
</style>
