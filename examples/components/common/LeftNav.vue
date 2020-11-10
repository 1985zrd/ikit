<template>
  <div class="left-nav">
    <Menus :data="navList"
           :theme="theme"
           :defaultSelectedKeys="defaultSelectedKeys" />
  </div>
</template>

<script>
import navConf from '@/router/nav.config.json'
import Menus from '@/components/common/Menus'
// import { addDemoRoutesConfig } from '@/utils/addDemoRoutesConfig.js'
const newNavConf = navConf
const navList = Object.keys(newNavConf).reduce((result, key) => {
  const subRoute = {
    items: newNavConf[key],
    name: key,
    meta: {
      title: key
    }
  }
  if (key === '开发指南' || key === 'demo') {
    result = result.concat(subRoute.items)
  } else if (key === '组件') {
    result.push(subRoute)
  }
  return result
}, [])
export default {
  name: 'left-nav',
  props: ['theme'],
  data () {
    return {
      current: ['mail'],
      openKeys: ['sub1'],
      defaultSelectedKeys: '',
      navList
    }
  },
  components: {
    Menus
  },
  watch: {
    $route (val) {
      if (val) {
        let routeName = this.$route.name
        if (routeName) {
          this.defaultSelectedKeys = routeName
        }
      }
    }
  }
}
</script>

<style scoped>
.left-nav {
  /* width: 270px; */
  width: 100%;
  flex-shrink: 0;
  padding-bottom: 30px;
}
</style>
