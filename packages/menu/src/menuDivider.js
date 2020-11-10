
import { Menu } from 'ant-design-vue'
export default {
  name: 'ik-menu-divider',
  inheritAttrs: false,
  functional: true,
  render (h, c) {
    return <Menu.Divider {...c.data}>{c.children}</Menu.Divider>
  }
}
