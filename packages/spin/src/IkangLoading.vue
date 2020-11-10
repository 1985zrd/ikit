<template>
  <div :style="style" ref="lavContainer"></div>
</template>

<script>
import lottie from 'lottie-web'
import animationData from '../resource/ikang-loading.json'
export default {
  name: 'ikang-loading',
  props: {
    width: [Number, String]
  },
  data () {
    return {
      style: {
        display: 'inline-block',
        verticalAlign: 'middle',
        width: this.width ? `${this.width}px` : '72px',
        height: this.width ? `${this.width}px` : '72px',
        overflow: 'hidden',
        margin: '0 auto'
      }
    }
  },
  mounted () {
    lottie.loadAnimation({
      container: this.$refs.lavContainer,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData
    })
  }
}
</script>
