<template>
  <div id="app">
    <MovieCategory v-for='(item,index) of movieCategory' v-bind:key='index' v-bind:subjects='item.subjects' v-bind:category='item.category' />
    <!-- <Subject /> -->
    <router-view></router-view>
  </div>
</template>
<script>
  import MovieCategory from '@/components/MovieCategory'
  import Subject from '@/components/Subject'
  import API from '@static/js/api.js'
  import utils from '@static/js/utils.js'
  const api = API.api
  const addStarArray = utils.addStarArray

  export default {
    name: 'App',
    data() {
      return {
        movieCategory: []
      }
    },
    created() {
      let _this = this

      // 对请求数据的处理
      function handleDataCallback(subjects, category) {
        let tempJson = {}
        tempJson['category'] = category
        tempJson['subjects'] = subjects
        addStarArray(subjects)
        _this.movieCategory.push(tempJson)
      }

      // 循环遍历api中url，并发起跨域请求jsonp
      for (let i = 0; i < 3; i++) {
        let url = api[i].url + '?count=3'
        this.$http.jsonp(url, { callback: 'handleDataCallback' })
          .then(res => {
            handleDataCallback(res.data.subjects, api[i].category)
          })
      }
    },

    components: {
      "MovieCategory": MovieCategory,
      "Subject": Subject,
    }
  }

</script>
<style>
  #app {
    background: #eee;
    font-size: 14px;
    letter-spacing: 2px;
  }

  .more {
    color: #00cc00;
    font-weight: bold;
    padding: 12px 0;
  }

  .star {
    width: 12px;
    height: 12px;
  }

</style>
