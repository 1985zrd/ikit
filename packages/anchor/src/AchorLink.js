import { Anchor } from 'ant-design-vue'
export default {
  name: 'ik-anchor-link',
  inheritAttrs: false,
  functional: true,
  render (h, c) {
    const slotMap = c.slots()
    return <Anchor.Link {...c.data} scopedSlots={c.scopedSlots}>
      {Object.keys(slotMap).map(
        slotName => h('template', { slot: slotName }, slotMap[slotName])
      )}
    </Anchor.Link>
  }
}
