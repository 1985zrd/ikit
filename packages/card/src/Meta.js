import { Card } from 'ant-design-vue'
export default {
  name: 'ik-card-meta',
  inheritAttrs: false,
  functional: true,
  render (h, c) {
    const slotMap = c.slots()
    return (
      <Card.Meta scopedSlots={c.scopedSlots} {...c.data}>
        {Object.keys(slotMap).map(slotName =>
          h('template', { slot: slotName }, slotMap[slotName])
        )}
      </Card.Meta>
    )
  }
}
