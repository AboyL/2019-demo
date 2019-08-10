<template>
  <svg :height="option.size" :width="option.size" x-mlns="http://www.w3.org/200/svg">
    <defs>
      <linearGradient x1="1" y1="0" x2="0" y2="0" id="outGradient">
        <stop offset="0%" :stop-color="arcOption.outArcStartColor" />
        <stop offset="100%" :stop-color="arcOption.outArcEndColor" />
      </linearGradient>
      <linearGradient x1="1" y1="0" x2="0" y2="0" id="innerGradient">
        <stop offset="0%" :stop-color="arcOption.innerArcStartColor" />
        <stop offset="100%" :stop-color="arcOption.innerArcEndColor" />
      </linearGradient>
    </defs>
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
      stroke="url('#innerGradient')"
      :stroke-width="option.strokeWidth"
      :stroke-dasharray="arcOption.innerArcLength"
      transform="rotate(-90)"
      transform-origin="center"
      fill="none"
      stroke-linecap="round"
    >
      <!-- <animate
        :to="arcOption.innerArcLength"
        begin="0s"
        :dur="option.durtion"
        from="0,1000000"
        attributeName="stroke-dasharray"
        fill="freeze"
      /> -->
    </circle>
    <circle
      :r="option.radius"
      :cx="option.cx"
      :cy="option.cy"
      stroke="url('#outGradient')"
      :stroke-width="option.strokeWidth"
      :stroke-dasharray="arcOption.outArcLength"
      fill="none"
      transform="rotate(-90)"
      transform-origin="center"
      stroke-linecap="round"
    />
  </svg>
</template>
<script>
export default {
  name: 'Progress2',
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
  computed: {
    arcOption () {
      let arcConfig = {}
      let circleLength = Math.floor(2 * Math.PI * this.option.radius)
      // 如果此时小于0.5 则只需要显示最外层的圆弧 里面的圆弧不需要画了
      if (this.progress < 0.5) {
        arcConfig.outArcLength = this.progress * circleLength
        arcConfig.outArcDur = this.option.durtion
        arcConfig.innerArcLength = 0
        arcConfig.innerArcDur = 0
      } else {
        arcConfig.outArcLength = 0.5 * circleLength
        arcConfig.outArcDur = this.option.durtion
        arcConfig.innerArcLength = this.progress * circleLength
        arcConfig.innerArcDur = this.option.durtion
      }
      const tansfromColor = arr => `rgb(${arr[0]},${arr[1]},${arr[2]})`
      arcConfig.outArcStartColor = tansfromColor(this.option.startColor)
      arcConfig.outArcEndColor = tansfromColor(this.option.startColor.map((color, index) => color + (this.option.endColor[index] - color) / 2))
      arcConfig.innerArcStartColor = tansfromColor(this.option.endColor)
      arcConfig.innerArcEndColor = tansfromColor(this.option.startColor.map((color, index) => color + (this.option.endColor[index] - color) / 2))
      return arcConfig
    },
    option () {
      // 所有进度条的可配置项
      let baseOption = {
        radius: 100,
        strokeWidth: 20,
        backColor: '#E6E6E6',
        endColor: [0, 0, 0],
        startColor: [255, 255, 255], // 用于渐变色的开始
        durtion: '1s',
        step: 100,
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
