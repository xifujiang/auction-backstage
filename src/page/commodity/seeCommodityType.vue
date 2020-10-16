<template>
  <div>
    <el-button type="info" @click="openModel1()">添加</el-button>
    <el-table
    :data="typeList.slice((currentPage-1)*PageSize,currentPage*PageSize)"
    style="width: 100%">
    <el-table-column label="序号" width="70px">
      <template slot-scope="scope">{{scope.$index+1}}</template>
    </el-table-column>
    <el-table-column prop="name3" label="类型名" width="200" align='center'></el-table-column>
    <!--价格-->
    <el-table-column prop="name2" label="父类型" width="200" align='center'></el-table-column>
    <!--每次加价-->
    <el-table-column prop="name1" label="父父类型" width="200" align='center'></el-table-column>
    <el-table-column label="审核" width="400" align='center'>
      <template slot-scope="scope">
        <el-button size="mini" @click="edit(scope.$index, scope.row)">编辑</el-button>
        <el-button size="mini" type="danger" @click="addSun(scope.$index, scope.row)">添加子类</el-button>
        <el-button size="mini" type="danger" @click="deleteCommodityType(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
    <el-pagination @size-change="handleSizeChange"
                   @current-change="handleCurrentChange"
                   :current-page="currentPage"
                   :page-sizes="pageSizes"
                   :page-size="PageSize" layout="total, sizes, prev, pager, next, jumper"
                   :total="totalCount">
    </el-pagination>
    <Modal v-model="model" width="640">
      <p slot="header">
        <span>添加类型</span>
      </p>
      <div>
        <el-radio-group v-model="radio">
          <Row :gutter="24">
            <i-col span="6">
            <el-radio v-model="radio" label="1" border>添加一级类型</el-radio>
            </i-col>
            <i-col span="6">
              <el-input type="text" placeholder="请输入一级类型" v-model="text_1" maxlength="5" show-word-limit :disabled="radio==='1'?false:true"></el-input>
            </i-col>
          </Row>
          <br/>
            <Row :gutter="24">
              <i-col span="6">
                <el-radio v-model="radio" label="2" border>添加二级类型</el-radio>
              </i-col>
              <i-col span="6">
                <i-select  size="large" style="width:120px" v-model="type_1_1" :disabled="radio==='2'?false:true">
                  <i-option v-for="item in oneType" :key='item.typeid' :value="item.name" :label="item.name">{{ item.name }}</i-option>
                </i-select>
              </i-col>
              <i-col span="6">
                <el-input type="text" placeholder="请输入二级类型" v-model="text_2" maxlength="5" show-word-limit :disabled="radio==='2'?false:true"></el-input>
              </i-col>
            </Row>
          <br/>
            <Row :gutter="24">
              <i-col span="6">
                <el-radio v-model="radio" label="3" border>添加三级类型</el-radio>
              </i-col>
              <i-col span="6">
                <i-select  size="large" style="width:120px" v-model="type_2_1" :disabled="radio==='3'?false:true">
                  <i-option v-for="item in oneType" :key='item.typeid' :value="item.name" :label="item.name">{{ item.name }}</i-option>
                </i-select>
              </i-col>
              <i-col span="6">
                <i-select  size="large" style="width:120px" v-model="type_2_2" :disabled="radio==='3'?false:true">
                  <i-option v-for="item in twoType" :key='item.typeid' :value="item.name" :label="item.name">{{ item.name }}</i-option>
                </i-select>
              </i-col>
              <i-col span="6">
                <el-input type="text" placeholder="请输入三级类型" v-model="text_3" maxlength="5" show-word-limit :disabled="radio==='3'?false:true"></el-input>
              </i-col>
            </Row>
        </el-radio-group>
      </div>
      <div slot="footer">
        <Button type="primary" size="large" long @click="beSureAdd()" style="width: 30%">确定</Button>
        <Button type="Ghost" size="large" long @click="closeModel()" style="width: 30%">取消</Button>
      </div>
    </Modal>
  <Modal v-model="model2" width="400">
    <p slot="header">
      <span>编辑</span>
    </p>
    <div>
      <div v-if="type_rank ===1">
        一级类型名：<el-input type="text" v-model="type_name1" maxlength="5" show-word-limit></el-input>
        二级类型名：<el-input type="text" v-model="type_name2" maxlength="5" show-word-limit disabled></el-input>
        三级类型名：<el-input type="text" v-model="type_name3" maxlength="5" show-word-limit disabled></el-input>
      </div>
      <div v-else-if="type_rank ===2">
        <Row :gutter="24">
          <i-col span="6">一级类型名：</i-col>
          <i-col span="12">
            <i-select  size="large" style="width:120px" v-model="type_name1">
              <i-option v-for="item in oneType" :key='item.typeid' :value="item.name" :label="item.name">{{ item.name }}</i-option>
            </i-select>
          </i-col>
        </Row>
        二级类型名：<el-input type="text" v-model="type_name2" maxlength="5" show-word-limit></el-input>
        三级类型名：<el-input type="text" v-model="type_name3" maxlength="5" show-word-limit disabled></el-input>
      </div>
      <div v-else>
        <Row :gutter="24">
          <i-col span="6">一级类型名：</i-col>
          <i-col span="12">
            <i-select  size="large" style="width:120px" v-model="type_name1">
              <i-option v-for="item in oneType" :key='item.typeid' :value="item.name" :label="item.name">{{ item.name }}</i-option>
            </i-select>
          </i-col>
        </Row>
        <Row :gutter="24">
          <i-col span="6">二级类型名：</i-col>
          <i-col span="12">
            <i-select  size="large" style="width:120px" v-model="type_name2">
              <i-option v-for="item in twoType" :key='item.typeid' :value="item.name" :label="item.name">{{ item.name }}</i-option>
            </i-select>
          </i-col>
        </Row>
        三级类型名：<el-input type="text" v-model="type_name3" maxlength="5" show-word-limit></el-input>
      </div>
    </div>
    <div slot="footer">
      <Button type="primary" size="large" long @click="beSureEdit2()" style="width: 30%">确定</Button>
      <Button type="Ghost" size="large" long @click="closeModel2()" style="width: 30%">取消</Button>
    </div>
  </Modal>
  <Modal v-model="model3" width="400">
    <p slot="header">
      <span>添加子类</span>
    </p>
    <div>
        <div v-if="add_rank ===2">
          一级类型名：<el-input type="text" v-model="add_name1" maxlength="5" show-word-limit disabled></el-input>
          二级类型名：<el-input type="text" v-model="add_name2" maxlength="5" show-word-limit></el-input>
        </div>
        <div v-else-if="add_rank === 3">
          一级类型名：<el-input type="text" v-model="add_name2" maxlength="5" show-word-limit disabled></el-input>
          二级类型名：<el-input type="text" v-model="add_name1" maxlength="5" show-word-limit disabled></el-input>
          三级类型名：<el-input type="text" v-model="add_name3" maxlength="5" show-word-limit></el-input>
        </div>
    </div>
    <div slot="footer">
      <Button type="primary" size="large" long @click="beSureAddSun()" style="width: 30%">确定</Button>
      <Button type="Ghost" size="large" long @click="closeModel3()" style="width: 30%">取消</Button>
    </div>
  </Modal>
  </div>
