<template>
  <div class="category_box">
    <div class="category_title">
      <span>{{category.category}}</span>
      <router-link :to='/bookItems/+category.id' append><span class="more">更多</span></router-link>
    </div>
    <div class="movie_item_box">
      <ItemComponent v-for='(item,index) of category.subjects' :key='index' :item='item' />
    </div>
  </div>
</template>
<script>
  import ItemComponent from '@/components/ItemComponent'
  export default {
    props: ['category'],
    components: {
      ItemComponent
    }
  }

</script>
<style scoped>
  .category_page {
    background: #ccc;
  }

  .category_box {
    padding: 10px;
    background: #fff;
    border-bottom: 10px solid #eee;
  }

  .category_title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
  }

  .more {
    color: #00cc00;
    font-weight: bold;
  }

  .movie_item_box {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

</style>
