
<template>
    <div class="localeProvider">
      <MarkdownRender mdFileName="localeProvider"></MarkdownRender>
      <Basic></Basic>
      <AllComponents></AllComponents>
    </div>
</template>

<script>
import Basic from './component-collection/Basic'
import AllComponents from './component-collection/AllComponents'
export default {
  name: 'localeProvider-demo',
  data () {
    return {}
  },
  components: {
    Basic,
    AllComponents
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.localeProvider{

}
</style>
