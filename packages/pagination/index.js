
// 导入组件，组件必须声明 name
import Pagination from './src/pagination.js'

// 为组件提供 install 安装方法，供按需引入
Pagination.install = function (Vue) {
  Vue.component(Pagination.name, Pagination)
}
// 默认导出组件
export default Pagination
