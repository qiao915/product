<!--
  新建产品页面
	Created by 吴乔 on 2018/10/23.
-->
<template>
  <div class="newProduct">
    <div class="head moduleHead">
      <div class="left">
        <breadcrumb :pathList="breadcrumbList"></breadcrumb> <!--面包屑组件，参数参数视下面breadcrumbList-->
        <select-platform @select="platformCode"></select-platform><!--电商平台选择组件，需要绑定方法获取选中平台后的标识-->
      </div>
      <tool-kit></tool-kit>
    </div>

    <div class="yy">
      <el-button type="primary" size="mini" @click="quoteExitingProductShow = !quoteExitingProductShow">
        {{$t('editProduct.quote-exiting-product')}}
      </el-button>
    </div>
    <div class="language">
      <div>
        <el-button type="primary" disabled size="mini">简体中文</el-button>
        <el-button type="primary" style="margin-left: 0;" size="mini">English</el-button>
        <i class="el-icon-plus color26 fontB pointer"></i>
        <i class="el-icon-question size14 pointer" @click.stop="nounsNum = 1"
           :title="$t('editProduct.translate-title')"></i>
      </div>
      <div class="size12 color33">
        {{$t('editProduct.translate-error')}}
        <span class="size12 color26 pointer">{{$t('editProduct.human-translate')}}</span>
      </div>
    </div>

    <div class="main">
      <div class="content">
        <!-- todo 图片上传-->
        <ul class="imgBox">
          <!-- todo 示例上传框 start-->
          <li>
            <div class="massage">
              <i class="el-icon-plus color66 size38 fontB"></i>
              <span class="color33 size12">添加产品图片/视频</span>
              <span class="colorBB size12">支持点击或拖拽上传</span>
            </div>
            <input type="file"/>
          </li>
          <li>
            <div class="massage">
              <i class="el-icon-plus color66 size38 fontB"></i>
              <span class="color33 size12">添加产品图片/视频</span>
              <span class="colorBB size12">支持点击或拖拽上传</span>
            </div>
            <input type="file"/>
          </li>
          <li>
            <div class="massage">
              <i class="el-icon-plus color66 size38 fontB"></i>
              <span class="color33 size12">添加产品图片/视频</span>
              <span class="colorBB size12">支持点击或拖拽上传</span>
            </div>
            <input type="file"/>
          </li>
          <li>
            <div class="massage">
              <i class="el-icon-plus color66 size38 fontB"></i>
              <span class="color33 size12">添加产品图片/视频</span>
              <span class="colorBB size12">支持点击或拖拽上传</span>
            </div>
            <input type="file"/>
          </li>
          <li>
            <div class="massage">
              <i class="el-icon-plus color66 size38 fontB"></i>
              <span class="color33 size12">添加产品图片/视频</span>
              <span class="colorBB size12">支持点击或拖拽上传</span>
            </div>
            <input type="file"/>
          </li>
          <li>
            <div class="massage">
              <i class="el-icon-plus color66 size38 fontB"></i>
              <span class="color33 size12">添加产品图片/视频</span>
              <span class="colorBB size12">支持点击或拖拽上传</span>
            </div>
            <input type="file"/>
          </li>
          <!-- todo 示例上传框 end-->
        </ul>

        <!-- todo 产品基本信息-->
        <div class="productData">

          <!--标题-->
          <div class="elInput size12 color33 martop15">
            <div class="left" style="line-height: 32px"><em class="colorR">* </em>{{$t('editProduct.produce-name')}}</div>
            <div class="right">
              <el-input
                size="small"
                :placeholder="$t('editProduct.produce-name')"
                clearable>
              </el-input>
            </div>
          </div>

          <!--UPC/EAN-->
          <div class="elInput size12 color33 martop15">
            <div class="left" style="line-height: 32px">UPC/EAN <i class="el-icon-question size14 pointer"
                                                                   @click.stop="nounsNum = 2"
                                                                   :title="$t('editProduct.produce-UPC-EAN-title')"></i></div>
            <div class="right">
              <el-input
                size="small"
                placeholder="UPC/EAN"
                clearable>
              </el-input>
            </div>
          </div>

          <!--产品SKU-->
          <div class="elInput size12 color33 martop15">
            <div class="left" style="line-height: 32px">{{$t('editProduct.produce-SKU')}} <i class="el-icon-question size14 pointer"
                                                                 @click.stop="nounsNum = 3"
                                                                 :title="$t('editProduct.produce-SKU-title')"></i></div>
            <div class="right">
              <el-input
                size="small"
                :placeholder="$t('editProduct.produce-SKU')"
                clearable>
              </el-input>
              <i class="el-icon-setting color26 size20 pointer setSku" :title="$t('editProduct.produce-setSKU-title')"
                 @click="setSKUShow = true"></i>
            </div>
          </div>

          <!--产品类型-->
          <div class="elInput size12 color33 martop15">
            <div class="left">{{$t('editProduct.produce-type')}}</div>
            <div class="right">
              <el-radio-group v-model="radio2">
                <el-radio class="width90" label="3">{{$t('editProduct.produce-type-bz')}}</el-radio>
                <el-radio class="width90" label="6">{{$t('editProduct.produce-type-zh')}}</el-radio>
                <el-radio class="width90" label="9">{{$t('editProduct.produce-type-xn')}}</el-radio>
              </el-radio-group>
            </div>
          </div>

          <!--产品状况-->
          <div class="elInput size12 color33 martop15">
            <div class="left">{{$t('editProduct.produce-status')}}</div>
            <div class="right">
              <el-radio-group v-model="radio3">
                <el-radio class="width90" label="3">{{$t('editProduct.produce-status-new')}}</el-radio>
                <el-radio class="width90" label="6">{{$t('editProduct.produce-status-two')}}</el-radio>
                <el-radio class="width90" label="9">{{$t('editProduct.produce-status-fx')}}</el-radio>
              </el-radio-group>
            </div>
          </div>

        </div>

        <!-- todo 分类 -->
        <div class="productData">
          <div class="elInput size12 color33 martop15">
            <div class="left" style="line-height: 32px"><em class="colorR">* </em>{{$t('editProduct.produce-class')}} <i @click.stop="nounsNum = 5"
                                                                                        class="el-icon-question size14 pointer"
                                                                                        :title="$t('editProduct.produce-class-title')"></i></div>
            <div class="right" style="display: flex;flex-direction: column">
              <el-cascader
                v-for="(item,index) in arr"
                :key="index"
                class="marBott10"
                expand-trigger="hover"
                style="width: 500px;"
                size="small"
                :options="options"
                v-model="selectedOptions2[index]"
                @change="handleChange">
              </el-cascader>
            </div>
          </div>
          <p class="textCenter" style="width: 435px"><span class="size12 color26 pointer" :title="$t('editProduct.produce-add-class')"
                                                           @click="arr.push('1')">{{$t('editProduct.produce-add-class')}}</span></p>
        </div>

        <!-- todo 描述 -->
        <div class="productData">

          <!--Key Words-->
          <div class="elInput size12 color33 martop15">
            <div class="left" style="line-height: 32px">Key Words</div>
            <div class="right">
              <el-input
                size="small"
                :placeholder="$t('editProduct.produce-input-placeholder')"
                clearable>
              </el-input>
            </div>
          </div>
          <!--Key Words-->
          <div class="elInput size12 color33 martop5">
            <div class="left" style="line-height: 32px"></div>
            <div class="keyWordsright">
              <ul class="keyWords">
                <li class="backF7 color33 size12">Key words 1 <i class="el-icon-close pointer" :title="$t('editProduct.key-words-click-del')"></i></li>
                <li class="backF7 color33 size12">Key words 2 <i class="el-icon-close pointer" :title="$t('editProduct.key-words-click-del')"></i></li>
                <li class="backF7 color33 size12">Key words 3 <i class="el-icon-close pointer" :title="$t('editProduct.key-words-click-del')"></i></li>
                <li class="backF7 color33 size12">Key words 4 <i class="el-icon-close pointer" :title="$t('editProduct.key-words-click-del')"></i></li>
                <li class="backF7 color33 size12">Key words 5 <i class="el-icon-close pointer" :title="$t('editProduct.key-words-click-del')"></i></li>
                <li class="backF7 color33 size12">Key words 6 <i class="el-icon-close pointer" :title="$t('editProduct.key-words-click-del')"></i></li>
                <li class="backF7 color33 size12">Key words 7 <i class="el-icon-close pointer" :title="$t('editProduct.key-words-click-del')"></i></li>
                <li class="backF7 color33 size12">Key words 8 <i class="el-icon-close pointer" :title="$t('editProduct.key-words-click-del')"></i></li>
                <li class="backF7 color33 size12">Key words 9 <i class="el-icon-close pointer" :title="$t('editProduct.key-words-click-del')"></i></li>
              </ul>
            </div>
          </div>


          <!--Tags-->
          <div class="elInput size12 color33 martop15">
            <div class="left" style="line-height: 32px">Tags</div>
            <div class="right">
              <el-input
                size="small"
                :placeholder="$t('editProduct.produce-input-placeholder')"
                clearable>
              </el-input>
            </div>
          </div>
          <!--Tags-->
          <div class="elInput size12 color33 martop5">
            <div class="left" style="line-height: 32px"></div>
            <div class="keyWordsright">
              <ul class="keyWords">
                <li class="backF7 color33 size12">Tags 1 <i class="el-icon-close pointer" :title="$t('editProduct.key-words-click-del')"></i></li>
                <li class="backF7 color33 size12">Tags 2 <i class="el-icon-close pointer" :title="$t('editProduct.key-words-click-del')"></i></li>
                <li class="backF7 color33 size12">Tags 3 <i class="el-icon-close pointer" :title="$t('editProduct.key-words-click-del')"></i></li>
                <li class="backF7 color33 size12">Tags 4 <i class="el-icon-close pointer" :title="$t('editProduct.key-words-click-del')"></i></li>
                <li class="backF7 color33 size12">Tags 5 <i class="el-icon-close pointer" :title="$t('editProduct.key-words-click-del')"></i></li>
                <li class="backF7 color33 size12">Tags 6 <i class="el-icon-close pointer" :title="$t('editProduct.key-words-click-del')"></i></li>
                <li class="backF7 color33 size12">Tags 7 <i class="el-icon-close pointer" :title="$t('editProduct.key-words-click-del')"></i></li>
                <li class="backF7 color33 size12">Tags 8 <i class="el-icon-close pointer" :title="$t('editProduct.key-words-click-del')"></i></li>
                <li class="backF7 color33 size12">Tags 9 <i class="el-icon-close pointer" :title="$t('editProduct.key-words-click-del')"></i></li>
              </ul>
            </div>
          </div>

          <!--简要描述-->
          <div class="elInput size12 color33 martop15">
            <div class="left" style="line-height: 32px">{{$t('editProduct.brief-describe')}}</div>
            <div class="right">
              <el-input
                size="small"
                :placeholder="$t('editProduct.produce-input-placeholder')"
                clearable>
              </el-input>
            </div>
          </div>
          <!--简要描述-->
          <div class="elInput size12 color33 martop5">
            <div class="left" style="line-height: 32px"></div>
            <div class="keyWordsright">
              <ul class="keyWords">
                <li class="backF7 color33 size12">jianyaomiaoshu 1 <i class="el-icon-close pointer" :title="$t('editProduct.key-words-click-del')"></i>
                </li>
                <li class="backF7 color33 size12">jianyaomiaoshu 2 <i class="el-icon-close pointer" :title="$t('editProduct.key-words-click-del')"></i>
                </li>
                <li class="backF7 color33 size12">jianyaomiaoshu 3 <i class="el-icon-close pointer" :title="$t('editProduct.key-words-click-del')"></i>
                </li>
                <li class="backF7 color33 size12">jianyaomiaoshu 4 <i class="el-icon-close pointer" :title="$t('editProduct.key-words-click-del')"></i>
                </li>
                <li class="backF7 color33 size12">jianyaomiaoshu 5 <i class="el-icon-close pointer" :title="$t('editProduct.key-words-click-del')"></i>
                </li>
                <li class="backF7 color33 size12">jianyaomiaoshu 6 <i class="el-icon-close pointer" :title="$t('editProduct.key-words-click-del')"></i>
                </li>
                <li class="backF7 color33 size12">jianyaomiaoshu 7 <i class="el-icon-close pointer" :title="$t('editProduct.key-words-click-del')"></i>
                </li>
                <li class="backF7 color33 size12">jianyaomiaoshu 8 <i class="el-icon-close pointer" :title="$t('editProduct.key-words-click-del')"></i>
                </li>
                <li class="backF7 color33 size12">jianyaomiaoshu 9 <i class="el-icon-close pointer" :title="$t('editProduct.key-words-click-del')"></i>
                </li>
              </ul>
            </div>
          </div>

          <!--包装内容-->
          <div class="elInput size12 color33 martop15">
            <div class="left" style="line-height: 32px">{{$t('editProduct.pack-content')}}</div>
            <div class="right">
              <el-input
                size="small"
                :placeholder="$t('editProduct.produce-input-placeholder')"
                clearable>
              </el-input>
            </div>
          </div>

        </div>

        <!-- todo 申报 -->
        <div class="productData">

          <!--申报名称 (中文)-->
          <div class="elInput size12 color33 martop15">
            <div class="left" style="line-height: 32px">{{$t('editProduct.declare-name-cn')}}</div>
            <div class="right">
              <el-input
                size="small"
                :placeholder="$t('editProduct.declare-name-cn')"
                clearable>
              </el-input>
            </div>
          </div>

          <!--申报名称 (中文)-->
          <div class="elInput size12 color33 martop15">
            <div class="left" style="line-height: 32px">{{$t('editProduct.declare-name-en')}}</div>
            <div class="right">
              <el-input
                size="small"
                :placeholder="$t('editProduct.declare-name-en')"
                clearable>
              </el-input>
            </div>
          </div>

          <!--HS 编号-->
          <div class="elInput size12 color33 martop15">
            <div class="left" style="line-height: 32px">{{$t('editProduct.HS-NO')}} <i class="el-icon-question size14 pointer"
                                                                 @click.stop="nounsNum = 6"
                                                                 :title="$t('editProduct.HS-NO-title')"></i></div>
            <div class="right">
              <el-input
                size="small"
                :placeholder="$t('editProduct.HS-NO')"
                clearable>
              </el-input>
            </div>
          </div>

        </div>

        <!-- todo 品牌 -->
        <div class="productData">

          <!--品牌）-->
          <div class="elInput size12 color33 martop15">
            <div class="left" style="line-height: 32px">{{$t('editProduct.product-brand')}}</div>
            <div class="right">
              <el-input
                size="small"
                :placeholder="$t('editProduct.product-brand')"
                clearable>
              </el-input>
            </div>
          </div>

          <!--制造商-->
          <div class="elInput size12 color33 martop15">
            <div class="left" style="line-height: 32px">{{$t('editProduct.product-manufacturer')}}</div>
            <div class="right">
              <el-input
                size="small"
                :placeholder="$t('editProduct.product-manufacturer')"
                clearable>
              </el-input>
            </div>
          </div>
          <p class="textCenter martop10" style="width: 435px"><span class="size12 color26 pointer" :title="$t('editProduct.add-custom')"
                                                                    @click="addCustomFieldShow=true">{{$t('editProduct.add-custom')}}</span> <i
            @click.stop="nounsNum = 7"
            class="el-icon-question size14 pointer" :title="$t('editProduct.add-custom-title')"></i></p>

          <div class="qhmb">
            <el-dropdown class="pointer" @command="handleCommand">
              <span class="el-dropdown-link size12">
                {{selectModule || $t('editProduct.select-custom')}}<i class="el-icon-caret-bottom el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="模板1">模板1</el-dropdown-item>
                <el-dropdown-item command="模板2">模板2</el-dropdown-item>
                <el-dropdown-item command="模板3">模板3</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <i @click.stop="nounsNum = 8"
               class="el-icon-question size14 pointer" :title="$t('editProduct.select-custom-title')"></i>
          </div>

        </div>

        <!-- todo 属性 -->
        <transition name="fade">
          <div v-show="!addpp" class="productData">

            <!--采购价格（CNY））-->
            <div class="elInput size12 color33 martop15">
              <div class="left" style="line-height: 32px">{{$t('editProduct.purchase-price')}}</div>
              <div class="right">
                <el-input
                  size="small"
                  :placeholder="$t('editProduct.purchase-price')"
                  clearable>
                </el-input>
              </div>
            </div>

            <!--建议零售价格（CNY）-->
            <div class="elInput size12 color33 martop15">
              <div class="left" style="line-height: 32px">{{$t('editProduct.suggested-retail-price')}}<i class="el-icon-question size14 pointer"
                                                                         @click.stop="nounsNum = 9"
                                                                         :title="$t('editProduct.suggested-retail-price-title')"></i></div>
              <div class="right">
                <el-input
                  size="small"
                  :placeholder="$t('editProduct.suggested-retail-price')"
                  clearable>
                </el-input>
              </div>
            </div>

            <!--库存数-->
            <div class="elInput size12 color33 martop15">
              <div class="left" style="line-height: 32px">{{$t('editProduct.quantity-in-stock')}}</div>
              <div class="right">
                <el-input
                  size="small"
                  :placeholder="$t('editProduct.quantity-in-stock')"
                  clearable>
                </el-input>
              </div>
            </div>

            <!--重量（G）-->
            <div class="elInput size12 color33  martop15">
              <div class="left" style="line-height: 32px">{{$t('editProduct.product-weight')}}</div>
              <div class="right">
                <el-input
                  size="small"
                  :placeholder="$t('editProduct.product-weight')"
                  clearable>
                </el-input>
              </div>
            </div>

            <!--规格 (CM)-->
            <div class="elInput size12 color33  martop15">
              <div class="left" style="line-height: 32px">{{$t('editProduct.product-specification')}}</div>
              <div class="right tj">
                <el-input
                  size="small"
                  placeholder="L"
                  clearable>
                </el-input>
                <span class="size16 width90 textCenter">*</span>
                <el-input
                  size="small"
                  placeholder="W"
                  clearable>
                </el-input>
                <span class="size16 width90 textCenter">*</span>
                <el-input
                  size="small"
                  placeholder="H"
                  clearable>
                </el-input>
              </div>
            </div>
            <p class="textCenter martop10" style="width: 435px"><span class="size12 color26 pointer" :title="$t('editProduct.add-more-property')"
                                                                      @click="addpp = true">{{$t('editProduct.add-more-property')}}</span></p>
          </div>
        </transition>

        <!-- todo 属性 -->
        <transition name="fade">
          <div class="productData" v-show="addpp">

            <div class="selsecSx" style="width: 100%">
              <el-radio-group>
                <el-radio-button label="1">颜色</el-radio-button>
                <el-radio-button label="2">尺寸</el-radio-button>
                <el-radio-button label="3">颜色</el-radio-button>
                <el-radio-button label="4">颜色</el-radio-button>
                <el-radio-button label="5">尺寸</el-radio-button>
                <el-radio-button label="6">颜色</el-radio-button>
                <el-radio-button label="7">颜色</el-radio-button>
                <el-radio-button label="8">尺寸</el-radio-button>
                <el-radio-button label="9">颜色</el-radio-button>
              </el-radio-group>
              <span class="color26 pointer size12" @click="morePropertShow=true" :title="$t('editProduct.add-more-property')">{{$t('editProduct.more-property')}} <i
                class="el-icon-question size14 pointer color33" @click.stop="nounsNum = 10"
                :title="$t('editProduct.property-title')"></i></span>
            </div>

            <!--属性名称-->
            <div class="elInput size12 color33 martop5">
              <div class="left" style="line-height: 32px">{{$t('editProduct.property-name')}}
              </div>
              <div class="right">
                <el-input
                  size="small"
                  :placeholder="$t('editProduct.property-name')"
                  clearable>
                </el-input>
              </div>
            </div>

            <!--属性内容-->
            <div class="elInput size12 color33 martop15">
              <div class="left" style="line-height: 32px">{{$t('editProduct.property-content')}}</div>
              <div class="right">
                <el-input
                  size="small"
                  :placeholder="$t('editProduct.produce-input-placeholder')"
                  clearable>
                </el-input>
              </div>
            </div>

            <div class="elInput size12 color33">
              <div class="left" style="line-height: 32px;"></div>
              <div class="right" style="display: flex;flex-direction: column;flex: 1">
                <table class="size12 sxtable martop5">
                  <tr>
                    <td>颜色</td>
                    <td>尺寸</td>
                    <td>{{$t('editProduct.purchase-price')}}</td>
                    <td>{{$t('editProduct.suggested-retail-price')}}</td>
                    <td>{{$t('editProduct.quantity-in-stock')}}</td>
                    <td>{{$t('editProduct.produce-SKU')}} <i class="el-icon-setting color26 size16 pointer" style="margin-left: 5px"
                                 :title="$t('editProduct.set-child-sku-title')" @click="setChildSkuShow = true"></i> <i
                      class="el-icon-question size14 pointer" @click.stop="nounsNum = 3" :title="$t('editProduct.produce-SKU-title')"></i></td>
                    <td>{{$t('editProduct.product-weight')}}</td>
                    <td>{{$t('editProduct.product-specification')}}</td>
                    <td>{{$t('editProduct.property-image')}}</td>
                    <td>{{$t('property-operation')}}</td>
                  </tr>
                  <tr>
                    <td>black</td>
                    <td>M</td>
                    <td><input type="text" value="12.9" class="inputprice"></td>
                    <td><input type="text" value="18.9" class="inputprice"></td>
                    <td><input type="text" value="50" class="inputprice"></td>
                    <td><input type="text" value="NNKBR-11-black-M"></td>
                    <td><input type="text" value="1230" class="inputprice"></td>
                    <td>
                      <div class="size">
                        <input type="text" value="20" class="inputprice">*
                        <input type="text" value="20" class="inputprice">*
                        <input type="text" value="20" class="inputprice"></div>
                    </td>
                    <td><img src="../../assets/goods.jpg"/></td>
                    <td class="caozuo">
                      <div>
                        <span class="pointer color26" :title="$t('editProduct.key-words-click-cle')">{{$t('editProduct.click-del')}}</span>
                        <span class="pointer color26" :title="$t('editProduct.key-words-click-del')">{{$t('editProduct.click-cle')}}</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>black</td>
                    <td>M</td>
                    <td><input type="text" value="12.9" class="inputprice"></td>
                    <td><input type="text" value="18.9" class="inputprice"></td>
                    <td><input type="text" value="50" class="inputprice"></td>
                    <td><input type="text" value="NNKBR-11-black-M"></td>
                    <td><input type="text" value="1230" class="inputprice"></td>
                    <td>
                      <div class="size">
                        <input type="text" value="20" class="inputprice">*
                        <input type="text" value="20" class="inputprice">*
                        <input type="text" value="20" class="inputprice">
                      </div>
                    </td>
                    <td><img src="../../assets/goods.jpg"/></td>
                    <td class="caozuo">
                      <div>
                        <span class="pointer color26" :title="$t('editProduct.key-words-click-cle')">{{$t('editProduct.click-del')}}</span>
                        <span class="pointer color26" :title="$t('editProduct.key-words-click-del')">{{$t('editProduct.click-cle')}}</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>black</td>
                    <td>M</td>
                    <td><input type="text" value="12.9" class="inputprice"></td>
                    <td><input type="text" value="18.9" class="inputprice"></td>
                    <td><input type="text" value="50" class="inputprice"></td>
                    <td><input type="text" value="NNKBR-11-black-M"></td>
                    <td><input type="text" value="1230" class="inputprice"></td>
                    <td>
                      <div class="size">
                        <input type="text" value="20" class="inputprice">*
                        <input type="text" value="20" class="inputprice">*
                        <input type="text" value="20" class="inputprice"></div>
                    </td>
                    <td><img src="../../assets/goods.jpg"/></td>
                    <td class="caozuo">
                      <div>
                        <span class="pointer color26" :title="$t('editProduct.key-words-click-cle')">{{$t('editProduct.click-del')}}</span>
                        <span class="pointer color26" :title="$t('editProduct.key-words-click-del')">{{$t('editProduct.click-cle')}}</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>black</td>
                    <td>M</td>
                    <td><input type="text" value="12.9" class="inputprice"></td>
                    <td><input type="text" value="18.9" class="inputprice"></td>
                    <td><input type="text" value="50" class="inputprice"></td>
                    <td><input type="text" value="NNKBR-11-black-M"></td>
                    <td><input type="text" value="1230" class="inputprice"></td>
                    <td>
                      <div class="size">
                        <input type="text" value="20" class="inputprice">*
                        <input type="text" value="20" class="inputprice">*
                        <input type="text" value="20" class="inputprice">
                      </div>
                    </td>
                    <td><img src="../../assets/goods.jpg"/></td>
                    <td class="caozuo">
                      <div>
                        <span class="pointer color26" :title="$t('editProduct.key-words-click-cle')">{{$t('editProduct.click-del')}}</span>
                        <span class="pointer color26" :title="$t('editProduct.key-words-click-del')">{{$t('editProduct.click-cle')}}</span>
                      </div>
                    </td>
                  </tr>
                </table>
              </div>
            </div>


          </div>
        </transition>

        <!-- todo 描述 -->
        <div class="productData">

          <div style="display: flex;justify-content: flex-end;align-items: center">
            <el-radio-group v-model="wbnr2">
              <el-radio-button label="1">退货政策<i class="el-icon-edit"></i></el-radio-button>
              <el-radio-button label="2">注意事项<i class="el-icon-edit"></i></el-radio-button>
              <el-radio-button label="3">退货政策<i class="el-icon-edit"></i></el-radio-button>
              <el-radio-button label="4">退货政策<i class="el-icon-edit"></i></el-radio-button>
              <el-radio-button label="5">注意事项<i class="el-icon-edit"></i></el-radio-button>
              <el-radio-button label="6">退货政策<i class="el-icon-edit"></i></el-radio-button>
            </el-radio-group>
            <span class="color26 pointer size12" :title="$t('editProduct.add-more-describe-moudle')" @click="moreDescTemplateShow = true">{{$t('editProduct.add-more-describe-moudle')}} <i
              class="el-icon-question size14 pointer color33" @click.stop="nounsNum = 11"
              :title="$t('editProduct.describe-moudle-title')"></i></span>
          </div>

          <!--标题-->
          <div class="elInput size12 color33 martop5">
            <div class="left " style="line-height: 32px"><em class="colorR">* </em>{{$t('editProduct.product-describe')}}</div>
            <div class="fwb">
              <div class="srts">
                <div>
                  <el-radio-group v-model="wbnr1">
                    <!--纯文本-->
                    <el-radio-button :label="1">{{$t('editProduct.describe-text')}}</el-radio-button>
                    <!--富文本-->
                    <el-radio-button :label="2">{{$t('editProduct.describe-rich-text')}}</el-radio-button>
                  </el-radio-group>
                </div>

              </div>
              <div class="fwbContent">
                <div class="color33 size12 backF7 head">{{$t('editProduct.describe-moudle-message')}}</div>
                <quill-editor
                  placeholder=""
                  class="textarea"
                  v-show="wbnr1 == 2"
                  v-model="wenben"
                  :options="editorOption"
                  ref="myQuillEditor"
                  @blur="onEditorBlur($event)"
                  @focus="onEditorFocus($event)"
                ></quill-editor>
                <!--<div v-show="wbnr1 == 2" contenteditable="true" class="textarea color33 size12"></div>-->
                <textarea v-show="wbnr1 == 1" @blur="onEditorBlur($event)" @focus="onEditorFocus($event)" contenteditable="true" class="textarea color33 size12"></textarea>
                <el-collapse-transition>
                  <div class="color33 size12 backF7 head">{{$t('editProduct.describe-add-key')}}</div>
                </el-collapse-transition>
              </div>
            </div>
          </div>
        </div>

        <!-- todo 管理标签 -->
        <div class="productData">

          <!--管理标签-->
          <div class="elInput size12 color33 martop15">
            <div class="left" style="line-height: 32px">{{$t('editProduct.manage-tags')}}</div>
            <div class="bq">
              <div>
                <el-radio-group v-model="wbnr3">
                  <el-radio-button label="1">店铺1<i class="el-icon-edit"></i></el-radio-button>
                  <el-radio-button label="2">店铺2<i class="el-icon-edit"></i></el-radio-button>
                  <el-radio-button label="3">店铺3<i class="el-icon-edit"></i></el-radio-button>
                  <el-radio-button label="4">店铺4<i class="el-icon-edit"></i></el-radio-button>
                  <el-radio-button label="5">店铺5<i class="el-icon-edit"></i></el-radio-button>
                  <el-radio-button label="6">店铺6<i class="el-icon-edit"></i></el-radio-button>
                  <el-radio-button label="7">店铺6<i class="el-icon-edit"></i></el-radio-button>
                  <el-radio-button label="8">店铺6<i class="el-icon-edit"></i></el-radio-button>
                  <el-radio-button label="9">店铺6<i class="el-icon-edit"></i></el-radio-button>
                  <el-radio-button label="10">店铺6<i class="el-icon-edit"></i></el-radio-button>
                  <el-radio-button label="11">店铺6<i class="el-icon-edit"></i></el-radio-button>
                  <el-radio-button label="12">店铺6<i class="el-icon-edit"></i></el-radio-button>
                </el-radio-group>
                <span class="color26 pointer" style="margin-left: 20px" @click="addManageTagsShow = true"
                      :title="$t('editProduct.add-manage-tags-title')">{{$t('editProduct.more-manage-tags')}}<i class="el-icon-question size14 pointer color33" style="margin-left: 5px"
                                          @click.stop="nounsNum = 12"
                                          :title="$t('editProduct.manage-tags-title')"></i></span>
              </div>

              <el-input
                class="inputglbq"
                size="small"
                :placeholder="$t('editProduct.produce-input-placeholder')"
                clearable>
              </el-input>
            </div>
          </div>
          <!--管理标签-->
          <div class="elInput size12 color33 martop5">
            <div class="left" style="line-height: 32px"></div>
            <div class="keyWordsright">
              <ul class="keyWords">
                <li class="backF7 color33 size12">管理标签 1 <i class="el-icon-close pointer" :title="$t('editProduct.key-words-click-del')"></i></li>
                <li class="backF7 color33 size12">管理标签 2 <i class="el-icon-close pointer" :title="$t('editProduct.key-words-click-del')"></i></li>
                <li class="backF7 color33 size12">管理标签 3 <i class="el-icon-close pointer" :title="$t('editProduct.key-words-click-del')"></i></li>
                <li class="backF7 color33 size12">管理标签 4 <i class="el-icon-close pointer" :title="$t('editProduct.key-words-click-del')"></i></li>
                <li class="backF7 color33 size12">管理标签 5 <i class="el-icon-close pointer" :title="$t('editProduct.key-words-click-del')"></i></li>
                <li class="backF7 color33 size12">管理标签 6 <i class="el-icon-close pointer" :title="$t('editProduct.key-words-click-del')"></i></li>
                <li class="backF7 color33 size12">管理标签 7 <i class="el-icon-close pointer" :title="$t('editProduct.key-words-click-del')"></i></li>
                <li class="backF7 color33 size12">管理标签 8 <i class="el-icon-close pointer" :title="$t('editProduct.key-words-click-del')"></i></li>
                <li class="backF7 color33 size12">管理标签 9 <i class="el-icon-close pointer" :title="$t('editProduct.key-words-click-del')"></i></li>
              </ul>

            </div>
          </div>

          <!--上传附件-->
          <div class="elInput size12 color33 martop15">
            <div class="left" style="line-height: 32px">{{$t('editProduct.upload-accessory')}}</div>
            <div class="fileUp">
              <div class="fileBox pointer back26">
                <i class="size12 colorF pointer">{{$t('editProduct.upload-accessory')}}</i>
                <input type="file"/>
              </div>
              <span>文件名字</span>
            </div>
          </div>

          <!--附件备注-->
          <div class="elInput size12 color33 martop15">
            <div class="left" style="line-height: 32px">{{$t('editProduct.upload-accessory-remark')}}</div>
            <div class="right">
              <el-input
                type="textarea"
                :rows="2"
                size="small"
                :placeholder="$t('editProduct.upload-accessory-remark')"
              >
              </el-input>
            </div>
          </div>


        </div>

      </div>
      <!-- todo 广告位预留 start-->
      <div class="adver">

      </div>
      <!-- todo 广告位预留 end-->
    </div>
    <div class="footer">
      <div class="btnBox">
        <el-button type="primary" size="small" style="width: 123px">{{$t('editProduct.product-preview')}}</el-button>
        <el-cascader
          @change="shopChange"
          size="small"
          expand-trigger="hover"
          :placeholder="$t('editProduct.save-for-shop')"
          :options="shopList"
        ></el-cascader>
        <el-button type="primary" size="small" style="width: 123px">{{$t('editProduct.product-save')}}</el-button>
      </div>
    </div>
    <transition name="fade">
      <!--名字解释组件-->
      <explanation-of-nouns :num="nounsNum" v-show="nounsNum" @nounsClose="nounsNum = ''"></explanation-of-nouns>
    </transition>

    <transition name="fade">
      <!--引用产品组件-->
      <quote-exiting-product v-show="quoteExitingProductShow" @quotePruduct="quotePruductFN"></quote-exiting-product>
    </transition>

    <transition name="fade">
      <!--添加自定义字段组件-->
      <add-custom-field v-show="addCustomFieldShow" @customField="addCustomFieldFn"></add-custom-field>
    </transition>

    <transition name="fade">
      <!--设置产品SKU生成规则组件-->
      <set-sku v-show="setSKUShow" @setSku="setSkuFn"></set-sku>
    </transition>
    <transition name="fade">
      <!--更多属性组件-->
      <more-property v-show="morePropertShow" @morePropert="morePropertFn"></more-property>
    </transition>
    <transition name="fade">
      <!--添加管理标签组件-->
      <add-manage-tags v-show="addManageTagsShow" @addManageTags="addManageTagsFn"></add-manage-tags>
    </transition>
    <transition name="fade">
      <!--所有描述模版组件-->
      <more-desc-template v-show="moreDescTemplateShow" @moreDescTemplate="moreDescTemplateFn"></more-desc-template>
    </transition>
    <transition name="fade">
      <!--所有描述模版组件-->
      <set-child-sku v-show="setChildSkuShow" @setChildSku="setChildSkuFn"></set-child-sku>
    </transition>
  </div>
