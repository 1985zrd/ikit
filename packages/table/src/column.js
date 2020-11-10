
import { Table } from 'ant-design-vue'
export default {
  name: 'ik-table-column',
  inheritAttrs: false,
  functional: true,
  render (h, c) {
    const slotMap = c.slots()
    return <Table.Column
      {...c.data}
      scopedSlots={c.scopedSlots}
    >
      {Object.keys(slotMap).map(
        slotName => h('template', { slot: slotName }, slotMap[slotName])
      )}
    </Table.Column>
  }
}
