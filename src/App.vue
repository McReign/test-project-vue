<template>
  <div id="app">
    <main-header/>
    <div>
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    'main-header': Header
  }
}
</script>

<style>
#app, body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
}

#app {
  padding-bottom: 40px;
}
</style>
