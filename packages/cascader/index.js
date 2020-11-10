// 导入组件，组件必须声明 name
import Cascader from './src/Cascader'

// 为组件提供 install 安装方法，供按需引入
Cascader.install = function (Vue) {
  Vue.component(Cascader.name, Cascader)
}

// 默认导出组件
export default Cascader
