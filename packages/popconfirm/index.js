
// 导入组件，组件必须声明 name
import Popconfirm from './src/Popconfirm'

// 为组件提供 install 安装方法，供按需引入
Popconfirm.install = function (Vue) {
  Vue.component(Popconfirm.name, Popconfirm)
}
// 默认导出组件
export default Popconfirm
