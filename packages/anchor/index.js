
// 导入组件，组件必须声明 name
import Anchor from './src/Anchor'
import AnchorLink from './src/AchorLink'

Anchor.Link = AnchorLink

// 为组件提供 install 安装方法，供按需引入
Anchor.install = function (Vue) {
  Vue.component(Anchor.name, Anchor)
  Vue.component(AnchorLink.name, AnchorLink)
}

export { AnchorLink }
// 默认导出组件
export default Anchor
