<template>
  <div class="rate">
    <Basic></Basic>
    <HalfAStar></HalfAStar>
    <HasTextStar></HasTextStar>
    <Readonly></Readonly>
    <Clear></Clear>
    <CustomIcon></CustomIcon>
    <MarkdownRender mdFileName="rate"></MarkdownRender>
  </div>
</template>

<script>
import Basic from './component-collection/Basic'
import HalfAStar from './component-collection/HalfAStar'
import HasTextStar from './component-collection/HasTextStar'
import Readonly from './component-collection/Readonly'
import Clear from './component-collection/Clear'
import CustomIcon from './component-collection/CustomIcon'
export default {
  name: 'rate-demo',
  data () {
    return {}
  },
  components: {
    Basic,
    HalfAStar,
    HasTextStar,
    Readonly,
    Clear,
    CustomIcon
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.rate {
}
</style>
