import { Form } from 'ant-design-vue'
// import FormItem from './form-item.vue'
export default {
  name: 'ik-form',
  functional: true,
  // Item: FormItem,
  render (h, c) {
    const slotMap = c.slots()
    let form = c.props.form

    return (
      <Form {...{ ...c.data, ...c.props }} scopedSlots={c.scopedSlots}>
        {Object.keys(slotMap).map(slotName =>
          h('template', { slot: slotName }, slotMap[slotName])
        )}
      </Form>
    )
  }
}
