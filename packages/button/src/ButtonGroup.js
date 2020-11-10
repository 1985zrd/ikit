import { Button } from 'ant-design-vue'
export default {
  name: 'ik-button-group',
  inheritAttrs: false,
  functional: true,
  render (h, c) {
    return (
      <Button.Group {...c.data} scopedSlots={c.scopedSlots}>{ c.children }</Button.Group>
    )
  }
}
