<template>
  <div class="autoComplete">
    <Basic></Basic>
    <SearchIdentifiedCategory></SearchIdentifiedCategory>
    <CustomInput></CustomInput>
    <IgnoreCase></IgnoreCase>
    <CustomOption></CustomOption>
    <SearchUncertainzCategory></SearchUncertainzCategory>
    <MarkdownRender mdFileName="autoComplete"></MarkdownRender>
  </div>
</template>

<script>
import Basic from './component-collection/Basic'
import SearchIdentifiedCategory from './component-collection/SearchIdentifiedCategory'
import CustomInput from './component-collection/CustomInput'
import IgnoreCase from './component-collection/IgnoreCase'
import CustomOption from './component-collection/CustomOption'
import SearchUncertainzCategory from './component-collection/SearchUncertainzCategory'
export default {
  name: 'autoComplete-demo',
  data () {
    return {}
  },
  components: { Basic, SearchIdentifiedCategory, CustomInput, IgnoreCase, CustomOption, SearchUncertainzCategory },
  methods: {}
}
</script>

<style lang="scss" scoped>
.autoComplete {
}
</style>
