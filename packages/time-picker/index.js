
// 导入组件，组件必须声明 name
import TimePicker from './src/TimePicker'
import Base from '../base'

// 为组件提供 install 安装方法，供按需引入
TimePicker.install = function (Vue) {
  Vue.use(Base)
  Vue.component(TimePicker.name, TimePicker)
}
// 默认导出组件
export default TimePicker
