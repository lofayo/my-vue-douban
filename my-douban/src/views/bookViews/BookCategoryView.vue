<template>
  <div>
    <div class="category_box" v-for='category of categories'>
      <div class="category_title">
        <span>{{category.category}}</span>
        <router-link :to='/bookItems/+category.id'><span class="more">更多</span></router-link>
      </div>
      <div class="movie_item_box">
        <div class="movie_item" v-for='item of category.subjects'>
          <router-link :to='/bookDetail/+item.id'>
            <p class="movie_img">
              <img v-bind:src="item.images.large">
            </p>
            <p class="movie_title">{{item.title}}</p>
            <p>
              <StarComponent :starArray='item.rating.star' />
              <span style="margin-left: 12px;">{{item.rating.average}}</span>
            </p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  // import CategoryComponent from '@/components/CategoryComponent'
  import API from '@static/js/api.js'
  import utils from '@static/js/utils.js'
  const bookApi = API.bookApi
  const addStarArray = utils.addStarArray


  export default {
    data() {
      return {
        categories: []
      }
    },
    components: {},
    created() {
      let _this = this

      // 循环遍历api中url，并发起跨域请求jsonp
      for (let i = 0; i < 3; i++) {
        let url = bookApi[i].url + '&count=3'
        this.$http.jsonp(url, { callback: 'handleDataCallback' })
          .then(res => {
            let tempJson = {}
            tempJson['id'] = i
            tempJson['category'] = bookApi[i].category
            tempJson['subjects'] = res.data.books
            _this.categories.push(tempJson)
          })
      }
    }
  }

</script>
<style scoped>
  .router_link {
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

</style>
