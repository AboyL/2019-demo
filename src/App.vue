<template>
  <div id="app">
    <Progress :progress="0.8"/>
  </div>
</template>

<script>
import Progress from './components/Progress.vue'

export default {
  name: 'app',
  components: {
    Progress
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
