
// 导入组件，组件必须声明 name
import Steps from './src/Steps'
import Step from './src/Step'

// 为组件提供 install 安装方法，供按需引入
Steps.Step = Steps
Steps.install = function (Vue) {
  Vue.component(Steps.name, Steps)
  Vue.component(Steps.Step.name, Step)
}
export { Step }
// 默认导出组件
export default Steps
