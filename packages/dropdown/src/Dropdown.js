import { Dropdown } from 'ant-design-vue'

export default {
  name: 'ik-dropdown',
  inheritAttrs: false,
  functional: true,
  render (h, c) {
    const slotMap = c.slots()
    return <Dropdown {...c.data} scopedSlots={c.scopedSlots}>
      {Object.keys(slotMap).map(slotName =>
        h('template', { slot: slotName }, slotMap[slotName])
      )}
    </Dropdown>
  }
}
