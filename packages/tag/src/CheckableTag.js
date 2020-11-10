
import { Tag } from 'ant-design-vue'
export default {
  name: 'ik-checkable-tag',
  inheritAttrs: false,
  functional: true,
  render (h, c) {
    const slotMap = c.slots()
    return <Tag.CheckableTag {...c.data} scopedSlots={c.scopedSlots}>
      {Object.keys(slotMap).map(slotName =>
        h('template', { slot: slotName }, slotMap[slotName])
      )}
    </Tag.CheckableTag>
  }
}
