import Vue from 'vue'
import Router from 'vue-router'
// 配置于webpack.base.conf.js
import MovieCategory from '@/components/MovieCategory'
import Subject from '@/components/Subject'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/Subject',
    name: 'Subject',
    component: Subject
  }, {
    path: '/',
    name: 'MovieCategory',
    component: MovieCategory
  }]
})
