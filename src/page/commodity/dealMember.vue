<template>
  <div>
    <h1>会员处理</h1>
    <el-button type="info" @click="openModel()">添加</el-button>
    <div>
      <el-table
        :data="memberRule"
        style="width: 100%">
        <el-table-column prop="memberid" label="序号" width="200" align='center'></el-table-column>
        <el-table-column prop="rank" label="会员等级" width="200" align='center'></el-table-column>
        <el-table-column prop="cautionmoney" label="保证金" width="200" align='center'></el-table-column>
        <el-table-column prop="amount" label="可投标件数" width="200" align='center'></el-table-column>
        <el-table-column prop="pricepremiss" label="单次金额限制" width="200" align='center'></el-table-column>
        <el-table-column prop="premiss" label="出价账号" width="200" align='center'></el-table-column>
        <el-table-column label="审核" width="400" align='center'>
          <template slot-scope="scope">
            <el-button size="mini" @click="edit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="delMember(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <Modal v-model="model" width="640">
      <p slot="header">
        <span>添加会员规则</span>
      </p>
      <div>
        <el-form :model="newMember">
          <el-form-item prop="rank" label="会员等级">
            <el-input type="text" v-model="newMember.rank"></el-input>
          </el-form-item>
          <el-form-item prop="cautionmoney" label="保证金">
            <el-input-number size="medium" v-model="newMember.cautionmoney"></el-input-number>
          </el-form-item>
          <el-form-item prop="amount" label="可投标件数">
            <el-input-number size="medium" v-model="newMember.amount"></el-input-number>
          </el-form-item>
          <el-form-item prop="pricepremiss" label="单次金额限制">
            <el-input-number size="medium" v-model="newMember.pricepremiss"></el-input-number>
          </el-form-item>
          <el-form-item prop="premiss" label="出价账号">
            <el-input type="text" v-model="newMember.premiss"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div slot="footer">
        <Button type="primary" size="large" long @click="addMember()" style="width: 30%">确定</Button>
        <Button type="Ghost" size="large" long @click="closeModel()" style="width: 30%">取消</Button>
      </div>
    </Modal>
    <Modal v-model="model2" width="640">
      <p slot="header">
        <span>修改会员规则</span>
      </p>
      <div>
        <el-form :model="newMember">
          <el-form-item prop="rank" label="会员等级">
            <el-input type="text" v-model="newMember.rank"></el-input>
          </el-form-item>
          <el-form-item prop="cautionmoney" label="保证金">
            <el-input-number size="medium" v-model="newMember.cautionmoney"></el-input-number>
          </el-form-item>
          <el-form-item prop="amount" label="可投标件数">
            <el-input-number size="medium" v-model="newMember.amount"></el-input-number>
          </el-form-item>
          <el-form-item prop="pricepremiss" label="单次金额限制">
            <el-input-number size="medium" v-model="newMember.pricepremiss"></el-input-number>
          </el-form-item>
          <el-form-item prop="premiss" label="出价账号">
            <el-input type="text" v-model="newMember.premiss"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div slot="footer">
        <Button type="primary" size="large" long @click="beSureAdd()" style="width: 30%">确定</Button>
        <Button type="Ghost" size="large" long @click="closeModel()" style="width: 30%">取消</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
    export default {
      name: "",
      data() {
        return {
          memberRule: [],
          newMember: {},
          editMember: {},
          model: false,
          model2: false

        }
      },
      created() {
        this.listMember();
      },
      methods: {
        openModel() {
          this.model = true;
        },
        openModel2() {
          this.model2 = true;
        },
        closeModel() {
          this.model = false;
        },
        closeModel2() {
          this.model2 = false;
        },
        listMember() {
          this.$axios({
            url: '/list/member',
            methods: 'get'
          }).then(res=>{
            if(res.data.code === 200) {
              this.memberRule = res.data.data;
            }
          });
        },
        addMember() {
          this.$axios({
            url: '/add/member',
            methods: 'post',
            data: newMember
          }).then(res => {
            if(res.data.code === 200) {
              alert('添加成功');
            }
          })
        },
        editMember() {
          this.$axios({
            url: '/edit/member',
            methods: 'post',
            data: editMember
          }).then(res => {
            if(res.data.code === 200) {
              alert('修改成功');
            }
          })
        },
        delMember(index,row) {
          this.$axios({
            url: '/del/member',
            methods: 'get',
            params: {
              memberid:row.memberid
            }
          }).then(res => {
            if(res.data.code === 200) {
              alert('删除成功');
            }
          })
        }
      }

    }
</script>

<style scoped>

</style>
