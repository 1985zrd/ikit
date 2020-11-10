<template>
  <codeBox title="卡片式页签容器 " description="用于容器顶部，需要一点额外的样式覆盖。" :code="cardBoxTabsCode">
    <div class="card-container">
      <ik-tabs type="card">
        <ik-tab-pane tab="Tab Title 1" key="1">
          <p>Content of Tab Pane 1</p>
          <p>Content of Tab Pane 1</p>
          <p>Content of Tab Pane 1</p>
        </ik-tab-pane>
        <ik-tab-pane tab="Tab Title 2" key="2">
          <p>Content of Tab Pane 2</p>
          <p>Content of Tab Pane 2</p>
          <p>Content of Tab Pane 2</p>
        </ik-tab-pane>
        <ik-tab-pane tab="Tab Title 3" key="3">
          <p>Content of Tab Pane 3</p>
          <p>Content of Tab Pane 3</p>
          <p>Content of Tab Pane 3</p>
        </ik-tab-pane>
      </ik-tabs>
    </div>
  </codeBox>
</template>
<script>
import { cardBoxTabsCode } from './../codeExample'
export default {
  data () {
    return {
      cardBoxTabsCode
    }
  },
  methods: {
    callback (key) {
      console.log(key)
    }
  }
}
</script>
<style>
.card-container {
  background: #f5f5f5;
  overflow: hidden;
  padding: 24px;
}
.card-container > .ant-tabs-card > .ant-tabs-content {
  height: 120px;
  margin-top: -16px;
}

.card-container > .ant-tabs-card > .ant-tabs-content > .ant-tabs-tabpane {
  background: #fff;
  padding: 16px;
}

.card-container > .ant-tabs-card > .ant-tabs-bar {
  border-color: #fff;
}

.card-container > .ant-tabs-card > .ant-tabs-bar .ant-tabs-tab {
  border-color: transparent;
  background: transparent;
}

.card-container > .ant-tabs-card > .ant-tabs-bar .ant-tabs-tab-active {
  border-color: #fff;
  background: #fff;
}
</style>
