<template>
  <codeBox title="基本用法" description="默认选中第一项。" :code="basicTabsCode">
    <ik-tabs defaultActiveKey="1" @change="callback">
      <ik-tab-pane tab="Tab 1" key="1">Content of Tab Pane 1</ik-tab-pane>
      <ik-tab-pane tab="Tab 2" key="2" forceRender>Content of Tab Pane 2</ik-tab-pane>
      <ik-tab-pane tab="Tab 3" key="3">Content of Tab Pane 3</ik-tab-pane>
    </ik-tabs>
  </codeBox>
</template>
<script>
import { basicTabsCode } from './../codeExample'
export default {
  data () {
    return { basicTabsCode }
  },
  methods: {
    callback (key) {
      console.log(key)
    }
  }
}
</script>
