<template>
  <div>
    <CategoryComponent v-for='(movieCategory,index) of movieCategorys' v-bind:key='index' :movieCategory='movieCategory' />
  </div>
</template>
<script>
  import CategoryComponent from '@/components/CategoryComponent'
  import API from '@static/js/api.js'
  import utils from '@static/js/utils.js'
  const api = API.api
  const addStarArray = utils.addStarArray


  export default {
    data() {
      return {
        movieCategorys: []
      }
    },
    created() {
      let _this = this

      // 对请求数据的处理
      function handleDataCallback(subjects, i) {
        let tempJson = {}
        tempJson['id'] = i
        tempJson['category'] = api[i].category
        tempJson['subjects'] = subjects
        addStarArray(subjects)
        _this.movieCategorys.push(tempJson)
      }

      // 循环遍历api中url，并发起跨域请求jsonp
      for (let i = 0; i < 3; i++) {
        let url = api[i].url + '?count=3'
        this.$http.jsonp(url, { callback: 'handleDataCallback' })
          .then(res => {
            handleDataCallback(res.data.subjects, i)
          })
      }
    },
    components: {
      CategoryComponent
    }
  }

</script>
<style scoped>
  /* .router_link {
    display: inline-block;
    width: 100%;
    color: inherit;
    text-decoration: none;
  }

  .category_page {
    background: #ccc;
  }

  .category_box {
    padding: 10px;
    margin-bottom: 10px;
    background: #fff;
  }

  .category_title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .more {
    color: #00cc00;
    font-weight: bold;
  }


  .movie_item_box {
    display: flex;
    justify-content: space-between;
  }

  .movie_item {
    width: 30%;
  }

  .movie_item p {
    margin-bottom: 10px;
  }

  .movie_img {
    height: 160px;
  }

  .movie_img>img {
    width: 100%;
    height: 100%;
  }

  .movie_title {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
*/

</style>
