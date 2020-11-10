import { Tabs } from 'ant-design-vue'
export default {
  name: 'ik-tab-pane',
  inheritAttrs: false,
  functional: true,
  render (h, c) {
    const slotMap = c.slots()
    return <Tabs.TabPane {...c.data} scopedSlots={c.scopedSlots}>
      {Object.keys(slotMap).map(
        slotName => h('template', { slot: slotName }, slotMap[slotName])
      )}
    </Tabs.TabPane>
  }
}
