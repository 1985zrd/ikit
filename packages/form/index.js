// 导入组件，组件必须声明 name
// import Form from './src/form'
// import Item from './src/form-item'
// import Vue from 'vue'

// Vue.prototype.$form = Form
// // 为组件提供 install 安装方法，供按需引入
// Form.install = function (Vue) {
//   Vue.component(Form.name, Form)
//   Vue.component(Item.name, Item)
//   // Vue.prototype.$form = Form
// }

// Form.Item = Item

// export const FormItem = Item
// // 默认导出组件
// export default Form

import { Form } from 'ant-design-vue'

Form.name = 'ikForm'
Form.Item.name = 'ikFormItem'

export const FormItem = Form.Item
export default Form
