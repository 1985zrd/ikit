<template>
  <codeBox title="自定义触发器 " description="要使用自定义触发器，可以设置 :trigger= 'null' 来隐藏默认设定。" :code="customLayoutCode">
    <ik-layout id="components-layout-demo-custom-trigger">
      <ik-layout-sider :trigger="null" collapsible v-model="collapsed">
        <div class="logo" />
        <ik-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
          <ik-menu-item key="1">
            <ik-icon type="user" />
            <span>nav 1</span>
          </ik-menu-item>
          <ik-menu-item key="2">
            <ik-icon type="video-camera" />
            <span>nav 2</span>
          </ik-menu-item>
          <ik-menu-item key="3">
            <ik-icon type="upload" />
            <span>nav 3</span>
          </ik-menu-item>
        </ik-menu>
      </ik-layout-sider>
      <ik-layout>
        <ik-layout-header style="background: #fff; padding: 0">
          <ik-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="()=> collapsed = !collapsed" />
        </ik-layout-header>
        <ik-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">Content</ik-layout-content>
      </ik-layout>
    </ik-layout>
  </codeBox>
</template>
<script>
import { customLayoutCode } from './../codeExample'
export default {
  data () {
    return {
      customLayoutCode,
      collapsed: false
    }
  }
}
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
