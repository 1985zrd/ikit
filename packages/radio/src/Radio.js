import { Radio } from 'ant-design-vue'
export default {
  name: 'ikRadio',
  inheritAttrs: false,
  functional: true,
  render (h, c) {
    return (
      <Radio {...c.data} {...c.props} {...c.slots}>{ c.children }</Radio>
    )
  }
}
