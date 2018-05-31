<template>
  <div class="category_box">
    <div class="category_title">
      <span>{{category}}</span>
      <span class="more">更多</span>
    </div>
    <div class="movie_item_box">
      <div class="movie_item" v-for='subject of subjects'>
        <p class="movie_img">
          <img v-bind:src="subject.images.large">
        </p>
        <p class="movie_title">{{subject.title}}</p>
        <p>
          <img class="star" v-for='(star,index) of subject.rating.star' v-bind:key='index' v-if='star === 1' src="@static/images/icon/star.png" />
          <img class="star" v-for='star of subject.rating.star' v-if='star === 0' src="@static/images/icon/none-star.png" />
          <span style="margin-left: 12px;">{{subject.rating.average}}</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['subjects', 'category']
  }

</script>
<style scoped>
  .category_box {
    padding: 10px;
    margin-bottom: 10px;
    background: #fff;
  }

  .category_title {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
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

  .movie_item>p {
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

  .star {
    width: 12px;
    height: 12px;
  }

</style>
