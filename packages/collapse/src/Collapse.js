
import { Collapse } from 'ant-design-vue'
export default {
  name: 'ik-collapse',
  inheritAttrs: false,
  functional: true,
  props: {
    iconRight: {
      type: Boolean,
      default: false
    }
  },
  render (h, c) {
    const slotMap = c.slots()
    // let expandIcon = () => { }
    // const noSlotsExpandIcon = (c.data.scopedSlots && !c.data.scopedSlots.expandIcon) || !c.data.scopedSlots
    // if (noSlotsExpandIcon && !c.props.expandIcon) {
    //   expandIcon = props => {
    //     console.log(props())
    //     return <ik-icon type="iconto-bottom" rotate={props.isActive ? 90 : 0} isIk />
    //   }
    // }

    // console.log(c, noSlotsExpandIcon)

    // return <Collapse {...c.data} expandIcon={!noSlotsExpandIcon ? c.data.scopedSlots.expandIcon : (c.props.expandIcon || expandIcon)} scopedSlots={c.scopedSlots}>
    //   {Object.keys(slotMap).map(
    //     slotName => h('template', { slot: slotName }, slotMap[slotName])
    //   )}
    // </Collapse>

    return <Collapse {...c.data} scopedSlots={c.scopedSlots} class={c.props.iconRight ? 'iconRight' : ''}>
      {Object.keys(slotMap).map(
        slotName => h('template', { slot: slotName }, slotMap[slotName])
      )}
    </Collapse>
  }
}
