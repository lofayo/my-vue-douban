<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    name: 'App',
  }

</script>
<style>
  #app {
    background: #eee;
    font-size: 14px;
    letter-spacing: 2px;
  }

  .more {
    color: #00cc00;
    font-weight: bold;
    padding: 12px 0;
  }

  .star {
    width: 12px;
    height: 12px;
  }

</style>
