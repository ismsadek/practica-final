<template>
  <div id="app">
    <div class="container">
      <pp-header></pp-header>
    </div>

    <div class="container">
      <pp-home></pp-home>
    </div>

    <div class="container">
      <pp-footer></pp-footer>
    </div>
  </div>
</template>

<script>

import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer.vue'


export default {
  components: {
    ppHeader: Header,
    ppHome: Home,
    ppFooter: Footer
  }
}
</script>

<style>
#app {
  
}
</style>
