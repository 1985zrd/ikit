// 导入组件，组件必须声明 name
import Radio from './src/Radio'
import Group from './src/RadioGroup'
import Button from './src/RadioButton'

// 为组件提供 install 安装方法，供按需引入
Radio.install = function (Vue) {
  Vue.component(Radio.name, Radio)
  Vue.component(Group.name, Group)
  Vue.component(Button.name, Button)
}

Radio.Group = Group
Radio.Button = Button

export const RadioGroup = Group
export const RadioButton = Button
// 默认导出组件
export default Radio
