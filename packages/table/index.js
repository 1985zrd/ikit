
// 导入组件，组件必须声明 name
import Table from './src/table'
import Column from './src/column'
import ColumnGroup from './src/columnGroup'

Table.Column = Column
Table.ColumnGroup = ColumnGroup

// 为组件提供 install 安装方法，供按需引入
Table.install = function (Vue) {
  Vue.component(Table.name, Table)
  Vue.component(Table.Column.name, Column)
  Vue.component(Table.ColumnGroup.name, ColumnGroup)
}
export { Column, ColumnGroup }
// 默认导出组件
export default Table
