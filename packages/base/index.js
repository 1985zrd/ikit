
// 导入组件，组件必须声明 name
import Base from './src/base'

// 为组件提供 install 安装方法，供按需引入
Base.install = function (Vue) {
  Vue.component(Base.name, Base)
}
// 默认导出组件
export default Base
