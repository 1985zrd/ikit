<template>
  <div class="drawer">
    <Basic></Basic>
    <CustomPosition></CustomPosition>
    <DrawerForm></DrawerForm>
    <InfoDrawer></InfoDrawer>
    <MultilayerDrawer></MultilayerDrawer>
    <MarkdownRender mdFileName="drawer"></MarkdownRender>
  </div>
</template>

<script>
import Basic from './component-collection/Basic'
import CustomPosition from './component-collection/CustomPosition'
import DrawerForm from './component-collection/DrawerForm'
import InfoDrawer from './component-collection/InfoDrawer'
import MultilayerDrawer from './component-collection/MultilayerDrawer'
export default {
  name: 'drawer-demo',
  data () {
    return {}
  },
  components: {
    Basic,
    CustomPosition,
    DrawerForm,
    InfoDrawer,
    MultilayerDrawer
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.drawer {
}
</style>
