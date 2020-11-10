// 导入组件，组件必须声明 name
import Upload from './src/Upload'
import Dragger from './src/Dragger'

// 为组件提供 install 安装方法，供按需引入
Upload.install = function (Vue) {
  Vue.component(Upload.name, Upload)
  Vue.component(Dragger.name, Dragger)
}
Upload.Dragger = Dragger
// 默认导出组件
export default [Upload, Dragger]
