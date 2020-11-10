import { List } from 'ant-design-vue'
export default {
  name: 'ik-list',
  inheritAttrs: false,
  functional: true,
  render (h, c) {
    const slotMap = c.slots()
    return (
      <List
        scopedSlots={c.scopedSlots}
        {...c.data}
      >
        {slotMap.default}
      </List>
    )
  }
}
