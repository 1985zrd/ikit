
import { Slider } from 'ant-design-vue'
export default {
  name: 'ik-slider',
  inheritAttrs: false,
  functional: true,
  render (h, c) {
    const slotMap = c.slots()
    return <Slider {...c.data} scopedSlots={c.scopedSlots}>
      {Object.keys(slotMap).map(slotName =>
        h('template', { slot: slotName }, slotMap[slotName])
      )}
    </Slider>
  }
}
