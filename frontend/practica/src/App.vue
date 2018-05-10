<template>
  <div id="app">
    <div class="container">
      <pp-header></pp-header>
    </div>

    <div class="container">
      <pp-home></pp-home>
    </div>
    
<!--    <div class="container">
      <pp-new-article></pp-new-article>
    </div>
-->

    <div class="container">
      <pp-footer></pp-footer>
    </div>
  </div>
</template>

<script>

import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer.vue'

// import NewArticle from './components/NewArticle.vue'


export default {
  components: {
    ppHeader: Header,
    ppHome: Home,
    ppFooter: Footer,

//    ppNewArticle: NewArticle
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
