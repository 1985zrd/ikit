
<template>
  <div class="anchor">
    <Basic></Basic>
    <StaticPosition></StaticPosition>
    <CustomClick></CustomClick>
    <MarkdownRender mdFileName="anchor"></MarkdownRender>
  </div>
</template>

<script>
import Basic from './component-collection/Basic'
import StaticPosition from './component-collection/StaticPosition'
import CustomClick from './component-collection/CustomClick'
export default {
  name: 'anchor-demo',
  data () {
    return {}
  },
  components: {
    Basic,
    StaticPosition,
    CustomClick
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.anchor {
}
</style>
