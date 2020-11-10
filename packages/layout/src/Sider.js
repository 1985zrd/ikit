import { Layout } from 'ant-design-vue'
export default {
  name: 'ik-layout-sider',
  inheritAttrs: false,
  functional: true,
  render (h, c) {
    return <Layout.Sider {...c.data}>{c.children}</Layout.Sider>
  }
}
