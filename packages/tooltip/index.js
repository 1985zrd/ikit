
// 导入组件，组件必须声明 name
import Tooltip from './src/Tooltip'

// 为组件提供 install 安装方法，供按需引入
Tooltip.install = function (Vue) {
  Vue.component(Tooltip.name, Tooltip)
}
// 默认导出组件
export default Tooltip
