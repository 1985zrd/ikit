import { Upload } from 'ant-design-vue'
export default {
  name: 'ik-upload-dragger',
  inheritAttrs: false,
  functional: true,
  render (h, c) {
    return <Upload.Dragger {...c.data}>{c.children}</Upload.Dragger>
  }
}
