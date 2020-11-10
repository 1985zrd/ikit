
import { Timeline } from 'ant-design-vue'
export default {
  name: 'ik-timeline-item',
  inheritAttrs: false,
  functional: true,
  render (h, c) {
    const slotMap = c.slots()
    return <Timeline.Item {...c.data} scopedSlots={c.scopedSlots}>
      {Object.keys(slotMap).map(
        slotName => h('template', { slot: slotName }, slotMap[slotName])
      )}
    </Timeline.Item>
  }
}
