import { Spin } from 'ant-design-vue'
import IkangLoading from './IkangLoading.vue'
export default {
  name: 'ik-spin',
  props: {
    ikangLoading: {
      type: Boolean,
      default: false
    },
    width: {
      type: [Number, String]
    }
  },
  inheritAttrs: false,
  functional: true,
  setDefaultIndicator: Spin.setDefaultIndicator,
  render (h, c) {
    const slotMap = c.slots()
    return h(Spin, {
      ...c.data,
      ...c.scopedSlots,
      props: {
        indicator: c.props.ikangLoading ? <IkangLoading width={c.props.width} spin/> : ''
      }
    }, Object.keys(slotMap).map(slotName =>
      h('template', { slot: slotName }, slotMap[slotName])
    ))
  }
}
