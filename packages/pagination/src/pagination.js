
import { Pagination } from 'ant-design-vue'
export default {
  name: 'ik-pagination',
  inheritAttrs: false,
  functional: true,
  render (h, c) {
    const slotMap = c.slots()
    return <Pagination
      {...c.data}
      scopedSlots={c.scopedSlots}>
      {Object.keys(slotMap).map(
        slotName => h('template', { slot: slotName }, slotMap[slotName])
      )}
    </Pagination>
  }
}
