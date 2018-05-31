<template>
  <div class="subject_box" v-if='!isEmptySubject'>
    <div class="subject_header" v-bind:style="{backgroundImage: 'url('+subject.images.large+')'}">
      <div class="header_content">
        <div class="header_content_img">
          <img v-bind:src="subject.images.large" alt="">
        </div>
        <div class="header_content_text">
          <p>{{subject.title}}</p>
          <p class="score">
            <span>{{subject.rating.average}}</span>
            <span style="display: flex;flex-direction: column;justify-content:space-between;">
              <i>
                <img v-for='(item,index) in subject.rating.star' v-bind:key='index' v-bind:src="item === 1 ? '../../static/images/icon/star.png' : '../../static/images/icon/star.png'" alt="">
              </i>
              <i style="margin-top:12px;">
                10000人评价
              </i>
            </span>
          </p>
        </div>
      </div>
    </div>
    <div class="subject_content">
      <div class="content_item">
        <p class="item_title">影片详情：</p>
        <div class="movie_info">
          <p>
            <span v-for='(item,index) in subject.countries'>{{item}}/</span>
            <span v-for='(item,index) in subject.languages'>{{item}}/</span>
            <span v-for='(item,index) in subject.genres'>{{item}}/</span>
            <span>{{subject.year}}</span>
          </p>
          <p>导演：
            <span v-for='item in subject.directors'>{{item.name}}/</span>
          </p>
          <p>主演：
            <span v-for='item in subject.casts'>{{item.name}}/</span>
          </p>
          <p>上映日期：
            <span v-for='item in subject.pubdates'>{{item}}/</span>
          </p>
          <p>片长：
            <span v-for='item in subject.durations'>{{item}}/</span>
          </p>
        </div>
      </div>
      <div class="content_item">
        <p class="item_title">主演：</p>
        <div class="cast">
          <div class="cast_item" v-for='cast in subject.casts'>
            <img :src="cast.avatars.large" v-bind:error.native='onImgError' alt="">
            <span>{{cast.name}}</span>
            <span>{{cast.name_en}}</span>
          </div>
        </div>
      </div>
      <div class="content_item">
        <p class="item_title">电影剧情：</p>
        <div class="content">
          {{subject.summary}}
        </div>
      </div>
      <div class="content_item">
        <p class="item_title">电影剧照：</p>
        <div>
          <div class="movie_photos">
            <img v-for='photo in subject.photos' :src="photo.image" alt="">
          </div>
          <p class="more">更多剧照...</p>
        </div>
      </div>
      <div class="content_item">
        <p class="item_title">评论：</p>
        <div>
          <div class="comment_item" v-for='comment in subject.popular_comments'>
            <div class="comment_author">
              <img :src="comment.author.avatar" alt="">
              <span>{{comment.author.name}}</span>
              <span>{{comment.created_at}}</span>
            </div>
            <div class="content">
              {{comment.content}}
            </div>
          </div>
          <p class="more">更多评论：</p>
        </div>
      </div>
      <div class="content_item">
        <p class="item_title">影评：</p>
        <div>
          <div class="comment_item" v-for='review in subject.popular_reviews'>
            <div class="comment_author">
              <img :src="review.author.avatar" alt="">
              <span>{{review.author.name}}</span>
            </div>
            <div class="comment_title">
              {{review.title}}
            </div>
            <div class="content">
              {{review.summary}}
            </div>
          </div>
          <p class="more">更多影评：</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import utils from '@static/js/utils.js'
  const addStarArray = utils.addStarArray
  const isEmptyJson = utils.isEmptyJson

  export default {
    data() {
      return {
        subject: {},
        isEmptySubject: true,
        onImgError: 'this.src="' + require('../../static/images/me.jpg') + '"'
      }
    },
    created() {
      let _this = this

      function handleDataCallback(subject) {
        addStarArray(subject)
        _this.subject = subject
        _this.isEmptySubject = false
      }

      let url = 'https://douban.uieee.com/v2/movie/subject/27133303'
      this.$http.jsonp(url, { callback: 'handleDataCallback' })
        .then(res => {
          handleDataCallback(res.data)
        })

    }
  }

</script>
<style scoped>
  .subject_header {
    width: 100%;
    height: 240px;
    position: relative;
    margin-bottom: 12px;
  }

  .subject_header::before {
    content: '';
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.5;
  }

  .header_content {
    position: absolute;
    left: 24px;
    top: 72px;
    display: flex;
    z-index: 2;
    color: #fff;
  }

  .header_content_img {
    width: 120px;
    height: 180px;
  }

  .header_content_img>img {
    width: 100%;
    height: 100%;
  }

  .header_content_text {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-left: 24px;
  }

  .score {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
  }

  .subject_content {
    padding: 12px;
    color: #666;
  }

  .content_item {
    margin-bottom: 12px;
  }

  .item_title {
    color: #000;
    font-size: 16px;
    font-weight: bold;
    margin: 20px 0 12px;
  }

  .movie_info>p {
    padding: 12px 0;
  }

  .cast {
    display: flex;
    justify-content: space-between;
  }

  .cast_item {
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .cast_item>img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }

  .cast_item>span {
    margin-top: 12px;
  }

  .content {
    text-indent: 2em;
    line-height: 1.5;
  }

  .movie_photos {
    width: 100%;
    display: flex;
    overflow: auto;
    padding: 12px 0;
  }

  .movie_photos>img {
    flex: none;
    width: 48px;
    height: 72px;
    margin-right: 12px;
  }

  .comment_item {
    padding: 12px 0;
    border-bottom: 1px dotted #000;
  }

  .comment_author {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
  }

  .comment_author>* {
    margin: auto 0;
  }


  .comment_author>img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }

  .comment_title {
    width: 80%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #000;
    font-weight: bold;
    margin-bottom: 12px;
  }

</style>
