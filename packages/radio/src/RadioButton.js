import { Radio } from 'ant-design-vue'
export default {
  name: 'ikRadioButton',
  inheritAttrs: false,
  functional: true,
  render (h, c) {
    return (
      <Radio.Button {...c.data}>{ c.children }</Radio.Button>
    )
  }
}
