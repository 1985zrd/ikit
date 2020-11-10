<template>
  <codeBox title="位置 " description="有四个位置，tabPosition= 'left|right|top|bottom' " :code="positionTabsCode">
    <div style="width: 500px">
      <ik-radio-group v-model="tabPosition" style="margin:8px">
        <ik-radio-button value="top">top</ik-radio-button>
        <ik-radio-button value="bottom">bottom</ik-radio-button>
        <ik-radio-button value="left">left</ik-radio-button>
        <ik-radio-button value="right">right</ik-radio-button>
      </ik-radio-group>
      <ik-tabs defaultActiveKey="1" :tabPosition="tabPosition">
        <ik-tab-pane tab="Tab 1" key="1">Content of Tab 1</ik-tab-pane>
        <ik-tab-pane tab="Tab 2" key="2">Content of Tab 2</ik-tab-pane>
        <ik-tab-pane tab="Tab 3" key="3">Content of Tab 3</ik-tab-pane>
      </ik-tabs>
    </div>
  </codeBox>
</template>
<script>
import { positionTabsCode } from './../codeExample'
export default {
  data () {
    return {
      positionTabsCode,
      tabPosition: 'top'
    }
  },
  methods: {
    callback (val) {
      console.log(val)
    }
  }
}
</script>
