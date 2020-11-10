
import { Statistic } from 'ant-design-vue'
export default {
  name: 'ik-statistic-countdown',
  inheritAttrs: false,
  functional: true,
  render (h, c) {
    const slotMap = c.slots()
    return <Statistic.Countdown {...c.data} scopedSlots={c.scopedSlots}>
      {Object.keys(slotMap).map(
        slotName => h('template', { slot: slotName }, slotMap[slotName])
      )}
    </Statistic.Countdown>
  }
}
