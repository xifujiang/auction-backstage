<!--
layout全局组件
author：xifujiang
-->
<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-nav">
            <MenuItem name="1">
              <Icon type="ios-navigate"></Icon>
              首页
            </MenuItem>
            <MenuItem name="2">
              <Icon type="ios-keypad"></Icon>
              基础设置
            </MenuItem>
            <MenuItem name="3">
              <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
              <span>risatoar</span>
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Layout :style="{padding: '0 50px'}">
        <Content :style="{padding: '24px 0', minHeight: '280px', background: '#fff'}">
          <Layout>
            <Sider hide-trigger :style="{background: '#fff'}">
              <Menu :active-name="active" theme="light" width="auto" :open-names="open">
                <Submenu name="1">
                  <template slot="title">
                    <Icon type="ios-navigate"></Icon>
                    首页
                  </template>
                  <router-link to="/">
                    <MenuItem name="1-1" @click.native="Open('1-1','1')">网站数据</MenuItem>
                  </router-link>
                </Submenu>
                <Submenu name="2">
                    <template slot="title">
                      <Icon type="ios-analytics"></Icon>
                      拍卖管理
                    </template>
                    <!--<router-link to="/seeCommodity">-->
                      <!--<MenuItem name="2-1">查看商品</MenuItem>-->
                    <!--</router-link>-->
                    <router-link to="/dealCommodity">
                      <MenuItem name="2-1">处理商品</MenuItem>
                    </router-link>
                    <router-link to="/seeCommodityType">
                      <MenuItem name="2-2">查看商品类型</MenuItem>
                    </router-link>
                    <router-link to="/dealMember">
                      <MenuItem name="2-3">会员管理</MenuItem>
                    </router-link>
                  </Submenu>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="ios-analytics"></Icon>
                        拍卖公告
                    </template>
                    <router-link :to="{path:'/manageinfo'}">
                    <MenuItem name="3-1" @click.native="Open('3-1','3')">管理公告</MenuItem>
                    </router-link>
                </Submenu>
                <Submenu name="4">
                    <template slot="title">
                        <Icon type="ios-analytics"></Icon>
                        拍卖知识
                    </template>
                    <router-link to="/addknowledge">
                    <MenuItem name="4-1" @click.native="Open('4-1','4')">添加知识</MenuItem>
                    </router-link>
                    <router-link to="/manageknowledge">
                    <MenuItem name="4-2" @click.native="Open('4-2','4')">管理知识</MenuItem>
                    </router-link>
                </Submenu>
                <Submenu name="5">
                    <template slot="title">
                        <Icon type="ios-analytics"></Icon>
                        法律法规
                    </template>
                    <router-link to="/addlaws">
                    <MenuItem name="5-1" @click.native="Open('5-1','5')">添加法规</MenuItem>
                    </router-link>
                    <router-link to="/managelaws">
                    <MenuItem name="5-2" @click.native="Open('5-2','5')">管理法规</MenuItem>
                    </router-link>
                </Submenu>
                <Submenu name="6">
                    <template slot="title">
                        <Icon type="ios-analytics"></Icon>
                        用户管理
                    </template>
                    <router-link to="/adduser">
                    <MenuItem name="6-1">添加用户</MenuItem>
                    </router-link>
                    <router-link to="/manageusers">
                    <MenuItem name="6-2">管理用户</MenuItem>
                    </router-link>
                </Submenu>
              </Menu>
            </Sider>
            <Content :style="{padding: '24px', minHeight: '80vh', background: '#fff'}">
              <router-view/>
            </Content>
          </Layout>
        </Content>
      </Layout>
      <Footer class="layout-footer-center">Proudly By xifujiang Copyright © 2019. All rights reserved.</Footer>
    </Layout>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default{
	name: 'layout',
  data() {
    return {
    }
  },
	mounted() {
	},
  computed: {
    // 利用mapState简化从vuex取值操作
    ...mapState(['active','open'])
    // username() {
    //  return this.$store.state.username
    // },
    // isAdmin() {
    //  return this.$store.state.isAdmin
    // }
  },
	methods: {
    Open(str1,str2) {
      this.$store.commit("updateActive",str1)
      this.$store.commit("updateOpen",str2)
    }
	}
}
</script>
<style>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
  }
  .layout-footer-center{
    text-align: center;
  }
  html {
    font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    color: rgba(190 190 190,.8);
    margin:0;padding:0;
    word-spacing: 1px;
    cursor: pointer;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
  }

  a {
    color: inherit;
    -webkit-text-decoration-line: none;
    text-decoration-line: none;
  }

  a:link,a:visited,a:focus {
    text-decoration: none;
    outline: none;
  }

  p {
    text-decoration: none;
  }

  input,button,select,textarea{
    outline:none;
  }

  ul, li {
    list-style: none;
    margin:0;padding:0;
  }

  table {
    border-spacing: 0;
    border-collapse: collapse;
  }
</style>
