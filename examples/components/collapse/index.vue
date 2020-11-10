
<template>
  <div class="collapse">
    <BasicCollapse></BasicCollapse>
    <AccordionCollapse></AccordionCollapse>
    <NestedCollapse></NestedCollapse>
    <ConciseCollapse></ConciseCollapse>
    <CustomCollapse></CustomCollapse>
    <HideArrowCollapse></HideArrowCollapse>
    <IconRightCollapse></IconRightCollapse>
    <MarkdownRender mdFileName="collapse" />
  </div>
</template>

<script>
import BasicCollapse from './component-collection/BasicCollapse'
import AccordionCollapse from './component-collection/AccordionCollapse'
import NestedCollapse from './component-collection/NestedCollapse'
import ConciseCollapse from './component-collection/ConciseCollapse'
import CustomCollapse from './component-collection/CustomCollapse'
import HideArrowCollapse from './component-collection/HideArrowCollapse'
import IconRightCollapse from './component-collection/IconRightCollapse'
export default {
  name: 'collapse-demo',
  data () {
    return {}
  },
  components: { BasicCollapse, AccordionCollapse, NestedCollapse, ConciseCollapse, CustomCollapse, HideArrowCollapse, IconRightCollapse },
  methods: {}
}
</script>

<style lang="scss" scoped>
.collapse {
}
</style>
