<template>
  <codeBox title="大小 " description="大号页签用在页头区域，小号用在弹出框等较狭窄的容器内。" :code="sizeTabsCode">
    <ik-radio-group v-model="size" style="margin-bottom: 16px">
      <ik-radio-button value="small">Small</ik-radio-button>
      <ik-radio-button value="default">Default</ik-radio-button>
      <ik-radio-button value="large">Large</ik-radio-button>
    </ik-radio-group>
    <ik-tabs defaultActiveKey="2" :size="size">
      <ik-tab-pane tab="Tab 1" key="1">Content of tab 1</ik-tab-pane>
      <ik-tab-pane tab="Tab 2" key="2">Content of tab 2</ik-tab-pane>
      <ik-tab-pane tab="Tab 3" key="3">Content of tab 3</ik-tab-pane>
    </ik-tabs>
  </codeBox>
</template>
<script>
import { sizeTabsCode } from './../codeExample'
export default {
  data () {
    return {
      sizeTabsCode,
      size: 'small'
    }
  }
}
</script>
