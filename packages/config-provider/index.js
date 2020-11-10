
// 导入组件，组件必须声明 name
import ConfigProvider from './src/ConfigProvider'

// 为组件提供 install 安装方法，供按需引入
ConfigProvider.install = function (Vue) {
  Vue.component(ConfigProvider.name, ConfigProvider)
}
// 默认导出组件
export default ConfigProvider
