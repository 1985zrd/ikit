import { Layout } from 'ant-design-vue'
export default {
  name: 'ik-layout-content',
  inheritAttrs: false,
  functional: true,
  render (h, c) {
    return <Layout.Content {...c.data}>{c.children}</Layout.Content>
  }
}
