import { InputNumber } from 'ant-design-vue'
export default {
  name: 'ik-input-number',
  inheritAttrs: false,
  functional: true,
  render (h, c) {
    return <InputNumber {...c.data} scopedSlots={c.scopedSlots}>
      {c.children}
    </InputNumber>
  }
}
