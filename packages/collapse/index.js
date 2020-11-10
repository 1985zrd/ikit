
// 导入组件，组件必须声明 name
import Collapse from './src/Collapse'
import CollapsePanel from './src/CollapsePanel'
import Base from '../base'

Collapse.Panel = CollapsePanel

// 为组件提供 install 安装方法，供按需引入
Collapse.install = function (Vue) {
  Vue.use(Base)
  Vue.component(Collapse.name, Collapse)
  Vue.component(CollapsePanel.name, CollapsePanel)
}
export { CollapsePanel }
// 默认导出组件
export default Collapse
