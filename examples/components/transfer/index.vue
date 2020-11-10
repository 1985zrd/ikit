<template>
  <div class="transfer">
    <Basic></Basic>
    <WithSearch></WithSearch>
    <Advanced></Advanced>
    <CustomRow></CustomRow>
    <MarkdownRender mdFileName="transfer"></MarkdownRender>
  </div>
</template>

<script>
import Basic from './component-collection/Basic'
import WithSearch from './component-collection/WithSearch'
import Advanced from './component-collection/Advanced'
import CustomRow from './component-collection/CustomRow'
export default {
  name: 'transfer-demo',
  data () {
    return {}
  },
  components: {
    Basic,
    WithSearch,
    Advanced,
    CustomRow
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.transfer {
}
</style>
