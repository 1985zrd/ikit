<script>
import { Form } from 'ant-design-vue'
export default {
  name: 'ik-form-item',
  inheritAttrs: false,
  functional: true,
  __ANT_FORM_ITEM: true,
  render (h, c) {
    const slotMap = c.slots()
    return (
      <Form.Item {...{ ...c.props, ...c.data }} scopedSlots={c.scopedSlots}>
        {Object.keys(slotMap).map(slotName =>
          h('template', { slot: slotName }, slotMap[slotName])
        )}
      </Form.Item>
    )
  }
}
</script>
