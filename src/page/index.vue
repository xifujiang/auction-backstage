<template>
	<section class="index">
		<div class="visitor">
			<div class="totle-visitor visitor-card">
				<Card>
            <p slot="title">总访问数</p>
            <p>{{ vcount }}人</p>
            <a href="#" slot="extra">
                  <Icon type="person-stalker"></Icon>
            </a>
        </Card>
			</div>
			<div class="new-visitor visitor-card">
				<Card>
            <p slot="title">新访问数</p>
            <p>{{ newvcount }}人</p>
            <a href="#" slot="extra">
                  <Icon type="person"></Icon>
            </a>
        </Card>
			</div>
			<div class="totle-info visitor-card">
				<Card>
        <p slot="title">发布拍卖物数</p>
        <p>{{ count.commodityCount }}个</p>
        <a href="#" slot="extra">
              <Icon type="document-text"></Icon>
        </a>
    </Card>
			</div>
			<div class="not-deal visitor-card">
				<Card>
            <p slot="title">未处理拍卖物数</p>
            <p>{{ count.notDealCount }}个</p>
            <a href="#" slot="extra">
                  <Icon type="document"></Icon>
            </a>
        </Card>
			</div>
		</div>
    <br>
    <div class="visitor">
      <div class="totle-info visitor-card">
        <Card>
          <p slot="title">审核未通过商品数</p>
          <p>{{ count.notPassCount }}个</p>
          <a href="#" slot="extra">
            <Icon type="document-text"></Icon>
          </a>
        </Card>
      </div>
      <div class="totle-info visitor-card">
        <Card>
          <p slot="title">未开始竞拍商品数</p>
          <p>{{ count.notBeginCount}}个</p>
          <a href="#" slot="extra">
            <Icon type="document-text"></Icon>
          </a>
        </Card>
      </div>
      <div class="totle-info visitor-card">
        <Card>
          <p slot="title">正在竞拍商品数</p>
          <p>{{ count.biddingCount }}个</p>
          <a href="#" slot="extra">
            <Icon type="document-text"></Icon>
          </a>
        </Card>
      </div>
      <div class="totle-info visitor-card">
        <Card>
          <p slot="title">结束竞拍商品数</p>
          <p>{{ count.endCount }}个</p>
          <a href="#" slot="extra">
            <Icon type="document-text"></Icon>
          </a>
        </Card>
      </div>
    </div>
	</section>
</template>

<script>
	import axios from 'axios'
	export default {
		data() {
			return {
				username: 'risatoar',
        count:{},
				vcount: 59,
				newvcount: 30
				// icount: 66,
				// pcount: 25
			}
		},
    created() {
		  this.islogin();
		  this.getInfoCount();
    },
		mounted() {
			this.getInfoCount(),
			this.getPreviewCount()
		},
		methods: {
		  islogin() {
        let localStorage = window.localStorage;
        let adminInfo = localStorage.getItem('adminInfo');
        if(null === adminInfo) {
          this.$router.push("/sign");
        }
      },
			getInfoCount() {
          axios.get("/info/Count")
          .then(res=> {
              if(res.data.code === 200) {
                this.count = res.data.data;
              }
          })
          .catch(err=> {
              console.log(err)
          })
        }
		}
	}
</script>

<style scoped>
	.index {
		width: 100%;
		position: relative;
	}

	.visitor {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
	}

	.visitor-card {
		width: 20%;
	}

</style>
