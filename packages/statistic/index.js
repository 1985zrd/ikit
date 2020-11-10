
// 导入组件，组件必须声明 name
import Statistic from './src/Statistic'
import Countdown from './src/Countdown'

Statistic.Countdown = Countdown

// 为组件提供 install 安装方法，供按需引入
Statistic.install = function (Vue) {
  Vue.component(Statistic.name, Statistic)
  Vue.component(Countdown.name, Countdown)
}

export { Countdown }
// 默认导出组件
export default Statistic
