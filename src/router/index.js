import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../page/index.vue'
import LoginPage from '../page/login.vue'
import MyPage from '../page/my.vue'
import SettingPage from '../page/setting.vue'
import VisitPage from '../page/visit.vue'
import MangeInfoPage from '../page/info/manageinfo.vue'
import AddKnowledgePage from '../page/knowledge/addknowledge.vue'
import MangeKnowledgePage from '../page/knowledge/mangeknowledge.vue'
import AddLawPage from '../page/law/addlaw.vue'
import MangeLawPage from '../page/law/mangelaw.vue'
import MangePreviewPage from '../page/preview/mangepreview.vue'
import AddUserPage from '../page/user/adduser.vue'
import MangeUserPage from '../page/user/mangeuser.vue'
import DealCommodity from '../page/commodity/dealCommodity.vue'
import SeeCommodity from '../page/commodity/seeCommodity.vue'
import SeeCommodityType from '../page/commodity/seeCommodityType.vue'
import DealMember from '../page/commodity/dealMember.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {
      path: '/sign',
      component: LoginPage
    },
    {
      path: '/my',
      component: MyPage
    },
    ,
    {
      path: '/setting',
      component: SettingPage
    },
    {
      path: '/visit',
      component: VisitPage
    },
    {
      path: '/manageinfo',
      component: MangeInfoPage
    },
    {
      path: '/addknowledge',
      component: AddKnowledgePage
    },
    {
      path: '/manageknowledge',
      component: MangeKnowledgePage
    },
    {
      path: '/addlaws',
      component: AddLawPage
    },
    {
      path: '/managelaws',
      component: MangeLawPage
    },
    {
      path: '/managepreview',
      component: MangePreviewPage
    },
    {
      path: '/adduser',
      component: AddUserPage
    },
    {
      path: '/manageusers',
      component: MangeUserPage
    },
    {
      path: '/dealCommodity',
      component: DealCommodity
    },
    {
      path: '/seeCommodity',
      component: SeeCommodity
    },
    {
      path: '/seeCommodityType',
      component: SeeCommodityType
    },
    {
      path: '/dealMember',
      component: DealMember
    }
  ]
})
