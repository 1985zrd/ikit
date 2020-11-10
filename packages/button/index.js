// 导入组件，组件必须声明 name
import Button from './src/Button.js'
import Group from './src/ButtonGroup'

// 为组件提供 install 安装方法，供按需引入
Button.install = function (Vue) {
  Vue.component(Button.name, Button)
  Vue.component(Group.name, Group)
}

export const ButtonGroup = Group
// 默认导出组件
export default Button
