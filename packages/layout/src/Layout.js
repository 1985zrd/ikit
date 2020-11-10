import { Layout } from 'ant-design-vue'
export default {
  name: 'ik-layout',
  inheritAttrs: false,
  functional: true,
  render (h, c) {
    return <Layout {...c.data}>{c.children}</Layout>
  }
}
