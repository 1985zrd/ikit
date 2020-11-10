
import { Affix } from 'ant-design-vue'
export default {
  name: 'ik-affix',
  inheritAttrs: false,
  functional: true,
  render (h, c) {
    const slotMap = c.slots()
    return <Affix {...c.data} scopedSlots={c.scopedSlots}>
      {Object.keys(slotMap).map(slotName =>
        h('template', { slot: slotName }, slotMap[slotName])
      )}
    </Affix>
  }
}
