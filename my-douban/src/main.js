// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 1、导入vue-resource
import VueResource from 'vue-resource'
import App from './App'
// import router from './router'

// common css
import '@static/reset.css'


Vue.config.productionTip = false
// 2、不知道干啥的
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  components: { App },
  template: '<App/>'
})
