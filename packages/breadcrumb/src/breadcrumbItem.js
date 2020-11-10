import { Breadcrumb } from 'ant-design-vue'
export default {
  name: 'ik-breadcrumb-item',
  inheritAttrs: false,
  functional: true,
  __ANT_BREADCRUMB_ITEM: true,
  render (h, c) {
    // console.log('ik-breadcrumb h', h)
    // console.log('ik-breadcrumb c', c, c.slots(), c.children)
    return <Breadcrumb.Item {...c.data}>{c.children}</Breadcrumb.Item>
  }
}
