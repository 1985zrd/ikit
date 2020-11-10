
// 导入组件，组件必须声明 name
import Breadcrumb from './src/breadcrumb.js'
import BreadcrumbItem from './src/breadcrumbItem.js'

Breadcrumb.Item = BreadcrumbItem
// 为组件提供 install 安装方法，供按需引入
Breadcrumb.install = function (Vue) {
  Vue.component(Breadcrumb.name, Breadcrumb)
  Vue.component(BreadcrumbItem.name, BreadcrumbItem)
}
export { BreadcrumbItem }
// 默认导出组件
export default Breadcrumb
