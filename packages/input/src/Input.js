import { Input } from 'ant-design-vue'
export default {
  name: 'ik-input',
  inheritAttrs: false,
  functional: true,
  render (h, c) {
    const slotMap = c.slots()
    return (
      <Input {...c.data} scopedSlots={c.scopedSlots}>
        {Object.keys(slotMap).map(slotName =>
          h('template', { slot: slotName }, slotMap[slotName])
        )}
      </Input>
    )
  }
}
