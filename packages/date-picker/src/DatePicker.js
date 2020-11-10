import { DatePicker } from 'ant-design-vue'
export default {
  name: 'ik-date-picker',
  functional: true,
  render (h, c) {
    const slotMap = c.slots()
    console.log(c)
    return <DatePicker {...c.data
    } scopedSlots={c.scopedSlots} suffixIcon={<ik-icon type="icondatetime" style="color:#424754; font-size:16px; margin-top:-8px" isIk />}>
      {Object.keys(slotMap).map(slotName =>
        h('template', { slot: slotName }, slotMap[slotName])
      )}
    </DatePicker >
  }
}
