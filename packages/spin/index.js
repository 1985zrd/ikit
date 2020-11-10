// 导入组件，组件必须声明 name
import Spin from './src/Spin'

// 为组件提供 install 安装方法，供按需引入
Spin.install = function (Vue) {
  Vue.component(Spin.name, Spin)
}

// 默认导出组件
export default Spin
