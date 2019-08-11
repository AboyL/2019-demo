<template>
  <div class="hello" id="wrapperId">
    <h1>{{ msg }}</h1>
    <div class="fragment">占位</div>
    <div class="input-wrapper-1">
      <div class="input-wrapper-2">
        <input type="text" v-model="testValue" @focus="handleTestInputFocus">
      </div>
    </div>
    <div class="fragment">占位</div>
    <div class="fragment">占位</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      testValue: 'z',
      wrapperId: 'wrapperId'
    }
  },
  methods: {
    handleTestInputFocus () {
      let activeElement = document.activeElement
      let offsetTop = activeElement.offsetTop
      let offsetParent = activeElement.offsetParent
      if (activeElement === document.body) {
        return
      }
      while (offsetParent.id !== this.wrapperId && offsetParent !== document.body) {
        offsetTop += offsetParent.offsetTop
        offsetParent = offsetParent.offsetParent
      }
      const viewTop = 20 // 不应该让光标紧贴header 这样体验依旧不好
      document.getElementById(this.wrapperId).scrollTop = offsetTop - viewTop
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  height: 300px;
  overflow: auto;
  background: #ff7f50;
}
.fragment {
  height: 200px;
}
.input-wrapper-1 {
  padding: 30px;
}
.input-wrapper-2 {
  padding: 20px;
}
</style>
