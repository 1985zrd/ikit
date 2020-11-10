
import { Menu } from 'ant-design-vue'
export default {
  name: 'ik-menu-item-group',
  inheritAttrs: false,
  functional: true,
  render (h, c) {
    let { default: defaultV, ...otherSlots } = c.slots()
    // console.log('ik-menu-item-group 中 ', c.data)
    return <Menu.ItemGroup
      title={otherSlots.title}
      {...c.data}
    >
      {defaultV}
    </Menu.ItemGroup>
  }
}
