<template>
  <svg
    :height="option.size"
    :width="option.size"
    x-mlns="http://www.w3.org/200/svg"
  >
    <circle
      :r="option.radius"
      :cx="option.cx"
      :cy="option.cy"
      :stroke="option.backColor"
      :stroke-width="option.strokeWidth"
      fill="none"
    />
    <circle
      :r="option.radius"
      :cx="option.cx"
      :cy="option.cy"
      :stroke="option.progressColor"
      :stroke-dasharray="arcLength"
      :stroke-width="option.strokeWidth"
      fill="none"
      transform="rotate(-90)"
      transform-origin="center"
      stroke-linecap="round"
    />
  </svg>
</template>
<script>
export default {
  name: 'Progress',
  props: {
    progress: {
      type: Number,
      required: true,
    },
    progressOption: {
      type: Object,
      default: () => { },
    },
  },
  data () {
    return {
    }
  },
  computed: {
    arcLength () {
      let circleLength = Math.floor(2 * Math.PI * this.option.radius)
      let progressLength = this.progress * circleLength
      return `${progressLength},100000000`
    },
    option () {
      // 所有进度条的可配置项
      let baseOption = {
        radius: 100,
        strokeWidth: 20,
        backColor: 'red',
        progressColor: 'yellow',
      }
      Object.assign(baseOption, this.progressOption)
      // 中心位置自动生成
      baseOption.cy = baseOption.cx = baseOption.radius + baseOption.strokeWidth
      baseOption.size = (baseOption.radius + baseOption.strokeWidth) * 2
      return baseOption
    },
  },
}
</script>
