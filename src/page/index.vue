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
        <p>{{ icount }}个</p>
        <a href="#" slot="extra">
              <Icon type="document-text"></Icon>
        </a>
    </Card>
			</div>
			<div class="new-info visitor-card">
				<Card>
            <p slot="title">未处理拍卖物数</p>
            <p>{{ pcount }}个</p>
            <a href="#" slot="extra">
                  <Icon type="document"></Icon>
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
				vcount: 59,
				newvcount: 30,
				icount: 66,
				pcount: 25
			}
		},
		mounted() {
			this.getInfoCount(),
			this.getPreviewCount()
		},
		methods: {
			getInfoCount() {
          axios.get("/info/Count")
          .then(res=> {
              this.icount = res.data.result.count
          })
          .catch(err=> {
              console.log(err)
          })
        },
        getPreviewCount() {
            axios.get("/preview/Count")
            .then(res=> {
                this.pcount = res.data.result.count
            })
            .catch(err=> {
                console.log(err)
            })
        },
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
