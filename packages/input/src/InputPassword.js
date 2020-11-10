import { Input } from 'ant-design-vue'
export default {
  name: 'ik-input-password',
  inheritAttrs: false,
  functional: true,
  render (h, c) {
    return <Input.Password {...c.data}>
      {c.children}
    </Input.Password>
  }
}
