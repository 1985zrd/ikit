import { Select } from 'ant-design-vue'

export default {
  name: 'ik-select-option',
  functional: true,
  isSelectOption: true,
  render (h, c) {
    return (
      <Select.Option {...c.data} scopedSlots={c.scopedSlots}>
        {c.slots().default}
      </Select.Option>
    )
  }
}
