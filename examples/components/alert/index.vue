
<template>
  <div class="alert">
    <TopAnnouncement></TopAnnouncement>
    <BasicAlert></BasicAlert>
    <AlertCanClosed></AlertCanClosed>
    <CustomClose></CustomClose>
    <HasAuxiliaryIntroductionAlert></HasAuxiliaryIntroductionAlert>
    <HasIconAlert></HasIconAlert>
    <StylesAlert></StylesAlert>
    <DestoryedAlert></DestoryedAlert>
    <MarkdownRender mdFileName="alert"></MarkdownRender>
  </div>
</template>

<script>
import BasicAlert from './component-collection/BasicAlert'
import TopAnnouncement from './component-collection/TopAnnouncement'
import HasAuxiliaryIntroductionAlert from './component-collection/HasAuxiliaryIntroductionAlert'
import HasIconAlert from './component-collection/HasIconAlert'
import StylesAlert from './component-collection/StylesAlert'
import AlertCanClosed from './component-collection/AlertCanClosed'
import CustomClose from './component-collection/CustomClose'
import DestoryedAlert from './component-collection/DestoryedAlert'
export default {
  name: 'alert-demo',
  data () {
    return {}
  },
  components: {
    BasicAlert,
    TopAnnouncement,
    HasAuxiliaryIntroductionAlert,
    HasIconAlert,
    StylesAlert,
    AlertCanClosed,
    CustomClose,
    DestoryedAlert
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.alert {
}
</style>
