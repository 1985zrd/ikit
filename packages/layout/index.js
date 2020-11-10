// 导入组件，组件必须声明 name
import Layout from './src/Layout'
import Content from './src/Content'
import Sider from './src/Sider'
import Header from './src/Header'
import Footer from './src/Footer'

// 为组件提供 install 安装方法，供按需引入
Layout.install = function (Vue) {
  Vue.component(Layout.name, Layout)
  Vue.component(Content.name, Content)
  Vue.component(Sider.name, Sider)
  Vue.component(Header.name, Header)
  Vue.component(Footer.name, Footer)
}
Layout.Content = Content
Layout.Sider = Sider
Layout.Header = Header
Layout.Footer = Footer
// 默认导出组件
export default [Layout, Content, Sider, Footer, Header]
