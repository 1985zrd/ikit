
import { TreeSelect } from 'ant-design-vue'
export default {
  name: 'ik-tree-select',
  inheritAttrs: false,
  functional: true,
  render (h, c) {
    const slotMap = c.slots()
    return <TreeSelect {...c.data} scopedSlots={c.scopedSlots}>
      {Object.keys(slotMap).map(
        slotName => h('template', { slot: slotName }, slotMap[slotName])
      )}
    </TreeSelect>
  }
}
