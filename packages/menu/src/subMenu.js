
import { Menu } from 'ant-design-vue'
import Icon from '../../icon'
export default {
  name: 'ik-sub-menu',
  inheritAttrs: false,
  functional: true,
  render (h, c) {
    let { default: defaultV, ...otherSlots } = c.slots()
    // console.log('ik-sub-menu 中 c', c)
    return <Menu.SubMenu
      title={otherSlots.title}
      {...c.data}
    >
      {defaultV}
    </Menu.SubMenu>
  }
}
