import Vue from 'vue'
import Router from 'vue-router'
// 配置于webpack.base.conf.js
import HomeView from '@/views/HomeView'
import MovieCategoryView from '@/views/movieViews/MovieCategoryView'
import MovieItemsView from '@/views/movieViews/MovieItemsView'
import MovieDetailView from '@/views/movieViews/MovieDetailView'

import BookCategoryView from '@/views/bookViews/BookCategoryView'
import BookItemsView from '@/views/bookViews/BookItemsView'
import BookDetailView from '@/views/bookViews/BookDetailView'


Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/bookCategory'
  }, {
    path: '/category',
    component: MovieCategoryView
  }, {
    path: '/movieItems/:id',
    component: MovieItemsView
  }, {
    path: '/movieDetail/:id',
    component: MovieDetailView
  }, {
    path: '/bookCategory',
    component: BookCategoryView
  }, {
    path: '/bookItems/:id',
    component: BookItemsView
  }, {
    path: '/bookDetail/:id',
    component: BookDetailView
  }]
})
