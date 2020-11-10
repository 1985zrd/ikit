
// 导入组件，组件必须声明 name
import Transfer from './src/Transfer'

// 为组件提供 install 安装方法，供按需引入
Transfer.install = function (Vue) {
  Vue.component(Transfer.name, Transfer)
}
// 默认导出组件
export default Transfer
