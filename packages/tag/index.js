
// 导入组件，组件必须声明 name
import Tag from './src/Tag'
import CheckableTag from './src/CheckableTag'

// 为组件提供 install 安装方法，供按需引入
Tag.CheckableTag = CheckableTag
Tag.install = function (Vue) {
  Vue.component(Tag.name, Tag)
  Vue.component(Tag.CheckableTag.name, CheckableTag)
}
export { CheckableTag }
// 默认导出组件
export default Tag
