<template>
	<section id="mangelaw">
		<div class="mlaw-inner">
			<div class="title"><span>管理拍卖法规</span></div>
			<div class="addlaw">
				<router-link to="/addlaws">
				<Button type="info">添加拍卖公告</Button>
				</router-link>
			</div>
			<div class="law-list">
				<div>
			        <Table border :columns="columns" :data="data2"></Table>
			        <Page
                    :total="total"
                    :page-size="16"
                    simple
                    :current.sync="pagecount"
                    @on-change="showPageCount"
                    ></Page>
			    </div>
			</div>
		</div>
        <previewmodifydialog
                    :is-show="isPreviewMoDialog"
                    :modifydata="selectModify"
                    @on-close="closeDialog('isPreviewMoDialog')">
        </previewmodifydialog>
	</section>
</template>

<script>
    import axios from 'axios'
    import previewmodifydialog from '../../components/modifydialog/previewmodify.vue'
    export default {
      components: {
        previewmodifydialog,
      },
      data () {
        return {
          total: 1,
          pagecount: 1,
          isPreviewMoDialog: false,
          selectModify: {},
          columns: [
            {
              title: '作者',
              key: 'author',
              render: (h, params) => {
                return h('div', [
                  h('Icon', {
                    props: {
                        type: 'person'
                    }
                  }),
                  h('strong', params.row.author)
                ]);
              }
            },
            {
              title: '标题',
              key: 'title'
            },
            {
              title: '发布日期',
              key: 'date'
            },
            {
              title: '操作',
              key: 'action',
              width: 200,
              align: 'center',
              render: (h, params) => {
                return h('div', [
                  h('Button', {
                    props: {
                      type: 'primary',
                      size: 'small'
                    },
                    style: {
                      marginRight: '5px'
                    },
                    on: {
                      click: () => {
                        this.show(params.index)
                      }
                    }
                  }, '查看'),
                  h('Button', {
                    props: {
                      type: 'primary',
                      size: 'small'
                    },
                    style: {
                      marginRight: '5px'
                    },
                    on: {
                      click: () => {
                        this.getUserInfo(params.index)
                      }
                    }
                  }, '修改'),
                  h('Button', {
                    props: {
                      type: 'error',
                      size: 'small'
                    },
                    on: {
                      click: () => {
                        this.remove(params.index)
                      }
                    }
                  }, '删除')
                ]);
                }
              }
            ],
            data2: []
        }
      },
      mounted() {
        this.getList()
      },
      methods: {
        show (index) {
          this.$Modal.info({
            title: '公告信息',
            content: `作者：${this.data2[index].author}<br>标题：${this.data2[index].title}<br>发布日期：${this.data2[index].date}`
          })
        },
        remove (index) {
          let del = {
            delid: this.data2[index]._id
          }
          axios.post("/laws/del",del)
          .then(res=> {
            this.data2.splice(index, 1);
          })
          .catch(err =>{
          })
        },
        showInfoModify() {
          this.isPreviewMoDialog = true;
        },
        // 关闭弹出层
        closeDialog(attr) {
          console.log(attr)
          this.isPreviewMoDialog = false
        },
        getUserInfo(number) {
          let userInfoPost = {
            lawid: this.data2[number]._id
          }
          console.log(userInfoPost)
          axios.post("/law/detail",userInfoPost).then((res)=> {
            this.selectModify = res.data.result.list;
          }).catch((error)=> {
            console.log(error);
          });
          this.showInfoModify()
        },
         // 获取拍卖预告总条数
        getPageCount() {
          axios.get("/laws/Count")
          .then(res=> {
            this.total = res.data.result.count
          })
          .catch(err=> {
            console.log(err)
          })
        },
        // 页码切换回调
        showPageCount() {
          this.getList();
        },
        getList() {
          this.getPageCount()
          let Post = {
              pagecount: this.pagecount
          }
          axios.post("/laws/list",Post)
          .then(res=> {
              this.data2 = res.data.result.list
          })
        },
      }
    }
</script>

<style scoped>
	#mangelaw {
		width: 100%;
		height: 100%;
	}

	.mlaw-inner {
		width: 100%;
		height: 100%;
		background-color: #fff;
		font-size: 16px;
		display: flex;
		flex-flow: column wrap;
		justify-content: flex-start;
	}

	.title {
		font-weight: 550;
		color: #000;
		font-size: 20px;
		width: 100%;
		height: 40px;
		line-height: 40px;
	}

	.title::before {
		content: ".";
		width: 3px;
		height: 20px;
		background-color: #000;
		margin-right: 10px;
	}

	.addlaw {
		width: 100%;
		height: 50px;
		line-height: 50px;
		padding: 0 20px;
		background-color: rgba(235,238,245,.9);
	}


</style>
