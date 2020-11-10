import { Layout } from 'ant-design-vue'
export default {
  name: 'ik-layout-header',
  inheritAttrs: false,
  functional: true,
  render (h, c) {
    return <Layout.Header {...c.data}>{c.children}</Layout.Header>
  }
}
