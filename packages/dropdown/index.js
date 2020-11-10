// 导入组件，组件必须声明 name
import Dropdown from './src/Dropdown'
import DropdownButton from './src/DropdownButton'

// 为组件提供 install 安装方法，供按需引入
Dropdown.install = function (Vue) {
  Vue.component(Dropdown.name, Dropdown)
  Vue.component(DropdownButton.name, DropdownButton)
}

Dropdown.Button = DropdownButton
// 默认导出组件
export default [Dropdown, DropdownButton]
