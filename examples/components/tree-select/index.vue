<template>
  <div class="treeSelect">
    <Basic></Basic>
    <CanCheck></CanCheck>
    <MultiSelect></MultiSelect>
    <DataGenerated></DataGenerated>
    <SuffixIcon></SuffixIcon>
    <MarkdownRender mdFileName="treeSelect"></MarkdownRender>
  </div>
</template>

<script>
import Basic from './component-collection/Basic'
import CanCheck from './component-collection/CanCheck'
import MultiSelect from './component-collection/MultiSelect'
import DataGenerated from './component-collection/DataGenerated'
import SuffixIcon from './component-collection/SuffixIcon'
export default {
  name: 'treeSelect-demo',
  data () {
    return {}
  },
  components: {
    Basic,
    CanCheck,
    MultiSelect,
    DataGenerated,
    SuffixIcon
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.treeSelect {
}
</style>
