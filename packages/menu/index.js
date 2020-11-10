
// 导入组件，组件必须声明 name
import Menu from './src/menu.js'
import MenuItem from './src/menuItem'
import SubMenu from './src/subMenu'
import MenuDivider from './src/menuDivider'
import ItemGroup from './src/menuItemGroup'

Menu.Item = MenuItem
Menu.ItemGroup = ItemGroup
Menu.SubMenu = SubMenu
Menu.Divider = MenuDivider

// 为组件提供 install 安装方法，供按需引入
Menu.install = function (Vue) {
  Vue.component(Menu.name, Menu)
  Vue.component(Menu.Item.name, MenuItem)
  Vue.component(Menu.SubMenu.name, SubMenu)
  Vue.component(Menu.Divider.name, MenuDivider)
  Vue.component(Menu.ItemGroup.name, ItemGroup)
}

export { MenuItem, SubMenu, MenuDivider, ItemGroup }
// 默认导出组件
export default Menu
