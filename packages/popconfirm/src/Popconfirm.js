
import { Popconfirm } from 'ant-design-vue'
export default {
  name: 'ik-popconfirm',
  inheritAttrs: false,
  functional: true,
  render (h, c) {
    const slotMap = c.slots()
    return <Popconfirm {...c.data} scopedSlots={c.scopedSlots}>
      {Object.keys(slotMap).map(
        slotName => h('template', { slot: slotName }, slotMap[slotName])
      )}
    </Popconfirm>
  }
}
