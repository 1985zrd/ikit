// 导入组件，组件必须声明 name
import Card from './src/Card'
import Grid from './src/Grid'
import Meta from './src/Meta'

// 为组件提供 install 安装方法，供按需引入
Card.install = function (Vue) {
  Vue.component(Card.name, Card)
  Vue.component(Grid.name, Grid)
  Vue.component(Meta.name, Meta)
}
Card.Meta = Meta
Card.Grid = Grid
// 默认导出组件
export default [Card, Meta, Grid]
