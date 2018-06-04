<template>
  <span>
    <img v-for='(star,index) in starArray' v-bind:key='index' v-bind:src="star === 1 ? '/static/images/icon/star.png' : '/static/images/icon/none-star.png'" alt="" @error='onImgError' class="star">
    </span>
</template>
<script>
  export default {
    props: ['starArray'],
    methods: {
      onImgError(e) {
        e.target.src = '/static/images/lost.jpg'
      }
    }
  }

</script>
<style scoped>


</style>
