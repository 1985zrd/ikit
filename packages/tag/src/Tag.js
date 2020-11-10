
import { Tag } from 'ant-design-vue'
export default {
  name: 'ik-tag',
  inheritAttrs: false,
  functional: true,
  props: {
    large: {
      type: Boolean,
      required: false
    }
  },
  render (h, c) {
    const slotMap = c.slots()
    return <Tag {...c.data} scopedSlots={c.scopedSlots}
      class={
        { 'ik-tag--large': c.props && c.props.large }
      }>
      {Object.keys(slotMap).map(slotName =>
        h('template', { slot: slotName }, slotMap[slotName])
      )}
    </Tag>
  }
}
