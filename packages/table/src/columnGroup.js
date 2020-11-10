
import { Table } from 'ant-design-vue'
export default {
  name: 'ik-table-column-group',
  inheritAttrs: false,
  functional: true,
  __ANT_TABLE_COLUMN_GROUP: true,
  render (h, c) {
    const slotMap = c.slots()
    return <Table.ColumnGroup
      {...c.data}
      scopedSlots={c.scopedSlots}
    >
      {Object.keys(slotMap).map(
        slotName => h('template', { slot: slotName }, slotMap[slotName])
      )}
    </Table.ColumnGroup>
  }
}
