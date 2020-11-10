import Vue from 'vue'
// 导入组件库
import { Drawer, Tree, Transfer, TimePicker, Rate, Popconfirm, Badge, Popover } from 'ant-design-vue'
import ikit, { Spin, Icon } from '~/index'
import App from './App.vue'
import router from './router'
import store from './store'
import CodeBox from './components/common/CodeBox'
import MarkdownRender from '@/components/common/MarkdownRender.vue'
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)

/* 自定义字体 支持彩色字体 */
const MyIcon = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1452953_5psa3u7r2bs.js' // 在 iconfont.cn 上生成
})
// 注册全局组件
Vue.component('myIcon', MyIcon)
Vue.component('codeBox', CodeBox)
Vue.component('MarkdownRender', MarkdownRender)

// 注册antd组件
Vue.use(Drawer)
Vue.use(Tree)
Vue.use(Transfer)
Vue.use(TimePicker)
Vue.use(Rate)
Vue.use(Popconfirm)
Vue.use(Badge)
Vue.use(Popover)

// 注册ikit组件库
Vue.use(ikit)

Vue.config.productionTip = false

Spin.setDefaultIndicator({
  indicator: h => {
    return <ik-icon type="loading" style="color: rgba(0, 0, 0, 0.65);" spin />
  }
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
