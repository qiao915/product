<!--
	Created by xieqiang on 2018/10/23.
-->
<template>
  <el-container>
    <el-row class="box backF">
      <el-row type="flex" align="middle" justify="space-between" class="boxTit size14">
        <label class="infoTit">所有产品 <i class="el-icon-refresh fontB size16 colorG"></i></label>
      </el-row>
      <el-row class="conditionNav size12 color33">
        <el-row type="flex" align="middle">
          <el-row type="flex" align="middle" class="paddTop10 paddBott10">
            <el-row class="width70 textRight paddRight10">关键词</el-row>
            <el-row><el-input size="small" v-model="form.keyWords" placeholder="请输入标题或产品SKU搜索"></el-input></el-row>
          </el-row>
          <el-row type="flex" align="middle" class="paddTop10 paddBott10">
            <el-row class="width70 textRight paddRight10">创建时段</el-row>
            <el-date-picker
            size="small"
            v-model="form.data1"
            align="right"
            type="date"
            width
            placeholder="选择日期"
            :picker-options="pickerOptions1">
            </el-date-picker> —
            <el-date-picker
            size="small"
            v-model="form.data2"
            align="right"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions1">
            </el-date-picker>
          </el-row>

          <el-button type="primary" native-type="button" size="small" class="butt_search_W size12 colorF marLeft10 marRight10" @click="searchFn">搜索</el-button>
          <span @click="searchJX = !searchJX" class="size12 color26 pointer">
            <i v-show="searchJX">精简筛选条件</i>
            <i v-show="!searchJX">更多筛选条件</i>
            <i class="el-icon-caret-bottom" :class="{'el-icon-caret-top': !searchJX}"></i>
          </span>
        </el-row>
        <p style="height: 1px;width: 100%;background: linear-gradient(90deg,#bbb,#bbb 8px,transparent 0,transparent);background-size: 16px 100%;"></p>

        <el-collapse-transition>
          <div v-show="searchJX">
            <el-row class="paddTop10 app">
              <el-row type="flex" align="middle" class="paddBott10">
                <el-row class="width70 textRight paddRight10">管理标签</el-row>
                <el-checkbox-group v-model="form.checkList1">
                  <el-checkbox class="width90" label="自建"></el-checkbox>
                  <el-checkbox class="width90" label="未知"></el-checkbox>
                  <el-checkbox class="width90" label="1688"></el-checkbox>
                  <el-checkbox class="width90" label="淘宝" disabled></el-checkbox>
                </el-checkbox-group>
              </el-row>
              <el-row type="flex" align="middle" class="paddBott10">
                <el-row class="width70 textRight paddRight10">待认领店铺</el-row>
                <el-checkbox-group v-model="form.checkList2">
                  <el-checkbox class="width90" label="shopee-11"></el-checkbox>
                  <el-checkbox class="width90" label="shopify-11"></el-checkbox>
                </el-checkbox-group>
              </el-row>
              <el-row type="flex" align="middle" class="paddBott10">
                <el-row class="width70 textRight paddRight10">制造商</el-row>
                <el-checkbox-group v-model="form.checkList3">
                  <el-checkbox class="width90" label="Manufacturer"></el-checkbox>
                  <el-checkbox class="width90" label="Manufacturer"></el-checkbox>
                </el-checkbox-group>
              </el-row>
              <el-row type="flex" align="middle" class="paddBott10">
                <el-row class="width70 textRight paddRight10">产品来源</el-row>
                <el-checkbox-group v-model="form.checkList4">
                  <el-checkbox class="width90" label="自建产品"></el-checkbox>
                  <el-checkbox class="width90" label="采集产品"></el-checkbox>
                </el-checkbox-group>
              </el-row>
              <!--<el-row class="">-->
                <!--<el-button-->
                  <!--type="primary"-->
                  <!--native-type="button"-->
                  <!--size="small"-->
                  <!--class="butt_search_W size12 colorF marBott20"-->
                  <!--@click="searchFn">搜索-->
                <!--</el-button>-->
              <!--</el-row>-->
              <!--<div class="marBott10 color26 pointer" @click="isScGroup = isCondition = true">自定义筛选条件</div>-->
              <p style="height: 1px;width: 100%;background: linear-gradient(90deg,#bbb,#bbb 8px,transparent 0,transparent);background-size: 16px 100%;margin-top: 0px"></p>
            </el-row>
          </div>
        </el-collapse-transition>
      </el-row>

      <div class="table marTop10">
        <el-row type="flex" class="bottom">
          <el-row type="flex">
            <div> <!--@mouseenter="daochu=true" @mouseleave="daochu = false"-->
              <el-button type="primary" native-type="button" size="small" class="size12 colorF marRight10" @click="daochu = !daochu">批量操作&nbsp;<i :class="{'el-icon-caret-bottom': daochu,'el-icon-caret-top' : !daochu}"></i></el-button>
              <el-collapse-transition>
                <ul class="fku" v-show="daochu">
                  <!--<li class="size12 color33">导出订单</li>-->
                  <li class="size12 color33">批量标记标签（13）</li>
                  <router-link to="/editMoreProduct"><li class="size12 color33">批量编辑（14）</li></router-link>
                  <li class="size12 color33">批量删除（1314）</li>
                </ul>
              </el-collapse-transition>
            </div>
            <el-button type="primary" native-type="button" size="small" class="size12 colorF">认领到店铺</el-button>
          </el-row>
          <div class="right">
            <el-button @click="toNewProduct" type="primary" native-type="button" size="small" class="size12 colorF">新建产品</el-button>
            <el-button type="primary" native-type="button" size="small" class="size12 colorF">导入产品</el-button>
            <el-button type="primary" native-type="button" size="small" class="size12 colorF">采集产品</el-button>
            <el-button type="primary" native-type="button" size="small" class="size12 colorF">导出</el-button>
          </div>
        </el-row>

        <div class="tableContent">
          <!--自定义筛选组-->
          <el-row class="size12 color26 marTop10 pointer paddLeft10 dragBox" type="flex" align="middle">
            <el-button type="primary" plain size="mini">全部（998）</el-button>
            <el-button type="primary" plain size="mini">采集产品（666）</el-button>
            <draggable element="el-collapse"
                       :list="list2"
                       :options="{group:'ccc',animation:300}" class="XYcenter">
              <div class="tagBox marLeft10 XYcenter"
                   v-for="(e,i) in list2" :name="e.name" :key="i"
                   @click="tagIconNum=i">
                <div class="tagBoxName" @click="alert1">{{e.description}}（{{13+i}}）</div>
                <div title=编辑筛选组 @click="alert2" v-show="tagIconNum==i" class="tagBoxIcon" style="border-left: 1px solid #fff;"><i class="el-icon-edit el-icon--right"></i></div>
                <div title=删除筛选组 @click="alert3" v-show="tagIconNum==i" class="tagBoxIcon"><i class="el-icon-delete el-icon--right"></i></div>
              </div>
            </draggable>
            <el-popover
              placement="bottom"
              title=""
              width="200"
              trigger="click">
              <draggable element="el-collapse"
                         :list="list1" @end="onEnd"
                         :options="{group:'ccc',animation:300}">
                <div class="tagBox marBott10 XYcenter size12 color26"
                     v-for="(e,i) in list1" :name="e.name" :key="i"
                     @click="tagIconNum=i+6">
                  <div class="tagBoxName" @click="alert1">{{e.description}}（{{13+i}}）</div>
                  <div title=编辑筛选组 @click="alert2" v-show="tagIconNum==i+6" class="tagBoxIcon" style="border-left: 1px solid #fff;"><i class="el-icon-edit el-icon--right"></i></div>
                  <div title=删除筛选组 @click="alert3" v-show="tagIconNum==i+6" class="tagBoxIcon"><i class="el-icon-delete el-icon--right"></i></div>
                </div>
              </draggable>
              <!--<el-button slot="reference" class="marLeft10" size="small"><i class="el-icon-d-arrow-right fontB"></i></el-button>-->
              <div slot="reference" v-if="list1.length>0" class="marLeft10" title="更多筛选组">
                <i class="el-icon-d-arrow-right fontB"></i>
              </div>
            </el-popover>
            <div class="color26 pointer marLeft10" @click="isScGroup = true"><i class="el-icon-plus primary"></i>新增筛选组</div>
            <!--<i class="el-icon-circle-plus primary size20 marLeft10"></i>-->
            <!--<div class="marLeft10" @click="isScGroup = true ; isCondition = false">自定义筛选组</div>-->
          </el-row>
          <!--表格-->
          <el-row class="relative">
            <div class="relative" :style="tableWidth" >
              <div class="table-more pointer" @click="moreLineShow = !moreLineShow">
                <img src="../../../static/image/more.png" alt="">
              </div>
              <el-table size="small"
                        ref="multipleTable"
                        border
                        :data="staffData"
                        :key="1"
                        tooltip-effect="dark"
                        class="tableEmp"
                        :header-cell-style="getRowClass"
                        @selection-change="handleSelectionChange">
                <el-table-column
                  type="selection"
                  width="55"
                  align="center"
                >
                </el-table-column>
                <el-table-column
                  align="center"
                  :label="col.name"
                  v-for="(col, index) in chooseCols"
                  :key="index"
                >
                  <template slot-scope="scope">
                    <input type="text" class="size12 app textCenter" :value="scope.row[col.code]" /><!--{{ scope.row[col.code] }}-->
                  </template>
                </el-table-column>
              </el-table>
              <div class="block">
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage"
                  :page-sizes="[10, 20, 30, 40]"
                  :page-size="pageSize"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="totalRecords">
                </el-pagination>
              </div>

            </div>
            <el-collapse-transition>
              <div class="more-line" v-show="moreLineShow">
                <div class="more-line-head color33 fontB">
                  显示列
                </div>
                <el-checkbox-group v-model="chooseLine">
                  <el-checkbox
                    v-for="(item, index) in lineList"
                    :key="index"
                    :label="item.name"
                    :disabled="item.disable">
                  </el-checkbox>
                </el-checkbox-group>
              </div>
            </el-collapse-transition>
          </el-row>
        </div>

      </div>


      <!--自定义筛选组-->
      <keep-alive>
        <screenGroup v-if="isScGroup" @childByValue="childByValue"></screenGroup>
      </keep-alive>
    </el-row>
  </el-container>
