
import { AutoComplete } from 'ant-design-vue'
export default {
  name: 'ik-auto-complete',
  inheritAttrs: false,
  functional: true,
  render (h, c) {
    const slotMap = c.slots()
    return <AutoComplete {...c.data} scopedSlots={c.scopedSlots}>
      {Object.keys(slotMap).map(slotName =>
        h('template', { slot: slotName }, slotMap[slotName])
      )}
    </AutoComplete>
  }
}
