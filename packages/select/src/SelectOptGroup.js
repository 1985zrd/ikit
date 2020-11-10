import { Select } from 'ant-design-vue'

export default {
  name: 'ik-select-opt-group',
  functional: true,
  isSelectOptGroup: true,
  render (h, c) {
    return (
      <Select.OptGroup {...c.data} scopedSlots={c.scopedSlots}>
        {c.slots().default}
      </Select.OptGroup>
    )
  }
}