</template>

<script>
    export default {
      name: "seeCommodityType",
      data() {
        return {
          typeList: [],
          // 默认显示第几页
          currentPage:1,
          // 总条数，根据接口获取数据长度(注意：这里不能为空)
          totalCount:1,
          // 个数选择器（可修改）
          pageSizes:[5,10,20,40],
          // 默认每页显示的条数（可修改）
          PageSize:10,
          model: false,
          model2: false,
          model3: false,
          text_1: '',
          text_2: '',
          text_3: '',
          type_1_1: '',
          type_2_1: '',
          type_2_2: '',
          radio: '1',
          oneType: [],
          twoType: [],
          type_rank: 0,
          type_name1: '',
          type_name2: '',
          type_name3: '',
          now_type_id:'',
          add_rank: '',
          new_parent_id:'',
          add_name1:'',
          add_name2:'',
          add_name3:''
        }
      },
      created() {
        this.getCommodityType();
      },
      methods: {
        getCommodityType() {
          this.$axios({
            url: 'query/commodityType',
            methods: 'get'
          }).then(res =>{
            if(res.data.code === 200) {
              this.typeList = res.data.data;
              this.typeList.forEach(item =>{
                if(item.name2 === null || item.name2 === '') {
                  item.name2 = '/';
                }
                if(item.name1 === null || item.name1 === '') {
                  item.name1 = '/';
                }
              })
              this.totalCount=res.data.data.length;
            }
          })
        },
        getOneTypeList(parentid) {
          this.$axios({
            url: 'query/oneCommodityType',
            methods: 'get',
            params: {
              parentid:parentid
            }
          }).then(res =>{
            if(res.data.code === 200) {
              this.oneType = res.data.data;
            }
          })
        },
        getTwoTypeList(parentName){
          this.type_2_2 = '';
          this.$axios({
            url: 'query/twoCommodityType',
            methods: 'get',
            params: {
              parentName:parentName
            }
          }).then(res =>{
            if(res.data.code === 200) {
              this.twoType = res.data.data;
            }
          });
        },
        // 分页
        // 每页显示的条数
        handleSizeChange(val) {
          // 改变每页显示的条数
          this.PageSize=val
          // 注意：在改变每页显示的条数时，要将页码显示到第一页
          this.currentPage=1
        },
        // 显示第几页
        handleCurrentChange(val) {
          // 改变默认的页数
          this.currentPage=val
        },
        openModel1(){
          this.model = true;
        },
        edit(index, row){
          this.type_name1=row.name3;
          this.type_name2=row.name2;
          this.type_name3=row.name1;
          this.now_type_id = row.typeid3;
          alert(this.type_name1+' '+this.type_name2+' '+this.type_name3+' '+this.now_type_id);
          if(this.type_name2 ==='/' && this.type_name3 ==='/'){
            this.type_rank = 1;
          } else if(this.type_name3 === '/') {
            this.type_rank = 2;
            this.getOneTypeList(0);
          } else {
            this.type_rank = 3;
            this.getOneTypeList(0);
          }
          this.model2 = true;
        },
        beSureEdit2() {
          if(this.type_rank === 1) {
            this.editCommodity(this.now_type_id, this.type_name1, '/');
          } else if (this.type_rank === 2) {
            this.editCommodity(this.now_type_id, this.type_name2, this.type_name1);
          } else if (this.type_rank === 3){
            this.editCommodity(this.now_type_id, this.type_name3, this.type_name2);
          }
        },
        editCommodity(typeid,name1,name2) {
          this.$axios({
            url: 'edit/commodityType',
            method: 'get',
            params: {
              typeid: typeid,
              name1: name1,
              name2:name2
            }}).then(res =>{
              if(res.data.code === 200) {
                this.model2 = false;
                alert("编辑成功");
              }
            });
        },
        deleteCommodityType(index, row) {

          this.$axios({
            url:'delete/commodityType',
            methods:'get',
            params:{
              typeid:row.typeid3
            }
          }).then(res => {
            if(res.data.code === 200) {
              alert('删除成功');
            }
          })
        },
        beSureAdd(){
          if(this.radio === '1'){
            this.submit(this.text_1, '/');
          }else if(this.radio === '2'){
            this.submit(this.text_2, this.type_1_1);
          }else if(this.radio ==='3'){
            this.submit(this.text_3, this.type_2_2);
          }
        },
        submit(type,parent){
          this.$axios({
            url: 'add/commodityType',
            methods: 'get',
            params:{
              type: type,
              parent:parent
            }
          }).then(res =>{
            if(res.data.code === 200) {
              this.model = false;
              alert("提交成功");
            }
          });
        },
        addSun(index, row) {
          this.add_name1=row.name3;
          this.add_name2=row.name2;
          this.add_name3=row.name1;
          this.new_parent_id = row.typeid3;
          if(this.add_name2==='/' && this.add_name3 === '/') {
            this.add_rank = 2;
            this.add_name2='';
            this.model3 = true;
          } else if(this.add_name2 !='/' && this.add_name3 ==='/') {
            this.add_rank = 3;
            this.add_name3='';
            this.model3 = true;
          }else{
            alert("已是三级类型，不得添加子类");
          }
        },
        beSureAddSun() {
          var name;
          if(this.add_rank === 2)
            name = this.add_name2;
          else if(this.add_rank === 3)
            name = this.add_name3;
          this.$axios({
            url: 'add/sunCommodityType',
            methods: 'get',
            params: {
              name: name,
              parentid: this.new_parent_id,
            }
          }).then(res => {
            if(res.data.code === 200) {
              this.model3 = false;
              alert("添加子类型成功");
            }
          })
        },
        closeModel(){
          this.model = false;
        },
        closeModel2(){
          this.model2 = false;
        },
        closeModel3(){
          this.model3 = false;
        }
      },
      watch: {
        type_2_1() {
          var name = this.type_2_1;
          this.getTwoTypeList(name);
        },
        type_name1() {
          var name = this.type_2_1;
          this.getTwoTypeList(name);
            this.type_name2 = '';
            this.$axios({
              url: 'query/twoCommodityType',
              methods: 'get',
              params: {
                parentName:name
              }
            }).then(res =>{
              if(res.data.code === 200) {
                this.type_name2 = res.data.data;
              }
            });
        },
        radio(){
          if(this.radio==='3' || this.radio ==='2'){
            this.getOneTypeList(0);
          }
        }
      }
    }

</script>

<style scoped>

</style>
