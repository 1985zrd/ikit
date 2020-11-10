<template>
  <codeBox title="禁用" description="禁用某一项。" :code="disabledTabsCode">
    <ik-tabs defaultActiveKey="1">
      <ik-tab-pane tab="Tab 1" key="1">Tab 1</ik-tab-pane>
      <ik-tab-pane tab="Tab 2" disabled key="2">Tab 2</ik-tab-pane>
      <ik-tab-pane tab="Tab 3" key="3">Tab 3</ik-tab-pane>
    </ik-tabs>
  </codeBox>
</template>

<script>
import { disabledTabsCode } from './../codeExample'
export default {
  data () {
    return {
      disabledTabsCode
    }
  }
}
</script>
