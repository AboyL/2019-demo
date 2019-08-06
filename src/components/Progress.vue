<template>
  <svg :height="200" :width="200" x-mlns="http://www.w3.org/200/svg">
    <circle
      :r="50"
      :cx="100"
      :cy="100"
      :stroke="'red'"
      :stroke-width="10"
      fill="none"/>
  </svg>
</template>
<script>
export default {
  name: 'Progress',
  props: {
    completeness: {
      type: Number,
      required: true,
    },
    progressOption: {
      type: Object,
      default: () => {},
    },
  },
  data () {
    return {
    }
  },
  computed: {
  },
}
</script>
<style scoped lang='stylus'>
</style>
