<template>
  <!-- <div>hello</div> -->
  <div class="movie_item_box">
    <div class="movie_item" v-for='(movieItem,index) of movieItems' :key='index'>
      <router-link class='router_link' :to='/movieDetail/+movieItem.id' append>
        <p class="movie_img">
          <img v-bind:src="movieItem.images.large">
        </p>
        <p class="movie_title">{{movieItem.title}}</p>
        <p>
          <StarComponent :starArray='movieItem.rating.star' />
          <span style="margin-left: 12px;">{{movieItem.rating.average}}</span>
        </p>
      </router-link>
    </div>
    <!-- <infinite-loading @infinite="infiniteHandler"></infinite-loading> -->
  </div>
</template>
<script>
  import InfiniteLoading from 'vue-infinite-loading'
  import StarComponent from '@/components/StarComponent'
  import API from '@static/js/api.js'
  const bookApi = API.bookApi

  import utils from '@static/js/utils.js'
  const addStarArray = utils.addStarArray

  let url = ''
  let requestStart = 0

  export default {
    data() {
      return {
        movieItems: []
      }
    },
    components: {
      StarComponent,
      InfiniteLoading
    },
    created() {
      let categoryId = this.$route.params.id
      url = bookApi[categoryId].url
      console.log(url)

      this.$http.jsonp(url, { callback: 'callback' })
        .then(res => {

          this.movieItems = res.data.books
        })
    },
    methods: {
      // infiniteHandler($state) {
      //   setTimeout(() => {
      //     let categoryId = this.$route.params.id
      //     url = api[categoryId].url
      //     let queryUrl = url + '?start=' + requestStart
      //     this.$http.jsonp(queryUrl, { callback: 'callback' })
      //       .then(res => {
      //         this.movieItems = [...this.movieItems, ...res.data.subjects]
      //         addStarArray(this.movieItems)
      //       })
      //     $state.loaded();
      //   }, 2000);
      // }
    }
  }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .movie_item_box {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
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
