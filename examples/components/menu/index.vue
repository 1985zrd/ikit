<template>
  <div class="menu">
    <topOfNavigation></topOfNavigation>
    <topOfNavigationL></topOfNavigationL>
    <builtInMenu></builtInMenu>
    <embeddedMenu></embeddedMenu>
    <!-- <collapsedOpen></collapsedOpen>
    <collapsedTowOpen></collapsedTowOpen> -->
    <expandParentMenu></expandParentMenu>
    <verticalMenu></verticalMenu>
    <topicMenu></topicMenu>
    <switchMenu></switchMenu>
    <recursiveMenu></recursiveMenu>
    <MarkdownRender mdFileName="menu"/>
  </div>
</template>

<script>
import topOfNavigation from './componentCollection/topOfNavigation'
import topOfNavigationL from './componentCollection/topOfNavigationL'
import builtInMenu from './componentCollection/builtInMenu'
import embeddedMenu from './componentCollection/embeddedMenu'
import expandParentMenu from './componentCollection/expandParentMenu'
import verticalMenu from './componentCollection/verticalMenu'
import topicMenu from './componentCollection/topicMenu'
import switchMenu from './componentCollection/switchMenu'
import recursiveMenu from './componentCollection/recursiveMenu'
// import collapsedOpen from './componentCollection/collapsedOpen'
// import collapsedTowOpen from './componentCollection/collapsedTowOpen'

export default {
  components: {
    topOfNavigation,
    topOfNavigationL,
    builtInMenu,
    embeddedMenu,
    expandParentMenu,
    verticalMenu,
    topicMenu,
    switchMenu,
    recursiveMenu
    // collapsedOpen,
    // collapsedTowOpen
  }
}
</script>

<style lang="scss">
  .menu .content{
  padding: 40px 0 0;
  }
</style>
