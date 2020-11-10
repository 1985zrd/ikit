import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import createLogger from 'vuex/dist/logger'

import demo from './demo'

Vue.use(Vuex)

const persistedStateOpt = {
  // storage: window.sessionStorage // 默认是用localStorage，可以用sessionStorage，也可以改用coikie（参考：https://www.npmjs.com/package/vuex-persistedstate）
  // reducer: function (val) { // 如果要选择持久化部分数据，请把reducer放开。这个方法用于部分数据持久化。
  //   return { // 需要持久化的对象，对象为空为所有数据都不持久化
  //     // demo: {
  //     //   title: val.demo.title
  //     // }
  //   }
  // }
}

export default new Vuex.Store({
  ...demo,
  plugins: process.env.NODE_ENV === 'production' ? [createPersistedState(persistedStateOpt)] : [createLogger(), createPersistedState(persistedStateOpt)]
})
