import { Radio } from 'ant-design-vue'
export default {
  name: 'ikRadioGroup',
  inheritAttrs: false,
  functional: true,
  render (h, c) {
    return (
      <Radio.Group {...c.data}>{ c.children }</Radio.Group>
    )
  }
}
