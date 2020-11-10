<template>
  <div class="tabs">
    <basicTabs></basicTabs>
    <disabledTabs></disabledTabs>
    <iconTabs></iconTabs>
    <slideTabs></slideTabs>
    <additionalTabs></additionalTabs>
    <sizeTabs></sizeTabs>
    <positionTabs></positionTabs>
    <cardTabs></cardTabs>
    <closableTabs></closableTabs>
    <cardBoxTabs></cardBoxTabs>
    <customAddTabs></customAddTabs>
    <MarkdownRender mdFileName="tabs" />
  </div>
</template>

<script>
import basicTabs from './component-collection/BasicTabs'
import disabledTabs from './component-collection/DisabledTabs'
import iconTabs from './component-collection/IconTabs'
import slideTabs from './component-collection/SlideTabs'
import additionalTabs from './component-collection/AdditionalTabs'
import sizeTabs from './component-collection/SizeTabs'
import positionTabs from './component-collection/PositionTabs'
import cardTabs from './component-collection/CardTabs'
import closableTabs from './component-collection/ClosableTabs'
import cardBoxTabs from './component-collection/CardBoxTabs'
import customAddTabs from './component-collection/CustomAddTabs'
export default {
  components: { basicTabs, disabledTabs, iconTabs, slideTabs, additionalTabs, sizeTabs, positionTabs, cardTabs, closableTabs, cardBoxTabs, customAddTabs }
}
</script>

<style>
</style>
