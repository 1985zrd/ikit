import { Breadcrumb } from 'ant-design-vue'
export default {
  name: 'ik-breadcrumb',
  inheritAttrs: false,
  functional: true,
  render (h, c) {
    // console.log('ik-breadcrumb h', h)
    // console.log('ik-breadcrumb c', c, c.slots().separator)
    const slotMap = c.slots()
    return <Breadcrumb
      {...c.data}
      scopedSlots={c.scopedSlots}>
      {Object.keys(slotMap).map(
        slotName => h('template', { slot: slotName }, slotMap[slotName])
      )}
    </Breadcrumb>
  }
}
