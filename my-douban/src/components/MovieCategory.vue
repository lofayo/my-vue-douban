<template>
  <div>
    <div v-for='(item,index) of movieCategory' v-bind:key='index'>
      <div class="category_box">
        <div class="category_title">
          <span>{{item.category}}</span>
          <span class="more">更多</span>
        </div>
        <div class="movie_item_box">
          <div class="movie_item" v-for='subject of item.subjects'>
            <router-link class='router_link' :to='/subject/+subject.id'>
              <p class="movie_img">
                <img v-bind:src="subject.images.large">
              </p>
              <p class="movie_title">{{subject.title}}</p>
              <p>
                <img v-for='(item,index) in subject.rating.star' v-bind:key='index' v-bind:src="item === 1 ? '/static/images/icon/star.png' : '/static/images/icon/none-star.png'" alt="" @error='onImgError' class="star">
                <span style="margin-left: 12px;">{{subject.rating.average}}</span>
              </p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import API from '@static/js/api.js'
  import utils from '@static/js/utils.js'
  const api = API.api
  const addStarArray = utils.addStarArray


  export default {
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
    methods: {
      onImgError(e) {
        e.target.src = '/static/images/lost.jpg'
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
