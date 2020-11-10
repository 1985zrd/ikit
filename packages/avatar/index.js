// 导入组件，组件必须声明 name
import Avatar from './src/Avatar'

// 为组件提供 install 安装方法，供按需引入
Avatar.install = function (Vue) {
  Vue.component(Avatar.name, Avatar)
}
// 默认导出组件
export default Avatar
