<template>
  <div>
    <el-table
      :data="commodityList"
      style="width: 100%">
      <!--拍卖物标题-->
      <el-table-column
      prop="cname"
      label="拍卖物标题"
      width="200"
      align='center'>
    </el-table-column>
      <el-table-column
        prop="uname"
        label="拍卖用户"
        width="100"
        align='center'>
      </el-table-column>
      <!--价格-->
      <el-table-column
        prop="price"
        label="初始价格"
        width="80"
        align='center'>
      </el-table-column>
      <!--每次加价-->
      <el-table-column
        prop="addprice"
        label="每次加价"
        width="80"
        align='center'>
      </el-table-column>
      <el-table-column
        label="创建时间"
        width="160"
        align='center'>
        <template slot-scope="scope">
          <!--<i class="el-icon-time"></i>-->
          <span style="margin-left: 10px">{{ scope.row.createTime }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="开始时间"
        width="160"
        align='center'>
        <template slot-scope="scope">
          <!--<i class="el-icon-time"></i>-->
          <span style="margin-left: 10px">{{ scope.row.beginTime }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="结束时间"
        width="160"
        align='center'>
        <template slot-scope="scope">
          <!--<i class="el-icon-time"></i>-->
          <span style="margin-left: 10px">{{ scope.row.endTime }}</span>
        </template>
      </el-table-column>
      <!--类型-->
      <el-table-column
        prop="typeId"
        label="类型"
        width="150"
        align='center'>
      </el-table-column>
      <el-table-column label="审核" width="200" align='center'>
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="check(scope.$index, scope.row,0)">通过</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="check(scope.$index, scope.row,-2)">不通过</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
    export default {
      name: "dealCommodity",
      data() {
        return {
          commodityList: []
        }
      },
      inject: ['reload'],
      created() {
        this.getNotDealCommodity();
      },
      methods: {
        getNotDealCommodity(){
          this.$axios({
            url: 'commodity/notDeal',
            methods: 'get',
          }).then(res => {
            if(res.data.code === 200) {
              this.commodityList = res.data.data;
            }
          })
        },
        check(index, row, status) {
          this.$axios({
            url:'commodity/changeStatu',
            methods: 'get',
            params: {
              cid: row.cid,
              statu: status
            }
          }).then(res => {
            if(res.data.code === 200) {
              alert("审核成功");
              this.$router.go(0);
            }
          })
        }
      }
    }
</script>

<style scoped>

</style>
