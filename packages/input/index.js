// 导入组件，组件必须声明 name
import Input from './src/Input.js'
import InputTextArea from './src/InputTextarea'
import InputSearch from './src/InputSearch'
import InputGroup from './src/InputGroup'
import InputPassword from './src/InputPassword'

Input.TextArea = InputTextArea
Input.Search = InputSearch
Input.Group = InputGroup
Input.Password = InputPassword

// 为组件提供 install 安装方法，供按需引入
Input.install = function (Vue) {
  Vue.component(Input.name, Input)
  Vue.component(InputTextArea.name, InputTextArea)
  Vue.component(InputSearch.name, InputSearch)
  Vue.component(InputGroup.name, InputGroup)
  Vue.component(InputPassword.name, InputPassword)
}

// 默认导出组件
export { InputTextArea, InputSearch, InputGroup, InputPassword }
export default Input
