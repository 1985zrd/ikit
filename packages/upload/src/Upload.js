import { Upload } from 'ant-design-vue'
export default {
  name: 'ik-upload',
  inheritAttrs: false,
  functional: true,
  render (h, c) {
    return <Upload {...c.data}>{c.children}</Upload>
  }
}
