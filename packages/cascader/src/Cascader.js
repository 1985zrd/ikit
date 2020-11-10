import { Cascader } from 'ant-design-vue'

export default {
  name: 'ik-cascader',
  functional: true,
  render (h, c) {
    const slotMap = c.slots()
    return <Cascader {...c.data} scopedSlots={c.scopedSlots}>
      {Object.keys(slotMap).map(slotName =>
        h('template', { slot: slotName }, slotMap[slotName])
      )}
    </Cascader>
  }
}
