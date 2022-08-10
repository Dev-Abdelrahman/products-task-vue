<template>
  
  <HeaderView/>
  <router-view/>

</template>

<script>
import HeaderView from '@/components/layout/HeaderView.vue'

export default {
  name: 'HomeView',
  components: {
    HeaderView
  }
}

</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  a {
    text-decoration: none;
  }
</style>
