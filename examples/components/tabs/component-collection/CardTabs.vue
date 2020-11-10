<template>
  <codeBox title="卡片式页签 " description="另一种样式的页签，不提供对应的垂直样式。" :code="cardTabsCode">
    <ik-tabs @change="callback" type="card">
      <ik-tab-pane tab="Tab 1" key="1">Content of Tab Pane 1</ik-tab-pane>
      <ik-tab-pane tab="Tab 2" key="2">Content of Tab Pane 2</ik-tab-pane>
      <ik-tab-pane tab="Tab 3" key="3">Content of Tab Pane 3</ik-tab-pane>
    </ik-tabs>
  </codeBox>
</template>
<script>
import { cardTabsCode } from './../codeExample'
export default {
  data () {
    return {
      cardTabsCode
    }
  },
  methods: {
    callback (key) {
      console.log(key)
    }
  }
}
</script>
