
import { Table } from 'ant-design-vue'
export default {
  name: 'ik-table',
  inheritAttrs: false,
  functional: true,
  props: {
    stripe: {
      type: Boolean,
      required: false
    },
    largeFont: {
      type: Boolean,
      required: false
    }
  },
  render (h, c) {
    const slotMap = c.slots()
    return <Table
      {...c.data}
      scopedSlots={c.scopedSlots}
      class = {{
        'ik-table--stripe': c.props && c.props.stripe,
        'ik-table--large': c.props && c.props.largeFont
      }}
    >
      {Object.keys(slotMap).map(
        slotName => h('template', { slot: slotName }, slotMap[slotName])
      )}
    </Table>
  }
}
