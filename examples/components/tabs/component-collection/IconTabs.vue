<template>
  <codeBox title="图标" description="有图标的标签。" :code="iconTabsCode">
    <ik-tabs defaultActiveKey="2">
      <ik-tab-pane key="1">
        <span slot="tab">
          <ik-icon type="icontime" isIk/>Tab 1
        </span>
        Tab 1
      </ik-tab-pane>
      <ik-tab-pane key="2">
        <span slot="tab">
          <ik-icon type="icontime" isIk/>Tab 2
        </span>
        Tab 2
      </ik-tab-pane>
    </ik-tabs>
  </codeBox>
</template>

<script>
import { iconTabsCode } from './../codeExample'
export default {
  data () {
    return {
      iconTabsCode
    }
  }
}
</script>
