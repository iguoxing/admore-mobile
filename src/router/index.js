import Vue from 'vue'
import Router from 'vue-router'
const HomeIndex = resolve => require(['@/components/Admore/Index'], resolve) //广告官网-首页
const HomeIndexPhone = resolve => require(['@/components/Admore/Index_phone'], resolve) //广告官网-首页 移动版
//广告官网 移动版
const HomeMobileXCX = resolve => require(['@/components/Admore/Mobile/Xcx'], resolve) //广告官网 移动版  小程序推广


Vue.use(Router)
export default new Router({
    // 选中状态
    linkActiveClass: 'active',
    mode: 'history',
    routes: [
        // 广告官网移动版
        {path: '/',component: HomeMobileXCX}
    ]
})

// 创建根实例
// new Vue({
//   el: '#example',

// })