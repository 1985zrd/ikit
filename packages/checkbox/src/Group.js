import { Checkbox } from 'ant-design-vue'
export default {
  name: 'ik-checkbox-group',
  inheritAttrs: false,
  functional: true,
  render (h, c) {
    return (
      <Checkbox.Group {...c.data}>{ c.children }</Checkbox.Group>
    )
  }
}
