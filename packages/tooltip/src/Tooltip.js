
import { Tooltip } from 'ant-design-vue'
export default {
  name: 'ik-tooltip',
  inheritAttrs: false,
  functional: true,
  render (h, c) {
    const slotMap = c.slots()
    return <Tooltip {...c.data} scopedSlots={c.scopedSlots}>
      {Object.keys(slotMap).map(slotName =>
        h('template', { slot: slotName }, slotMap[slotName])
      )}
    </Tooltip>
  }
}
