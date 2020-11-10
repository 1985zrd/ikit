
<template>
  <div class="backTop">
    <div class="content">
      <Basic></Basic>
      <CustomStyles></CustomStyles>
    </div>
    <MarkdownRender mdFileName="backTop"></MarkdownRender>
  </div>
</template>

<script>
import Basic from './component-collection/Basic'
import CustomStyles from './component-collection/CustomStyles'
export default {
  name: 'backTop-demo',
  data () {
    return {}
  },
  components: { Basic, CustomStyles },
  methods: {}
}
</script>

<style lang="scss" scoped>
.backTop .content{
  min-height: 800px;
}
</style>
