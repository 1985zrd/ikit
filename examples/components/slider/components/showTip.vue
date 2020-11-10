<template>
  <codeBox :title="title"
    :description="description"
    :code="showTip">
    <ik-slider :defaultValue="30" :tooltipVisible="true" />
  </codeBox>
</template>
<script>
import { showTip } from '../code.js'
export default {
  name: 'showTipSlider',
  data () {
    return {
      title: '控制 ToolTip 的显示',
      description: '当 tooltipVisible 为 true 时，将始终显示ToolTip；反之则始终不显示，即使在拖动、移入时也是如此。',
      showTip
    }
  }
}
</script>
