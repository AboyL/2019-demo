<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <cube-upload
      action="http://localhost:8333/upload"
      :simultaneous-uploads="1"
      :process-file="handleProcessFile"
    />
  </div>
</template>

<script>
import compress from './image'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      uploadFiles0: [],
      mimeTypes: ['image/png', 'image/jpeg'],
    }
  },
  methods: {
    handleProcessFile (file, next) {
      console.log('handleProcessFile')
      console.log(file);
      if(file.type==='image/gif'){
        next(file)
      }else{
        compress(file, {
          compress: {
            quality: 0.5,
          },
          type: 'file'
        }, next)
      }
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
