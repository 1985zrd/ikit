import { Dropdown } from 'ant-design-vue'

export default {
  name: 'ik-dropdown-button',
  inheritAttrs: false,
  functional: true,
  render (h, c) {
    return <Dropdown.Button {...c.data} scopedSlots={c.scopedSlots}>
      {c.slots().default}
    </Dropdown.Button>
  }
}
