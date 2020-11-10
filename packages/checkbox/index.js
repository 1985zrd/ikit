// 导入组件，组件必须声明 name
import Checkbox from './src/Checkbox'
import Group from './src/Group'

Checkbox.Group = Group

// 为组件提供 install 安装方法，供按需引入
Checkbox.install = function (Vue) {
  Vue.component(Checkbox.name, Checkbox)
  Vue.component(Group.name, Group)
}

export const CheckboxGroup = Group

export default Checkbox
