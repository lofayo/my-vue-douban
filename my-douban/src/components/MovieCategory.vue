<template>
  <div class="category_box">
    <div class="category_title">
      <span>{{category}}</span>
      <span class="more">更多</span>
    </div>
    <div class="movie_item_box">
      <div class="movie_item" v-for='subject of subjects'>
        <router-link class='router_link' to='/Subject'>
          <p class="movie_img">
            <img v-bind:src="subject.images.large">
          </p>
          <p class="movie_title">{{subject.title}}</p>
          <p>
            <img v-for='(item,index) in subject.rating.star' v-bind:key='index' v-bind:src="item === 1 ? '/static/images/icon/star.png' : '/static/images/icon/star.png'" alt="" @error='onImgError' class="star">
            <span style="margin-left: 12px;">{{subject.rating.average}}</span>
          </p>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['subjects', 'category'],
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