</template>

<script type="es6">
  import screenGroup from '../product/productList-child/screenGroup'
  import draggable from 'vuedraggable'
  export default {
    components: {
      draggable,
      screenGroup
    },
    data() {
        return {
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
          },//日期
          dragMore:false,//更多筛选组
          list:[
            {name:'name0',title:'title0',description:'第一个筛选组'},
            {name:'name1',title:'title1',description:'第二个筛选组'},
            {name:'name2',title:'title2',description:'第三个筛选组'},
            {name:'name3',title:'title3',description:'第四个筛选组'},
            {name:'name4',title:'title4',description:'第五个筛选组'},
            {name:'name5',title:'title5',description:'第六个筛选组'},
            {name:'name6',title:'title6',description:'第七个筛选组'},
            {name:'name7',title:'title7',description:'第八个筛选组'},
          ],
          list1:[],
          list2:[],
          searchJX:true,//更多筛选条件
          form: {//搜索条件
            keyWords:'',
            data1:'',
            data2:'',
            checkList1: '',
            checkList2: '',
            checkList3: '',
            checkList4: '',
          },
          tagIconNum:null,//筛选组操作按钮
          isScGroup:false,
          daochu: false,


          multipleSelection: [],//多选
          staffData: [],    //列表总数据data
          totalRecords: 0, // 总条数
          totalPages: 1,  // 总页数
          currentPage: 1,
          pageSize: 10,
          isSearch: false,
          key: 1, // table key
          chooseLine: ['业务编号', '序号', '大宗用户编号', '用户自编号', '寄达局邮编', '寄达局名称', '收件人姓名', '收件人地址', '收件人电话', '邮件重量'],
          chooseCols: [],
          lineList: [
            {
              name: '业务编号',
              code: 'postalFileId',
              disable: true
            }, {
              name: '序号',
              code: 'dataSqn',
              disable: true
            }, {
              name: '大宗用户编号',
              code: 'userNo',
            }, {
              name: '用户自编号',
              code: 'userSelfNo'
            }, {
              name: '寄达局邮编',
              code: 'collectionOfficeZipCode'
            }, {
              name: '寄达局名称',
              code: 'collectionOfficeName',
              disable: true
            }, {
              name: '收件人姓名',
              code: 'recipientName'
            }, {
              name: '收件人地址',
              code: 'recipientAddr',
              disable: true
            }, {
              name: '收件人电话',
              code: 'recipientPhoneNo'
            }, {
              name: '邮件重量',
              code: 'packageWeight'
            }, {
              name: '邮件号码',
              code: 'postageNo',
            }, {
              name: '邮件备注',
              code: 'postageRemark'
            }, {
              name: '保险金额',
              code: 'insuranceAmount'
            }, {
              name: '保价金额',
              code: 'insuredAmount'
            }, {
              name: '保值金额',
              code: 'maintainAmount'
            }, {
              name: '总资费',
              code: 'totalAmount'
            }, {
              name: '封发标志',
              code: 'mark'
            }, {
              name: '已贴票金额',
              code: 'postedTicketAmount'
            }, {
              name: '回执单号码',
              code: 'receiptNo'
            }, {
              name: '英文国家名',
              code: 'enCountryName'
            }, {
              name: '英文州名',
              code: 'stateName'
            }, {
              name: '英文城市名',
              code: 'cityName'
            }, {
              name: '寄件人姓名',
              code: 'senderName'
            }, {
              name: '寄件人省名',
              code: 'senderProvincialName'
            },
            {
              name: '寄件人城市名',
              code: 'senderCityName'
            },
            {
              name: '寄件人地址',
              code: 'senderAddr'
            },
            {
              name: '寄件人电话',
              code: 'senderPhoneNo'
            },
            {
              name: '内件类型代码',
              code: 'innerType'
            },
            {
              name: '验关报关标志',
              code: 'declarationMark'
            },
            {
              name: '验关物品类型',
              code: 'packageType'
            },
            {
              name: '内件名称',
              code: 'innerName'
            },
            {
              name: '内件数量',
              code: 'innerCnt'
            },
            {
              name: '单件重量',
              code: 'singleWeight'
            },
            {
              name: '单价',
              code: 'singlePrice'
            },
            {
              name: '产地',
              code: 'originPlace'
            },
            {
              name: '协调号',
              code: 'coordinationNo'
            },
            {
              name: '物品英文说明',
              code: 'packageDescription'
            },
            {
              name: '内件成分说明',
              code: 'packageInternal'
            },
            {
              name: '图象文件名',
              code: 'imgName'
            },
            {
              name: '创建时间',
              code: 'createTime'
            }
          ],
          moreLineShow: false,
          empName: '',
          currentRow: ''
        }
    },
    watch: {
      chooseLine(valArr) {
        this.chooseCols = []
        this.lineList.forEach(t => {
          const a = this.chooseLine.some(w => {
            return w === t.name
          })
          if (a) {
            this.chooseCols.push(t)
          }
        })
        this.key = this.key + 1
      }
    },//监听
    computed: {
      tableWidth() {
        if (this.moreLineShow) {
          return 'width: calc(100% - 150px)'
        } else {
          return 'width: 100%'
        }
      }
    },
    created() {
      // 更多筛选组
      this.list1 = this.list.slice(6)
      this.list2 = this.list.slice(0,6)

      this.chooseCols = []
      this.lineList.forEach(t => {
        const a = this.chooseLine.some(w => {
          return w === t.name
        })
        if (a) {
          this.chooseCols.push(t)
        }
      })
      console.log(this.chooseCols)
      this.$nextTick(() => {
        this._getStaffData()
      })
    },
    mounted() {
    },
    methods: {
      //拖拽标签组
      onEnd(e){
        if(this.list2.length>6){
          let last = this.list2[this.list2.length-1]
          this.list2.pop()
          console.log(last)
          this.list1.unshift(last)
        }

        console.log(this.list2)
        console.log(this.list1)
      },
      // 搜索
      searchFn(){
        console.log(this.form)
      },
      // 新建产品
      toNewProduct(){
        this.$router.push({path:"/newProduct"})
      },
      // 自定义筛选组（子组件传回的值）
      childByValue: function (childValue) {
        // childValue就是子组件传过来的值
        console.log(childValue)
        this.isScGroup = childValue.isScGroup;
      },
      alert1(){
        console.log(1111)
      },
      alert2(){
        console.log(2222)
      },
      alert3(){
        console.log(3333)
      },





      getRowClass({ row, column, rowIndex, columnIndex }) {
        if (rowIndex == 0) {
          return "background:#EAEDF1"
        } else {
          return ""
        }
      },
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row)
          })
        } else {
          this.$refs.multipleTable.clearSelection()
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val
      },
      _getStaffData() {
        // this.$http.asnSerGetApi(`${this.saasApi.postalFileData}`, 'GET', { PageSize: this.PageSize, PageNumber: this.PageNumber }, false).then(res => {
          let resp = {
            "data":[
              {
                "postalFileId":"P1811010001",
                "dataSqn":"1",
                "userNo":"",
                "userSelfNo":"",
                "collectionOfficeZipCode":"GJ",
                "collectionOfficeName":"格鲁吉亚",
                "recipientName":"SImon Natradze",
                "recipientAddr":"SImon Natradze, III Dolabauri street. 35, , Tbilisi, Tbilisi, none, Georgia",
                "recipientPhoneNo":"0",
                "packageWeight":"333",
                "postageNo":"LA505664663CN",
                "postageRemark":"",
                "insuranceAmount":"",
                "insuredAmount":"",
                "maintainAmount":"",
                "totalAmount":"",
                "mark":"",
                "postedTicketAmount":"",
                "receiptNo":"",
                "enCountryName":"",
                "stateName":"Tbilisi",
                "cityName":"Tbilisi",
                "senderName":"li rui zhi",
                "senderProvincialName":"GuangDongSheng",
                "senderCityName":"GuangZhouShi",
                "senderAddr":"jian she lu 16 hao",
                "senderPhoneNo":"18218959774",
                "innerType":"1",
                "declarationMark":"报关",
                "packageType":"普个人物品",
                "innerName":"Bicycle accessories",
                "innerCnt":"1",
                "singleWeight":"",
                "singlePrice":"2000",
                "originPlace":"china",
                "coordinationNo":"",
                "packageDescription":"good",
                "packageInternal":"good",
                "imgName":"",
                "createTime":"2018-11-01T06:10:48.084Z"
              },
              {
                "postalFileId":"P1810310002",
                "dataSqn":"12",
                "userNo":"",
                "userSelfNo":"",
                "collectionOfficeZipCode":"GJ",
                "collectionOfficeName":"西班牙",
                "recipientName":"Jonathan Rodríguez Santibáñez",
                "recipientAddr":"Jonathan Rodríguez Santibáñez, Calle Ceuta Nº10, , Málaga, Andalucía Ceuta y Melilla, 29006, Spain",
                "recipientPhoneNo":"0",
                "packageWeight":"309",
                "postageNo":"RP061365027CN",
                "postageRemark":"",
                "insuranceAmount":"",
                "insuredAmount":"",
                "maintainAmount":"",
                "totalAmount":"",
                "mark":"",
                "postedTicketAmount":"",
                "receiptNo":"",
                "enCountryName":"",
                "stateName":"Andalucía Ceuta y Melilla",
                "cityName":"Málaga",
                "senderName":"huang jie yi",
                "senderProvincialName":"GuangDongSheng",
                "senderCityName":"GuangZhouShi",
                "senderAddr":"wen quan dong lu 3 13 hao",
                "senderPhoneNo":"87515299",
                "innerType":"1",
                "declarationMark":"报关",
                "packageType":"普个人物品",
                "innerName":"Voltmeter",
                "innerCnt":"1",
                "singleWeight":"",
                "singlePrice":"2000",
                "originPlace":"china",
                "coordinationNo":"",
                "packageDescription":"good",
                "packageInternal":"good",
                "imgName":"",
                "createTime":"2018-10-31T10:14:50.756Z"
              },
              {
                "postalFileId":"P1810310002",
                "dataSqn":"11",
                "userNo":"",
                "userSelfNo":"",
                "collectionOfficeZipCode":"GJ",
                "collectionOfficeName":"西班牙",
                "recipientName":"Manuel Rivera Goti",
                "recipientAddr":"Manuel Rivera Goti, C/ San Lucas, Nº7, 1ºA,, , Narón, Galicia, 15570, Spain",
                "recipientPhoneNo":"0",
                "packageWeight":"380",
                "postageNo":"RP061884818CN",
                "postageRemark":"",
                "insuranceAmount":"",
                "insuredAmount":"",
                "maintainAmount":"",
                "totalAmount":"",
                "mark":"",
                "postedTicketAmount":"",
                "receiptNo":"",
                "enCountryName":"",
                "stateName":"Galicia",
                "cityName":"Narón",
                "senderName":"wu li hong",
                "senderProvincialName":"GuangDongSheng",
                "senderCityName":"GuangZhouShi",
                "senderAddr":"sha yuan da jie 1 73 hao",
                "senderPhoneNo":"87515299",
                "innerType":"1",
                "declarationMark":"报关",
                "packageType":"普个人物品",
                "innerName":"Microphone",
                "innerCnt":"1",
                "singleWeight":"",
                "singlePrice":"2000",
                "originPlace":"china",
                "coordinationNo":"",
                "packageDescription":"good",
                "packageInternal":"good",
                "imgName":"",
                "createTime":"2018-10-31T10:14:50.745Z"
              },
              {
                "postalFileId":"P1810310002",
                "dataSqn":"10",
                "userNo":"",
                "userSelfNo":"",
                "collectionOfficeZipCode":"GJ",
                "collectionOfficeName":"西班牙",
                "recipientName":"Arnau Gispert Becerra",
                "recipientAddr":"Arnau Gispert Becerra, Calle Egara 135 1-3, , Terrassa, Catalu?a, 08225, Spain",
                "recipientPhoneNo":"0",
                "packageWeight":"282",
                "postageNo":"RP061282866CN",
                "postageRemark":"",
                "insuranceAmount":"",
                "insuredAmount":"",
                "maintainAmount":"",
                "totalAmount":"",
                "mark":"",
                "postedTicketAmount":"",
                "receiptNo":"",
                "enCountryName":"",
                "stateName":"Catalu?a",
                "cityName":"Terrassa",
                "senderName":"li hong yun",
                "senderProvincialName":"GuangDongSheng",
                "senderCityName":"GuangZhouShi",
                "senderAddr":"jiang nan xi lu 1 0 75 hao",
                "senderPhoneNo":"87515299",
                "innerType":"1",
                "declarationMark":"报关",
                "packageType":"普个人物品",
                "innerName":"Net bag",
                "innerCnt":"1",
                "singleWeight":"",
                "singlePrice":"2000",
                "originPlace":"china",
                "coordinationNo":"",
                "packageDescription":"good",
                "packageInternal":"good",
                "imgName":"",
                "createTime":"2018-10-31T10:14:50.733Z"
              },
              {
                "postalFileId":"P1810310002",
                "dataSqn":"9",
                "userNo":"",
                "userSelfNo":"",
                "collectionOfficeZipCode":"GJ",
                "collectionOfficeName":"秘鲁",
                "recipientName":"Cristian Lovon Chino",
                "recipientAddr":"Cristian Lovon Chino, 1658 Avenida la Libertad, , Provincia de Lima, Municipalidad Metropolitana de Lima, 15087, Peru",
                "recipientPhoneNo":"0",
                "packageWeight":"968",
                "postageNo":"RP062003404CN",
                "postageRemark":"",
                "insuranceAmount":"",
                "insuredAmount":"",
                "maintainAmount":"",
                "totalAmount":"",
                "mark":"",
                "postedTicketAmount":"",
                "receiptNo":"",
                "enCountryName":"",
                "stateName":"Municipalidad Metropolitana de Lima",
                "cityName":"Provincia de Lima",
                "senderName":"huang yu hua",
                "senderProvincialName":"GuangDongSheng",
                "senderCityName":"GuangZhouShi",
                "senderAddr":"guang yuan zhong lu 1 1 1 56 hao",
                "senderPhoneNo":"25003540",
                "innerType":"1",
                "declarationMark":"报关",
                "packageType":"普个人物品",
                "innerName":"USB socket",
                "innerCnt":"1",
                "singleWeight":"",
                "singlePrice":"2000",
                "originPlace":"china",
                "coordinationNo":"",
                "packageDescription":"good",
                "packageInternal":"good",
                "imgName":"",
                "createTime":"2018-10-31T10:14:50.72Z"
              }
              ],
            "totalRecords":40,
            "totalPages":2,
            "pageSize":20,
            "pageNumber":1
          };
          // let res = JSON.parse(jsonres)
          // let resp = res.data
          // console.log()
          this.staffData = resp.data
          this.totalRecords = resp.totalRecords
          this.totalPages = resp.totalPages
        // })
      },
      handleSearch() {
        this.currentPage = 1
        if (this.empName.trim() !== '') {
          this.isSearch = true
        } else {
          this.isSearch = false
        }
        this.$http.asnSerGetApi(`${this.saasApi.postalFileData}?PostageNo=${this.empName}&PageIndex=${this.currentPage}&PageSize=${this.pageSize}`, 'GET', '', (data) => {
          let res = JSON.parse(data)
          this.staffData = res.data
          this.totalRecords = res.totalRecords
          this.totalPages = res.totalPages
        })
      },
      // 表格 分页控制
      handleSizeChange(pageSize) {
        this.pageSize = pageSize
        if (this.isSearch) {
          this.handleSearch()
        } else {
          this._refresh()
        }
      },
      handleCurrentChange(currentPage) {
        this.currentPage = currentPage
        if (this.isSearch) {
          this.handleSearch()
        } else {
          this._refresh()
        }
      },
      _refresh() {
        this._getStaffData()
      }


    },
    updated(){
      $("#tableFx").find('td').each(function () {
        if($(this).text().replace(/(^\s*)|(\s*$)/g,'') != '-' && $(this).text() && !$(this).attr("title")) $(this).attr("title", $(this).text());
      });
    }
  }
