// 导入组件，组件必须声明 name
import Select from './src/Select'
import SelectOption from './src/SelectOption'
import SelectOptGroup from './src/SelectOptGroup'

// 为组件提供 install 安装方法，供按需引入
Select.install = function (Vue) {
  Vue.component(Select.name, Select)
  Vue.component(SelectOption.name, SelectOption)
  Vue.component(SelectOptGroup.name, SelectOptGroup)
}

Select.Option = SelectOption
Select.OptGroup = SelectOptGroup
// 默认导出组件
export default [Select, SelectOption, SelectOptGroup]
