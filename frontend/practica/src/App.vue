<template>
  <div id="app">
    <div class="container-fluid">
      <pp-header></pp-header>
    </div>

    <div class="container">
      <pp-home></pp-home>
    </div>
    
    <div class="container">
      <pp-new-article></pp-new-article>
    </div>

    <div class="container">
      <pp-portada></pp-portada>
    </div>
    <div class="container">
      <pp-nuevas></pp-nuevas>
    </div>
    <div class="container">
      <pp-articulos></pp-articulos>
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
import Portada from './components/portada.vue'
import Nuevas from './components/Nuevas.vue'
import Articulos from './components/Articulos.vue'

// import NewArticle from './components/NewArticle.vue'


export default {
  components: {
    ppHeader: Header,
    ppHome: Home,
    ppFooter: Footer,
    ppPortada: Portada,
    ppNuevas: Nuevas,
    ppArticulos: Articulos
  }
}
</script>

<style>
#app {
  
}
</style>
