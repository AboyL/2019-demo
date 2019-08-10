<template>
  <div id="app">
    <!-- <Progress :progress="0.8"/> -->
    <Progress2 :progress="1"/>
  </div>
</template>

<script>
// import Progress from './components/Progress.vue'
import Progress2 from './components/Progress2.vue'

export default {
  name: 'app',
  components: {
    // Progress,
    Progress2
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
