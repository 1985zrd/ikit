
import { Popover } from 'ant-design-vue'
export default {
  name: 'ik-popover',
  inheritAttrs: false,
  functional: true,
  render (h, c) {
    const slotMap = c.slots()
    return <Popover {...c.data} scopedSlots={c.scopedSlots}>
      {Object.keys(slotMap).map(
        slotName => h('template', { slot: slotName }, slotMap[slotName])
      )}
    </Popover>
  }
}
