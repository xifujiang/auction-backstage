<!--<template>-->
  <!--<div>-->
    <!--<el-table-->
      <!--:data="commodityList"-->
      <!--style="width: 80%">-->
      <!--&lt;!&ndash;拍卖物标题&ndash;&gt;-->
      <!--<el-table-column-->
        <!--prop="cname"-->
        <!--label="拍卖物标题"-->
        <!--sortable-->
        <!--width="200"-->
        <!--align='center'>-->
      <!--</el-table-column>-->
      <!--&lt;!&ndash;图片&ndash;&gt;-->
      <!--<el-table-column-->
        <!--label="图片"-->
        <!--width="100"-->
        <!--align='center'>-->
        <!--<template slot-scope="scope">-->
          <!--<img :src="scope.row.image" min-width="60" height="60" />-->
        <!--</template>-->
      <!--</el-table-column>-->
      <!--&lt;!&ndash;价格&ndash;&gt;-->
      <!--<el-table-column-->
        <!--prop="price"-->
        <!--label="初始价格"-->
        <!--width="80"-->
        <!--align='center'>-->
      <!--</el-table-column>-->
      <!--&lt;!&ndash;每次加价&ndash;&gt;-->
      <!--<el-table-column-->
        <!--prop="addprice"-->
        <!--label="每次加价"-->
        <!--width="80"-->
        <!--align='center'>-->
      <!--</el-table-column>-->
      <!--&lt;!&ndash;当前价格&ndash;&gt;-->
      <!--<el-table-column-->
        <!--prop="bidprice"-->
        <!--label="当前价格"-->
        <!--width="80"-->
        <!--align='center'>-->
      <!--</el-table-column>-->
      <!--<el-table-column-->
        <!--label="开始时间"-->
        <!--width="160"-->
        <!--align='center'>-->
        <!--<template slot-scope="scope">-->
          <!--&lt;!&ndash;<i class="el-icon-time"></i>&ndash;&gt;-->
          <!--<span style="margin-left: 10px">{{ scope.row.beginTime }}</span>-->
        <!--</template>-->
      <!--</el-table-column>-->
      <!--<el-table-column-->
        <!--label="结束时间"-->
        <!--width="160"-->
        <!--align='center'>-->
        <!--<template slot-scope="scope">-->
          <!--&lt;!&ndash;<i class="el-icon-time"></i>&ndash;&gt;-->
          <!--<span style="margin-left: 10px">{{ scope.row.endTime }}</span>-->
        <!--</template>-->
      <!--</el-table-column>-->
      <!--&lt;!&ndash;类型&ndash;&gt;-->
      <!--<el-table-column-->
        <!--prop="typeId"-->
        <!--label="类型"-->
        <!--width="150"-->
        <!--align='center'>-->
      <!--</el-table-column>-->
      <!--&lt;!&ndash;当前状态&ndash;&gt;-->
      <!--<el-table-column-->
        <!--prop="statu"-->
        <!--label="当前状态"-->
        <!--width="80"-->
        <!--align='center'>-->
      <!--</el-table-column>-->
      <!--&lt;!&ndash;品牌&ndash;&gt;-->
      <!--&lt;!&ndash;<el-table-column&ndash;&gt;-->
      <!--&lt;!&ndash;prop="brandName"&ndash;&gt;-->
      <!--&lt;!&ndash;label="品牌"&ndash;&gt;-->
      <!--&lt;!&ndash;width="100">&ndash;&gt;-->
      <!--&lt;!&ndash;</el-table-column>&ndash;&gt;-->
      <!--<el-table-column label="操作" width="150" align='center'>-->
        <!--<template slot-scope="scope">-->
          <!--<el-button-->
            <!--size="mini"-->
            <!--@click="handleEdit(scope.$index, scope.row)">编辑</el-button>-->
          <!--<el-button-->
            <!--size="mini"-->
            <!--type="danger"-->
            <!--@click="handleDelete(scope.$index, scope.row)">删除</el-button>-->
        <!--</template>-->
      <!--</el-table-column>-->
    <!--</el-table>-->
  <!--</div>-->
<!--</template>-->
<!--<script>-->
    <!--export default {-->
      <!--name: "seeCommodity",-->
      <!--data() {-->
        <!--return {-->
          <!--commodityList: []-->
        <!--}-->
      <!--},-->
      <!--created(){-->
        <!--this.getCommodity();-->
      <!--},-->
      <!--method: {-->
        <!--getCommodity(){-->

        <!--}-->
      <!--}-->
    <!--}-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->
