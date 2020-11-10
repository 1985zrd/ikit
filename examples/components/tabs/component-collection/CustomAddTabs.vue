<template>
  <codeBox title="自定义新增页签触发器 " description="隐藏默认的页签增加图标，给自定义触发器绑定事件。" :code="customAddTabsCode">
    <div :style="{ marginBottom: '16px' }">
      <ik-button @click="add">ADD</ik-button>
    </div>
    <ik-tabs hideAdd v-model="activeKey" type="editable-card" @edit="onEdit">
      <ik-tab-pane v-for="pane in panes" :tab="pane.title" :key="pane.key" :closable="pane.closable">{{pane.content}}</ik-tab-pane>
    </ik-tabs>
  </codeBox>
</template>
<script>
import { customAddTabsCode } from './../codeExample'
export default {
  data () {
    const panes = [
      { title: 'Tab 1', content: 'Content of Tab 1', key: '1' },
      { title: 'Tab 2', content: 'Content of Tab 2', key: '2' }
    ]
    return {
      customAddTabsCode,
      activeKey: panes[0].key,
      panes,
      newTabIndex: 0
    }
  },
  methods: {
    callback (key) {
      console.log(key)
    },
    onEdit (targetKey, action) {
      this[action](targetKey)
    },
    add () {
      const panes = this.panes
      const activeKey = `newTab${this.newTabIndex++}`
      panes.push({
        title: `New Tab ${activeKey}`,
        content: `Content of new Tab ${activeKey}`,
        key: activeKey
      })
      this.panes = panes
      this.activeKey = activeKey
    },
    remove (targetKey) {
      let activeKey = this.activeKey
      let lastIndex
      this.panes.forEach((pane, i) => {
        if (pane.key === targetKey) {
          lastIndex = i - 1
        }
      })
      const panes = this.panes.filter(pane => pane.key !== targetKey)
      if (panes.length && activeKey === targetKey) {
        if (lastIndex >= 0) {
          activeKey = panes[lastIndex].key
        } else {
          activeKey = panes[0].key
        }
      }
      this.panes = panes
      this.activeKey = activeKey
    }
  }
}
</script>
