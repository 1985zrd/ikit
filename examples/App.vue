<template>
  <ik-locale-provider locale="zhCN">
    <div id="app">
      <ik-layout style="overflow:hidden">
        <ik-affix :offsetTop="0" :style='{ zIndex: 999}'>
          <ik-layout-header>
            <ik-header></ik-header>
          </ik-layout-header>
        </ik-affix>
        <ik-layout id="components-layout-demo-fixed-sider">
          <ik-layout-sider :style="{ overflow: 'hidden auto', height: 'calc(100vh - 64px)', position: 'fixed', left: 0, background: '#fff',
          width: '270px', flex: '0 0 270px', maxWidth: '270px' }">
            <div class="logo"></div>
            <LeftNav :theme="theme" />
          </ik-layout-sider>
          <ik-layout :style="{ marginLeft: '270px' }">
            <ik-layout-content :style="{ overflow: 'initial' }">
              <div :style="{ padding: '20px 80px 20px 64px', background: '#fff' }">
                <h1>{{$route.meta.title}}</h1>
                <p v-if="$route.meta.desc">{{$route.meta.desc}}</p>
                <router-view id="main-content"></router-view>
              </div>
            </ik-layout-content>
          </ik-layout>
        </ik-layout>
      </ik-layout>
    </div>
  </ik-locale-provider>
</template>
<script>
import ikHeader from '@/components/common/Header'
import LeftNav from '@/components/common/LeftNav'
import { updateTheme } from './changeTheme/settingConfig'

export default {
  components: {
    LeftNav,
    ikHeader
  },
  mounted () {
    updateTheme(this.colors || this.defaultThemeColor)
  },
  computed: {
    theme: function () {
      return this.$store.state.theme
    },
    colors: function () {
      return this.$store.state.themeColor
    },
    defaultThemeColor: function () {
      return this.$store.state.defaultThemeColor
    }
  }
}
</script>
<style scoped>
/deep/.ant-layout-header{
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.08);
}
#main-content {
  margin-top: 50px;
}
/* #app {
  display: flex;
}
#main-content {
  flex: 1;
  overflow: hidden;
  padding: 0 80px 0 64px;
} */
</style>
