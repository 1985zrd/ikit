
import { BackTop } from 'ant-design-vue'
export default {
  name: 'ik-back-top',
  inheritAttrs: false,
  functional: true,
  render (h, c) {
    const slotMap = c.slots()
    return <BackTop {...c.data} scopedSlots={c.scopedSlots}>
      {Object.keys(slotMap).map(
        slotName => h('template', { slot: slotName }, slotMap[slotName])
      )}
    </BackTop>
  }
}
