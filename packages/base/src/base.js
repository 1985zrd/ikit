
import { Base } from 'ant-design-vue'
export default {
  name: 'ik-base',
  inheritAttrs: false,
  functional: true,
  render (h, c) {
    return <Base {...c.data}>{c.children}</Base>
  }
}
