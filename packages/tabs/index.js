
// 导入组件，组件必须声明 name
import Tabs from './src/Tabs'
import TabPane from './src/TabPane'

Tabs.TabPane = TabPane

// 为组件提供 install 安装方法，供按需引入
Tabs.install = function (Vue) {
  Vue.component(Tabs.name, Tabs)
  Vue.component(TabPane.name, TabPane)
}

export { TabPane }
// 默认导出组件
export default Tabs
