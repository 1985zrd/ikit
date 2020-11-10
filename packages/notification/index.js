
// 导入组件，组件必须声明 name
import Notification from './src/Notification'

// 为组件提供 install 安装方法，供按需引入
Notification.install = function (Vue) {
  Vue.component(Notification.name, Notification)
}
// 默认导出组件
export default Notification
