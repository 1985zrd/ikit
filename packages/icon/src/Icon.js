import { Icon } from 'ant-design-vue'
export default {
  name: 'ik-icon',
  props: {
    isIk: {
      type: Boolean,
      required: false
    }
  },
  inheritAttrs: false,
  functional: true,
  createFromIconfontCN: Icon.createFromIconfontCN, // 支持自定义字体
  getTwoToneColor: Icon.getTwoToneColor,
  setTwoToneColor: Icon.setTwoToneColor,
  render (h, c) {
    const slotMap = c.slots()
    const ikangIcon = Icon.createFromIconfontCN({
      scriptUrl: '//at.alicdn.com/t/font_1549246_fi7tati6rw6.js'
    })

    const children = Object.keys(slotMap).map(
      slotName => h('template', { slot: slotName }, slotMap[slotName])
    )

    return c.props.isIk ? (
      <ikangIcon {...c.data} scopedSlots={c.scopedSlots}>
        {children}
      </ikangIcon>
    ) : (
      <Icon {...c.data}>
        {children}
      </Icon>
    )
  }
}
