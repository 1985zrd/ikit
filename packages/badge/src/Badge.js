
import { Badge } from 'ant-design-vue'
export default {
  name: 'ik-badge',
  props: {
    gray: {
      type: Boolean,
      default: false
    }
  },
  inheritAttrs: false,
  functional: true,
  render (h, c) {
    const slotMap = c.slots()
    return <Badge {...c.data} scopedSlots={c.scopedSlots} class={c.props.gray ? 'ant-badge-gray' : ''}>
      {Object.keys(slotMap).map(slotName =>
        h('template', { slot: slotName }, slotMap[slotName])
      )}
    </Badge>
  }
}