</script>

<style scoped>
  .boxTit{
    border-bottom: 2px solid #f2f2f2;
  }

  .dragBox /deep/ .el-collapse{
    border: none;
  }
  .tagBox{
    background: #e9f2ff;
    border:1px solid #a8cdff;
    border-radius: 3px;
  }
  .tagBox:hover{
    background: #2681FE;
    border:1px solid #2681FE;
    color: #fff;
  }
  .tagBoxName{
    padding: 5px 15px;

  }
  .tagBoxIcon{
    padding: 5px 5px;
  }
  .bottom{
    position: relative;
  }
  .right{
    position: absolute;
    right: 0;
  }
  .fku{
    width:130px;
    position: absolute;
    left: 0;
    top: 32px;
    z-index: 9;
    padding:8px;
    background: white;
    border: 1px solid #DCDCDC;
  }
  .fku li{
    width: 100%;
    height: 26px;
    line-height: 25px;
  }
  .fku li:hover{
    background: #2681FE;
    color: white;
  }







  .box {
    width: 100%;
    padding: 0 40px 55px 26px;
    position: relative;
    overflow-y: auto;
    min-width: 1000px;
  }
  .relative {
    position: relative;
  }
  .EmpBox {
    padding: 10px 0 0 13px;
  }
  .empNameInp {
    width: 165px;
    height: 34px;
    margin-right: 33px;
  }
  .status-btn {
    margin-left: auto;
  }
  .status-btn /deep/ .el-radio-button__inner {
    min-width: 90px;
  }
  .block {
    margin-top: 15px;
    text-align: right;
  }
  .block /deep/ .el-pagination {
    padding-right: 0;
  }
  .block /deep/ .el-icon-arrow-up:before {
    position: relative;
    top: -5px;
  }
  .table-more {
    position: absolute;
    top: -20px;
    right: 5px;
    z-index: 9;
  }
  .table-more img {
    width: 17px;
  }
  .more-line {
    position: absolute;
    top: 0;
    right: 0;
    width: 145px;
    border: 2px solid #eaedf1;
  }
  .more-line-head {
    height: 40px;
    line-height: 40px;
    width: 100%;
    text-align: center;
    background-color: #eaedf1;
  }
  .more-line /deep/ .el-checkbox:first-child {
    margin-left: 10px;
  }
  .more-line /deep/ .el-checkbox + .el-checkbox {
    margin-left: 10px;
  }
  .more-line /deep/ .el-checkbox {
    width: 100px;
    height: 22px;
  }
  .more-line /deep/ .el-checkbox__label {
    font-size: 12px;
  }
  .more-line /deep/ .el-checkbox-group {
    padding: 10px 0;
  }
</style>
