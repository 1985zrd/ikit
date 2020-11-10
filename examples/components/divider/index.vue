<template>
  <div class="divider">
    <VerticalDivider />
    <Divider />
    <OrientationDivider />
    <MarkdownRender mdFileName="divider" />
  </div>
</template>

<script>
import VerticalDivider from './demo/VerticalDivider'
import Divider from './demo/Divider'
import OrientationDivider from './demo/OrientationDivider'

export default {
  name: 'divider-demo',
  components: {
    VerticalDivider,
    Divider,
    OrientationDivider
  }
}
</script>
