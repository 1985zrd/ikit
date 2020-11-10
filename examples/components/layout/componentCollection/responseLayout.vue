<template>
  <codeBox title="响应式布局" description="Layout.Sider 支持响应式布局。<br/>说明：配置 breakpoint 属性即生效，视窗宽度小于 breakpoint 时 Sider 缩小为 collapsedWidth 宽度，若将 collapsedWidth 设置为零，会出现特殊 trigger。" :code="responseLayoutCode">
    <ik-layout id="components-layout-demo-responsive">
      <ik-layout-sider breakpoint="lg" collapsedWidth="0" @collapse="onCollapse" @breakpoint="onBreakpoint">
        <div class="logo" />
        <ik-menu theme="dark" mode="inline" :defaultSelectedKeys="['4']">
          <ik-menu-item key="1">
            <ik-icon type="user" />
            <span class="nav-text">nav 1</span>
          </ik-menu-item>
          <ik-menu-item key="2">
            <ik-icon type="video-camera" />
            <span class="nav-text">nav 2</span>
          </ik-menu-item>
          <ik-menu-item key="3">
            <ik-icon type="upload" />
            <span class="nav-text">nav 3</span>
          </ik-menu-item>
          <ik-menu-item key="4">
            <ik-icon type="user" />
            <span class="nav-text">nav 4</span>
          </ik-menu-item>
        </ik-menu>
      </ik-layout-sider>
      <ik-layout>
        <ik-layout-header :style="{ background: '#fff', padding: 0 }" />
        <ik-layout-content :style="{ margin: '24px 16px 0' }">
          <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">content</div>
        </ik-layout-content>
        <ik-layout-footer style="textAlign: center">Design</ik-layout-footer>
      </ik-layout>
    </ik-layout>
  </codeBox>
</template>
<script>
import { responseLayoutCode } from './../codeExample'
export default {
  data () {
    return {
      responseLayoutCode
    }
  },
  methods: {
    onCollapse (collapsed, type) {
      console.log(collapsed, type)
    },
    onBreakpoint (broken) {
      console.log(broken)
    }
  }
}
</script>

<style>
#components-layout-demo-responsive .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
