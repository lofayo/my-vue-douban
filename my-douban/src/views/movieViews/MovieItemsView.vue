<template>
  <!-- <div>hello</div> -->
  <div>
    <div class="movie_item_box">
      <ItemComponent v-for='(movieItem,index) of movieItems' :key='index' :movieItem='movieItem' />
    </div>
    <!-- <infinite-loading @infinite="infiniteHandler"></infinite-loading> -->
  </div>
</template>
<script>
  import InfiniteLoading from 'vue-infinite-loading'
  import ItemComponent from '@/components/ItemComponent'
  import API from '@static/js/api.js'
  const api = API.api

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
      ItemComponent,
      InfiniteLoading
    },
    created() {
      let categoryId = this.$route.params.id
      url = api[categoryId].url
      let queryUrl = url + '?start=' + requestStart
      this.$http.jsonp(queryUrl, { callback: 'callback' })
        .then(res => {
          this.movieItems = [...this.movieItems, ...res.data.subjects]
          addStarArray(this.movieItems)
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

</style>