</template>

<script type="es6">
  import breadcrumb from '../commonModule/breadcrumb'; //面包屑组件，参数参数视下面breadcrumbList
  import selectPlatform from '../commonModule/selectPlatform'; //电商平台选择组件，需要绑定方法获取选中平台后的标识，栗子见上面
  import explanationOfNouns from '../commonModule/explanationOfNouns'; //名字解释组件
  import quoteExitingProduct from '../commonModule/quoteExitingProduct'; //引用产品组件
  import addCustomField from '../commonModule/addCustomField'; //添加自定义字段组件
  import setSku from '../commonModule/setSku'; //设置产品SKU生成规则组件
  import moreProperty from '../commonModule/moreProperty'; //更多属性组件
  import addManageTags from '../commonModule/addManageTags'; //添加管理标签组件
  import moreDescTemplate from '../commonModule/moreDescTemplate'; //所有描述模版组件
  import setChildSku from '../commonModule/setChildSku'; //所有描述模版组件
  import toolKit from '../commonModule/toolKit'; //工具箱
  import Quill,{ quillEditor } from 'vue-quill-editor'  // 富文本
  export default {
    components: {
      breadcrumb,
      selectPlatform,
      explanationOfNouns,
      quoteExitingProduct,
      addCustomField,
      setSku,
      moreProperty,
      addManageTags,
      moreDescTemplate,
      setChildSku,
      toolKit,
      quillEditor
    },
    data() {
      return {
        nounsNum: 0,    ///名词解释组件  0关闭组件 1、翻译语言；2、UPC/EAN；3、产品SKU；4、SKU工具；5、 分类；6、HS 编码；7、自定义；8、切换自定义规格模版；9、建议零售价格；10，属性；11、描述模版；12、管理标签
        breadcrumbList: [],   ///  面包屑数据
        radio2: "3",    ///  产品类型
        radio3: "3",    ///  产品状况
        options: [],    ///  分类联动选择器
        selectedOptions2: {},   ///  分动选择器选择结果
        arr: ["1"],
        selectModule: "",
        wbnr1: "1",     ///  富文本/纯文本   1富文本   2纯文本
        editorOption: null,   ///   富文本配置项
        wenben:"",      ///  富文本输入内容
        wbnr2: "",     ///  快捷模板
        wbnr3: "",      ///  管理标签
        addpp:false,    ///  属性
        shopList: [
          {
            value: 'zhinan1',
            label: 'Amazon草稿箱',
            children: [
              {
                value: 'shejiyuanze',
                label: '店铺1',
              }, {
                value: 'daohang',
                label: '店铺2',
              }
            ]
          },
          {
            value: 'zhinan2',
            label: 'eBay草稿箱',
            children: [
              {
                value: 'shejiyuanze',
                label: '店铺1',
              }, {
                value: 'daohang',
                label: '店铺2',
              }
            ]
          },
          {
            value: 'zhinan3',
            label: 'Wish草稿箱',
            children: [
              {
                value: 'shejiyuanze',
                label: '店铺1',
              }, {
                value: 'daohang',
                label: '店铺2',
              }
            ]
          },
          {
            value: 'zhinan4',
            label: 'Vova草稿箱',
            children: [
              {
                value: 'shejiyuanze',
                label: '店铺1',
              }, {
                value: 'daohang',
                label: '店铺2',
              }
            ]
          },
          {
            value: 'zhinan5',
            label: 'SouQ草稿箱',
            children: [
              {
                value: 'shejiyuanze',
                label: '店铺1',
              }, {
                value: 'daohang',
                label: '店铺2',
              }
            ]
          },
          {
            value: 'zhinan6',
            label: 'Cdiscount草稿箱',
            children: [
              {
                value: 'shejiyuanze',
                label: '店铺1',
              }, {
                value: 'daohang',
                label: '店铺2',
              }
            ]
          },
        ],    ///  保存到店铺 店铺列表
        quoteExitingProductShow: false,    ///  引用产品组件
        addCustomFieldShow: false,       ///  添加自定义字段组件
        setSKUShow: false,      ///  设置产品SKU生成规则
        morePropertShow: false,    ///  更多属性组件
        addManageTagsShow: false,      ///  添加管理标签组件
        moreDescTemplateShow: false,   ///  所有描述模版组件
        setChildSkuShow: false,        ///  设置子SKU生成规则组件
      }
    },
    methods: {
      onEditorBlur(){//富文本失去焦点事件
      },
      onEditorFocus(){//富文本获得焦点事件
      },
      platformCode(value) {   // 平台选择子集调父级方法
        console.log(value)
      },
      handleChange(value) {  // 分类选择触发方法
        console.log(value);
        console.log(this.selectedOptions2);
      },
      handleCommand(command) {  //  切换模板调用方法
        this.selectModule = command;
      },
      shopChange(shop) {      ///  选择保存到店铺

      },
      quotePruductFN(value) {    ///  引用产品组件调用方法
        this.quoteExitingProductShow = false;
      },
      addCustomFieldFn(value) {    ///  添加自定义字段个组件关闭调用方法
        this.addCustomFieldShow = false;
      },
      setSkuFn(value) {            ///  设置产品SKU生成规则组件关闭调用方法
        this.setSKUShow = false;
      },
      morePropertFn(value) {       ///  更多属性组件关闭调用方法
        this.morePropertShow = false;
      },
      addManageTagsFn(value) {     ///  添加管理标签组件
        this.addManageTagsShow = false;
      },
      moreDescTemplateFn(value) {  ///  所有描述模版组件
        this.moreDescTemplateShow = false;
      },
      setChildSkuFn(value) {       ///设置子SKU生成规则
        this.setChildSkuShow = false;
      },
    },
    mounted(){
      console.log(Quill)
      var Size = Quill.Quill.import('../../../static/common-css/quillFontSize');
      console.log(Size)
      // Size.whitelist = ['12px','14px','16px','18px','20px','22px','24px','26px','28px','30px'];
      // quill.register(Size, true);
    },
    created() {
      this.breadcrumbList = [{"title": this.$t('editProduct.all-product'), "path": "/product/list"}, {"title": this.$t('editProduct.new-product'), "path": ""}]
      this.options = [
        {
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          }, {
            value: 'daohang',
            label: '导航',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航'
            }, {
              value: 'dingbudaohang',
              label: '顶部导航'
            }]
          }]
        },
        {
          value: 'zujian',
          label: '组件',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout 布局'
            }, {
              value: 'color',
              label: 'Color 色彩'
            }, {
              value: 'typography',
              label: 'Typography 字体'
            }, {
              value: 'icon',
              label: 'Icon 图标'
            }, {
              value: 'button',
              label: 'Button 按钮'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio 单选框'
            }, {
              value: 'checkbox',
              label: 'Checkbox 多选框'
            }, {
              value: 'input',
              label: 'Input 输入框'
            }, {
              value: 'input-number',
              label: 'InputNumber 计数器'
            }, {
              value: 'select',
              label: 'Select 选择器'
            }, {
              value: 'cascader',
              label: 'Cascader 级联选择器'
            }, {
              value: 'switch',
              label: 'Switch 开关'
            }, {
              value: 'slider',
              label: 'Slider 滑块'
            }, {
              value: 'time-picker',
              label: 'TimePicker 时间选择器'
            }, {
              value: 'date-picker',
              label: 'DatePicker 日期选择器'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker 日期时间选择器'
            }, {
              value: 'upload',
              label: 'Upload 上传'
            }, {
              value: 'rate',
              label: 'Rate 评分'
            }, {
              value: 'form',
              label: 'Form 表单'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table 表格'
            }, {
              value: 'tag',
              label: 'Tag 标签'
            }, {
              value: 'progress',
              label: 'Progress 进度条'
            }, {
              value: 'tree',
              label: 'Tree 树形控件'
            }, {
              value: 'pagination',
              label: 'Pagination 分页'
            }, {
              value: 'badge',
              label: 'Badge 标记'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert 警告'
            }, {
              value: 'loading',
              label: 'Loading 加载'
            }, {
              value: 'message',
              label: 'Message 消息提示'
            }, {
              value: 'message-box',
              label: 'MessageBox 弹框'
            }, {
              value: 'notification',
              label: 'Notification 通知'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单'
            }, {
              value: 'tabs',
              label: 'Tabs 标签页'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑'
            }, {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单'
            }, {
              value: 'steps',
              label: 'Steps 步骤条'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框'
            }, {
              value: 'tooltip',
              label: 'Tooltip 文字提示'
            }, {
              value: 'popover',
              label: 'Popover 弹出框'
            }, {
              value: 'card',
              label: 'Card 卡片'
            }, {
              value: 'carousel',
              label: 'Carousel 走马灯'
            }, {
              value: 'collapse',
              label: 'Collapse 折叠面板'
            }]
          }]
        }, {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }]
      this.editorOption = {
        modules:{
          toolbar:[
            ['bold', 'italic', 'underline', 'strike',
              'blockquote', 'code-block'],
            [{'size':['12px','14px','16px','18px','20px','22px','24px','26px','28px','30px']}],
            // [{ 'size': ['small', false, 'large', 'huge'] }],
            // [{'header':1},{'header':2}], // custom button values
            [{'script':'sub'},{'script':'super'}], // 上标、下标 superscript/subscript
            [{'list': 'ordered'},{'list':'bullet'}],
            [{'indent':'-1'},{'indent':'+1'}],
            [{'color':[]},{'background':[]}],
            [{'align':[]}],
            ['clean']
          ]
        },
        placeholder:""
      }
    }

  }
