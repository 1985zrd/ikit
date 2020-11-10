<template>
  <codeBox title="附加内容 " description="可以在页签右边添加附加操作。" :code="additionalTabsCode">
    <ik-tabs>
      <ik-tab-pane tab="Tab 1" key="1">Content of tab 1</ik-tab-pane>
      <ik-tab-pane tab="Tab 2" key="2">Content of tab 2</ik-tab-pane>
      <ik-tab-pane tab="Tab 3" key="3">Content of tab 3</ik-tab-pane>
      <ik-button slot="tabBarExtraContent">Extra Action</ik-button>
    </ik-tabs>
  </codeBox>
</template>

<script>
import { additionalTabsCode } from './../codeExample'
export default {
  data () {
    return {
      additionalTabsCode
    }
  }
}
</script>
