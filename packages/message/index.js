
// 导入组件，组件必须声明 name
import Message from './src/Message'

// 为组件提供 install 安装方法，供按需引入
Message.install = function (Vue) {
  Vue.component(Message.name, Message)
  Vue.prototype.$message = Message
}
// 默认导出组件
export default Message
