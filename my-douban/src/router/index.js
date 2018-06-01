import Vue from 'vue'
import Router from 'vue-router'
// 配置于webpack.base.conf.js
import Home from '@/components/Home'
import MovieCategory from '@/components/MovieCategory'
import Subject from '@/components/Subject'

Vue.use(Router)

// export default new Router({
//   routes: [{
//     path: '/',
//     redirect: '/pages/'
//   }, {
//     path: '/pages',
//     component: Home,
//     children: [{
//       path: '',
//       redirect: '/pages/category'
//     }, {
//       path: 'category',
//       name: 'MovieCategory',
//       component: MovieCategory,
//     }]
//   }, {
//     path: '/subject/:id',
//     name: 'Subject',
//     component: Subject
//   }]
// })


export default new Router({
  routes: [{
    path: '/',
    redirect: '/category'
  }, {
    path: '/category',
    component: MovieCategory
  }, {
    path: '/subject/:id',
    component: Subject
  }]
})
