
import { Collapse } from 'ant-design-vue'
export default {
  name: 'ik-collapse-panel',
  inheritAttrs: false,
  functional: true,
  render (h, c) {
    const slotMap = c.slots()
    return <Collapse.Panel {...c.data} scopedSlots={c.scopedSlots}>
      {Object.keys(slotMap).map(
        slotName => h('template', { slot: slotName }, slotMap[slotName])
      )}
    </Collapse.Panel>
  }
}
