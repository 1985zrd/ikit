
import { Divider } from 'ant-design-vue'
export default {
  name: 'ik-divider',
  inheritAttrs: false,
  functional: true,
  render (h, c) {
    const slotMap = c.slots()
    return <Divider
      {...c.data}
      scopedSlots={c.scopedSlots}
    >
      {Object.keys(slotMap).map(
        slotName => h('template', { slot: slotName }, slotMap[slotName])
      )}
    </Divider>
  }
}
