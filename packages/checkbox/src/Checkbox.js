import { Checkbox } from 'ant-design-vue'
export default {
  name: 'ik-checkbox',
  inheritAttrs: false,
  functional: true,
  render (h, c) {
    return (
      <Checkbox {...c.data}>{ c.children }</Checkbox>
    )
  }
}
