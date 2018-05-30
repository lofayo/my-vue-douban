<template>
  <div id="app">
    <movie-item v-for='(item,index) of movieCategory' v-bind:key='index' v-bind:subjects='item.subjects' v-bind:category='item.category' />
  </div>
</template>
<script>
  import movieItem from '@/components/movieItem'
  import API from '@/js/api.js'
  console.log(API)
  const api = API.api
  const addStarArray = API.addStarArray

  export default {
    name: 'App',
    data() {
      return {
        movieCategory: []
      }
    },
    created() {
      let _this = this

      function handleCallback(subjects, category) {
        let tempJson = {}
        tempJson['category'] = category
        tempJson['subjects'] = subjects
        addStarArray(subjects)
        _this.movieCategory.push(tempJson)
      }
      // let url = 'https://api.douban.com/v2/movie/in_theaters'
      for (let i = 0; i < 3; i++) {
        let url = api[i].url + '?count=3'
        this.$http.jsonp(url, { callback: 'handleCallback' })
          .then(res => {
            handleCallback(res.data.subjects, api[i].category)
          })
      }
    },
    components: {
      "movie-item": movieItem
    }
  }

</script>
<style>
  * {
    padding: 0;
    margin: 0;
  }

  #app {
    background: #ddd;
    font-size: 12px;
  }

</style>
