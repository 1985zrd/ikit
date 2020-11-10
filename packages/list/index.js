// 导入组件，组件必须声明 name
import List from './src/List'
import Item from './src/Item'
import Meta from './src/Meta'

// 为组件提供 install 安装方法，供按需引入
List.install = function (Vue) {
  Vue.component(List.name, List)
  Vue.component(Item.name, Item)
}
Item.Meta = Meta
List.Item = Item
// 默认导出组件
export default [List, Item, Meta]
