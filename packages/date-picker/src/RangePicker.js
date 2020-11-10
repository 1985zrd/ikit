import { DatePicker } from 'ant-design-vue'

export default {
  name: 'ik-range-picker',
  functional: true,
  render (h, c) {
    return <DatePicker.RangePicker {...c.data} scopedSlots={c.scopedSlots} suffixIcon={<ik-icon type="icondatetime" style="color:#424754; font-size:16px; margin-top:-8px" isIk />}>
      {c.slots().default}
    </DatePicker.RangePicker>
  }
}
