import Vue from 'vue'
import Router from 'vue-router'
import navConf from './nav.config.json'
// import { addDemoRoutesConfig } from '../utils/addDemoRoutesConfig.js'

Vue.use(Router)

let routes = [
  {
    path: '/',
    redirect: '/guide'
  }
]
const newNavConf = navConf

Object.keys(newNavConf).forEach(header => {
  routes = routes.concat(newNavConf[header])
})
let addComponent = router => {
  router.forEach(route => {
    if (route.items) {
      addComponent(route.items)
      routes = routes.concat(route.items)
    } else {
      if (route.type === 'doc') {
        route.component = resolve =>
          require.ensure([], () => resolve(require(`../doc${route.path}.md`)))
      } else if (route.type === 'demo') {
        route.component = resolve =>
          require.ensure([], () => resolve(require(`../page${route.path}.vue`)))
      } else {
        route.component = resolve =>
          require.ensure([], () => resolve(require(`../components${route.path}/index.vue`)))
      }
    }
  })
}
addComponent(routes)

const router = new Router({
  mode: 'history',
  routes: routes
})

router.afterEach(to => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
})

export default router
