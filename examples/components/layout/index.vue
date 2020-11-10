<template>
  <div class="grid">
    <basicLayout></basicLayout>
    <customLayout></customLayout>
    <topSideBannerLayout></topSideBannerLayout>
    <topSideLayout></topSideLayout>
    <topCenterBottomLayout></topCenterBottomLayout>
    <responseLayout></responseLayout>
    <fixedSideLayout></fixedSideLayout>
    <fixedHeaderLayout></fixedHeaderLayout>
    <sideLayout></sideLayout>
    <MarkdownRender mdFileName="layout"></MarkdownRender>
  </div>
</template>

<script>
import basicLayout from './componentCollection/basicLayout'
import customLayout from './componentCollection/customLayout'
import topSideBannerLayout from './componentCollection/topSideBannerLayout'
import topSideLayout from './componentCollection/topSideLayout'
import topCenterBottomLayout from './componentCollection/topCenterBottomLayout'
import responseLayout from './componentCollection/responseLayout'
import fixedSideLayout from './componentCollection/fixedSideLayout'
import fixedHeaderLayout from './componentCollection/fixedHeaderLayout'
import sideLayout from './componentCollection/sideLayout'
export default {
  components: {
    basicLayout,
    customLayout,
    topSideBannerLayout,
    topSideLayout,
    topCenterBottomLayout,
    responseLayout,
    fixedSideLayout,
    fixedHeaderLayout,
    sideLayout
  }
}
</script>

<style>
</style>
