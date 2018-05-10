<template>
  <div >
    <pp-comments></pp-comments>
  </div>
</template>

<script>

import Comments from './Comment'

export default {
  components: {
    ppComments: Comments,
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
