
// 导入组件，组件必须声明 name
import Popover from './src/Popover'

// 为组件提供 install 安装方法，供按需引入
Popover.install = function (Vue) {
  Vue.component(Popover.name, Popover)
}
// 默认导出组件
export default Popover
