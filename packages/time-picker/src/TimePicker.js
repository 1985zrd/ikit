import { TimePicker } from 'ant-design-vue'
export default {
  name: 'ik-time-picker',
  inheritAttrs: false,
  functional: true,
  render (h, c) {
    const slotMap = c.slots()
    return <TimePicker {...c.data} scopedSlots={c.scopedSlots}>
      {Object.keys(slotMap).map(
        slotName => h('template', { slot: slotName }, slotMap[slotName])
      )}
    </TimePicker>
  }
}
