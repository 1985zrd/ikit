import { Col } from 'ant-design-vue'
export default {
  name: 'ik-col',
  inheritAttrs: false,
  functional: true,
  render (h, c) {
    const slotMap = c.slots()
    return (
      <Col {...c.data} scopedSlots={c.scopedSlots}>
        {Object.keys(slotMap).map(slotName =>
          h('template', { slot: slotName }, slotMap[slotName])
        )}
      </Col>
    )
  }
}
