import { Row } from 'ant-design-vue'
export default {
  name: 'ik-row',
  inheritAttrs: false,
  functional: true,
  render (h, c) {
    const slotMap = c.slots()
    return (
      <Row {...c.data} scopedSlots={c.scopedSlots}>
        {Object.keys(slotMap).map(slotName =>
          h('template', { slot: slotName }, slotMap[slotName])
        )}
      </Row>
    )
  }
}
