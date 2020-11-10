import { Button } from 'ant-design-vue'
import Icon from '../../icon'
export default {
  name: 'ik-button',
  __ANT_BUTTON: true,
  inheritAttrs: false,
  functional: true,
  render (h, c) {
    let className = {
      'ant-btn-vertical': c.props.align,
      'ant-btn-noBorder': c.props.noBorder,
      'ant-btn-noHover': c.props.noHover
    }
    return h(Button, {
      class: className,
      ...c.data,
      ...c.scopedSlots
    }, [c.props.isIk ? h(Icon, {
      attrs: {
        type: c.props.icon,
        isIk: c.props.isIk
      }
    }) : '', c.children])
    // return (
    //   <Button {...c.data} scopedSlots={c.scopedSlots} class={className}>{ c.children }</Button>
    // )
  }
}
