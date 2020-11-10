<template>
  <div class="progress">
    <Basic></Basic>
    <CircleDemo></CircleDemo>
    <Small></Small>
    <SmallCircle></SmallCircle>
    <DynamicCircle></DynamicCircle>
    <CustomText></CustomText>
    <Dynamic></Dynamic>
    <Dashboard></Dashboard>
    <Piecewise></Piecewise>
    <StrokeLinkCap></StrokeLinkCap>
    <MarkdownRender mdFileName="progress"></MarkdownRender>
  </div>
</template>

<script>
import Basic from './component-collection/Basic'
import CircleDemo from './component-collection/Circle'
import CustomText from './component-collection/CustomText'
import Dashboard from './component-collection/Dashboard'
import Dynamic from './component-collection/Dynamic'
import DynamicCircle from './component-collection/DynamicCircle'
import Piecewise from './component-collection/Piecewise'
import Small from './component-collection/Small'
import SmallCircle from './component-collection/SmallCircle'
import StrokeLinkCap from './component-collection/StrokeLinkCap'
export default {
  name: 'progress-demo',
  data () {
    return {}
  },
  components: {
    Basic,
    CircleDemo,
    CustomText,
    Dashboard,
    Dynamic,
    DynamicCircle,
    Piecewise,
    Small,
    SmallCircle,
    StrokeLinkCap
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.progress {
}
</style>
