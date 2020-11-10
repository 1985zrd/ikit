<template>
  <div class="notification">
    <Basic></Basic>
    <CustomButton></CustomButton>
    <CustomStyles></CustomStyles>
    <DurationClose></DurationClose>
    <HasIcon></HasIcon>
    <ShowPosition></ShowPosition>
    <UpdateInfo></UpdateInfo>
    <MarkdownRender mdFileName="notification"></MarkdownRender>
  </div>
</template>

<script>
import Basic from './component-collection/Basic'
import CustomButton from './component-collection/CustomButton'
import CustomStyles from './component-collection/CustomStyles'
import DurationClose from './component-collection/DurationClose'
import HasIcon from './component-collection/HasIcon'
import ShowPosition from './component-collection/ShowPosition'
import UpdateInfo from './component-collection/UpdateInfo'
export default {
  name: 'Notification-demo',
  data () {
    return {}
  },
  components: {
    Basic,
    CustomButton,
    CustomStyles,
    DurationClose,
    HasIcon,
    ShowPosition,
    UpdateInfo
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.notification {
}
</style>
