
// 导入组件，组件必须声明 name
import Badge from './src/Badge'

// 为组件提供 install 安装方法，供按需引入
Badge.install = function (Vue) {
  Vue.component(Badge.name, Badge)
}
// 默认导出组件
export default Badge
