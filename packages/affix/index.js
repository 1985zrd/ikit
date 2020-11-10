
// 导入组件，组件必须声明 name
import Affix from './src/Affix'

// 为组件提供 install 安装方法，供按需引入
Affix.install = function (Vue) {
  Vue.component(Affix.name, Affix)
}
// 默认导出组件
export default Affix
