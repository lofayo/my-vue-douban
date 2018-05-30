import Vue from 'vue'
import Router from 'vue-router'
// 配置于webpack.base.conf.js
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  }]
})
