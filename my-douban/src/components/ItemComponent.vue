<template>
  <div class="movie_item">
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
</template>
<script>
  import StarComponent from '@/components/StarComponent'
  export default {
    props: ['item'],
    components: {
      StarComponent
    },
    methods: {
      onImgError(e) {
        e.target.src = '/static/images/lost.jpg'
      }
    }
  }

</script>
<style scoped>
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
