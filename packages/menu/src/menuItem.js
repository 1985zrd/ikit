
import { Menu } from 'ant-design-vue'
export default {
  name: 'ik-menu-item',
  inheritAttrs: false,
  functional: true,
  render (h, c) {
    return <Menu.Item {...c.data}>{c.children}</Menu.Item>
  }
}
