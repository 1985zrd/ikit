import { Layout } from 'ant-design-vue'
export default {
  name: 'ik-layout-footer',
  inheritAttrs: false,
  functional: true,
  render (h, c) {
    return <Layout.Footer {...c.data}>{c.children}</Layout.Footer>
  }
}
