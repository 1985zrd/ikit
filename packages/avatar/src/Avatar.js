import { Avatar } from 'ant-design-vue'
export default {
  name: 'ik-avatar',
  inheritAttrs: false,
  functional: true,
  props: {
    isIk: {
      type: Boolean,
      required: false
    }
  },
  // render (h, c) {
  //   const slotMap = c.slots()
  //   return !c.props.isIk ? (
  //     <Avatar {...c.data} scopedSlots={c.scopedSlots}>
  //       {Object.keys(slotMap).map(
  //         slotName => h('template', { slot: slotName }, slotMap[slotName])
  //       )}
  //     </Avatar>
  //   ) : (<Avatar {...c.data} scopedSlots={c.scopedSlots} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" >{Object.keys(slotMap).map(
  //     slotName => h('template', { slot: slotName }, slotMap[slotName])
  //   )}
  //   </Avatar>)
  // }
  render (h, c) {
    const slotMap = c.slots()
    return <Avatar {...c.data} scopedSlots={c.scopedSlots}>
      {Object.keys(slotMap).map(
        slotName => h('template', { slot: slotName }, slotMap[slotName])
      )}
    </Avatar>
  }
}
