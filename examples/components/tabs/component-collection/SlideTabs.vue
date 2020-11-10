<template>
  <codeBox title="滑动" description="可以左右、上下滑动，容纳更多标签。" :code="slideTabsCode">
    <div style="width: 500px">
      <ik-radio-group v-model="mode" :style="{ marginBottom: '8px' }">
        <ik-radio-button value="top">Horizontal</ik-radio-button>
        <ik-radio-button value="left">Vertical</ik-radio-button>
      </ik-radio-group>
      <ik-tabs defaultActiveKey="1" :tabPosition="mode" :style="{ height: '200px'}" @prevClick="callback" @nextClick="callback">
        <ik-tab-pane tab="Tab 1" key="1">Content of tab 1</ik-tab-pane>
        <ik-tab-pane tab="Tab 2" key="2">Content of tab 2</ik-tab-pane>
        <ik-tab-pane tab="Tab 3" key="3">Content of tab 3</ik-tab-pane>
        <ik-tab-pane tab="Tab 4" key="4">Content of tab 4</ik-tab-pane>
        <ik-tab-pane tab="Tab 5" key="5">Content of tab 5</ik-tab-pane>
        <ik-tab-pane tab="Tab 6" key="6">Content of tab 6</ik-tab-pane>
        <ik-tab-pane tab="Tab 7" key="7">Content of tab 7</ik-tab-pane>
        <ik-tab-pane tab="Tab 8" key="8">Content of tab 8</ik-tab-pane>
        <ik-tab-pane tab="Tab 9" key="9">Content of tab 9</ik-tab-pane>
        <ik-tab-pane tab="Tab 10" key="10">Content of tab 10</ik-tab-pane>
        <ik-tab-pane tab="Tab 11" key="11">Content of tab 11</ik-tab-pane>
      </ik-tabs>
    </div>
  </codeBox>
</template>
<script>
import { slideTabsCode } from './../codeExample'
export default {
  data () {
    return {
      slideTabsCode,
      mode: 'top'
    }
  },
  methods: {
    callback (val) {
      console.log(val)
    }
  }
}
</script>
