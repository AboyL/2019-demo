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
      v-for="(item, index) in arcArr"
      :key="index"
      :r="option.radius"
      :cx="option.cx"
      :cy="option.cy"
      :stroke="item.color"
      :stroke-width="option.strokeWidth"
      fill="none"
      transform="rotate(-90)"
      transform-origin="center"
      stroke-linecap="round"
    >
      <animate
        :to="item.arcLength"
        begin="0s"
        :dur="option.durtion"
        from="0,1000000"
        attributeName="stroke-dasharray"
        fill="freeze"
      />
    </circle>
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
  computed: {
    arcArr () {
      let circleLength = Math.floor(2 * Math.PI * this.option.radius)
      let progressLength = this.progress * circleLength
      const step = this.option.step // 设置到100则已经比较难看出来颜色断层
      const gradientColor = (startRGB, endRGB, step) => {
        let startR = startRGB[0]
        let startG = startRGB[1]
        let startB = startRGB[2]
        let endR = endRGB[0]
        let endG = endRGB[1]
        let endB = endRGB[2]
        let sR = (endR - startR) / step // 总差值
        let sG = (endG - startG) / step
        let sB = (endB - startB) / step
        let colorArr = []
        for (let i = 0; i < step; i++) {
          let color = `rgb(${sR * i + startR},${sG * i + startG},${sB * i + startB})`
          colorArr.push(color)
        }
        return colorArr
      }
      let colorArr = gradientColor(this.option.startColor, this.option.endColor, step)
      // 计算每个步进中的弧长
      let arcLengthArr = colorArr.map((color, index) => ({
        arcLength: `${index * (progressLength / step)},100000000`,
        color: color
      }))
      arcLengthArr.reverse()
      return arcLengthArr
    },
    option () {
      // 所有进度条的可配置项
      let baseOption = {
        radius: 100,
        strokeWidth: 20,
        backColor: '#E6E6E6',
        startColor: [249, 221, 180],
        endColor: [238, 171, 86],
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
