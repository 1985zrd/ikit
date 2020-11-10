
// 导入组件，组件必须声明 name
import AutoComplete from './src/AutoComplete'

// 为组件提供 install 安装方法，供按需引入
AutoComplete.install = function (Vue) {
  Vue.component(AutoComplete.name, AutoComplete)
}
// 默认导出组件
export default AutoComplete