</script>

<style scoped>
  .martop5 {
    margin-top: 5px;
  }

  .martop10 {
    margin-top: 10px;
  }

  .martop15 {
    margin-top: 15px;
  }

  .newProduct {
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding: 0 28px;
    box-sizing: border-box;
    -webkit-overflow-scrolling: touch;
    display: flex;
    flex-direction: column;
  }
  .moduleHead{
    display: flex;
    align-items: center;
  }
  .moduleHead .left{
    flex: 1;
  }

  .yy {
    display: flex;
    justify-content: flex-end;
  }

  .language {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  .language .el-icon-plus {
    /*margin-left: 10px;*/
  }

  .main {
    flex: 1;
    border: 2px solid #efefef;
    border-radius: 8px;
    padding: 26px 26px 26px 26px;
    box-sizing: border-box;
    display: flex;
    overflow-y: auto;
  }

  .main .content {
    flex: 1;
    margin-right: 15px;
  }

  .main .imgBox {
    display: flex;
    flex-wrap: wrap;
  }

  .main .imgBox li {
    margin-right: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 160px;
    height: 160px;
    padding: 3px;
    border: 2px #BBBBBB dashed;
    border-radius: 3px;
    box-sizing: border-box;
    position: relative;
    margin-bottom: 10px;
  }

  .main .imgBox li .massage {
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .main .imgBox li .massage i {
    line-height: 1.5em;
  }

  .main .imgBox li input {
    opacity: 0;
    width: 160px;
    height: 160px;
    position: absolute;
    z-index: 5;
  }

  .productData {
    border: 2px solid #efefef;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 0 15px 15px;
    margin-bottom: 10px;
    position: relative;
  }

  .productData .elInput {
    display: flex;
    overflow: hidden;
  }

  .productData .elInput .left {
    width: 120px;
    text-align: right;
    margin-right: 15px;
    white-space: nowrap;
  }

  .productData .elInput .right {
    width: 500px;
    display: flex;
    align-items: center;
  }

  .productData .elInput .tj {
    display: flex;
    align-items: center;
  }

  .productData .qhmb {
    position: absolute;
    right: 20px;
    top: 15px;
  }

  .fwb {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .fwb .srts {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .fwbContent {
    margin-top: 5px;
    width: 100%;
    border: 2px solid #efefef;
    box-sizing: border-box;
  }

  .fwbContent .head {
    padding: 5px;
    box-sizing: border-box;
    white-space: pre-wrap;
  }

  .fwbContent .textarea {
    width: 100%;
    min-height: 300px;
    padding: 5px;
    box-sizing: border-box;
    display: block;
  }

  .bq {
    display: flex;
    flex-direction: column;
  }

  .bq .inputglbq {
    width: 500px;
    margin-top: 5px;
  }

  .fileUp {
    display: flex;
    align-items: center;
  }

  .fileUp .fileBox {
    width: 100px;
    height: 32px;
    text-align: center;
    line-height: 32px;
    position: relative;
    border-radius: 3px;
    margin-right: 10px;
  }

  .fileUp .fileBox:hover {
    background: #66b1ff !important;
    border-color: #66b1ff !important;
  }

  .fileUp .fileBox input {
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 99;
    opacity: 0;
    cursor: pointer;
    overflow: auto;
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 0;
    flex-wrap: nowrap;
  }

  .keyWords {
    display: flex;
    flex-wrap: wrap;
  }

  .keyWords li {
    padding: 5px 10px;
    box-sizing: border-box;
    margin: 0 10px 5px 0;
    cursor: default;
    background: #EAEDF1;
    border-radius: 5px;
  }

  .keyWords li:hover {
    background: #f7f7f7;
  }

  .selsecSx {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .sxtable {
    width: 100%;
    text-align: center;
    border-right: 1px solid #EAEDF1;
  }

  .sxtable tr {

  }

  table tr:nth-child(1) {
    background: #EAEDF1;
    font-weight: bold;
  }

  table tr:nth-child(1) td {
    white-space: pre-wrap;
  }

  /*table tr:hover{*/
  /*background: #EAEDF1;*/
  /*}*/
  .sxtable td {
    height: 40px;
    text-align: center;
    border-style: solid;
    border-color: #EAEDF1;
    border-width: 0px 0px 1px 1px;
    padding: 2px 4px;
    box-sizing: border-box;
  }

  .sxtable td img {
    max-height: 100%;
    max-width: 100%;
  }

  .sxtable div.size {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sxtable input {
    width: 100%;
    display: inline-block;
    min-width: 150px;
    text-align: center;
    border: 1px solid #efefef;
    padding: 2px 2px;
    box-sizing: border-box;
  }

  .sxtable div.size input {
    width: 45px;
  }

  .sxtable input.inputprice {
    min-width: 40px;
  }

  .sxtable td.caozuo {
    padding-right: 0;
  }

  .sxtable td.caozuo div {
    display: flex;
    justify-content: space-around;
  }

  .setSku {
    margin-left: 5px;
  }

  .setSku:hover {
    color: #519afe;
  }
</style>
