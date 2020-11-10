
<template>
  <div>
    <Basic></Basic>
    <Disabled></Disabled>
    <TextSwitch></TextSwitch>
    <Size></Size>
    <Loading></Loading>
    <MarkdownRender mdFileName="switch" />
  </div>
</template>

<script>
import Basic from './component-collection/Basic'
import Disabled from './component-collection/Disabled'
import TextSwitch from './component-collection/TextSwitch'
import Size from './component-collection/Size'
import Loading from './component-collection/Loading'

export default {
  name: 'switch-dome',
  components: {
    Basic,
    Disabled,
    TextSwitch,
    Size,
    Loading
  }
}
</script>
