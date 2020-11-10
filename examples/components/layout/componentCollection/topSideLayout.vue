<template>
  <codeBox title="顶部-侧边布局 " description="拥有顶部导航及侧边栏的页面，多用于展示类网站。" :code="topSideLayoutCode">
    <ik-layout id="components-layout-demo-top-side">
      <ik-layout-header class="header">
        <div class="logo" />
        <ik-menu theme="dark" mode="horizontal" :defaultSelectedKeys="['2']" :style="{ lineHeight: '64px' }">
          <ik-menu-item key="1">nav 1</ik-menu-item>
          <ik-menu-item key="2">nav 2</ik-menu-item>
          <ik-menu-item key="3">nav 3</ik-menu-item>
        </ik-menu>
      </ik-layout-header>
      <ik-layout-content style="padding: 0 50px">
        <ik-breadcrumb style="margin: 16px 0">
          <ik-breadcrumb-item>Home</ik-breadcrumb-item>
          <ik-breadcrumb-item>List</ik-breadcrumb-item>
          <ik-breadcrumb-item>App</ik-breadcrumb-item>
        </ik-breadcrumb>
        <ik-layout style="padding: 24px 0; background: #fff">
          <ik-layout-sider width="200" style="background: #fff">
            <ik-menu mode="inline" :defaultSelectedKeys="['1']" :defaultOpenKeys="['sub1']" style="height: 100%">
              <ik-sub-menu key="sub1">
                <span slot="title">
                  <ik-icon type="user" />subnav 1
                </span>
                <ik-menu-item key="1">option1</ik-menu-item>
                <ik-menu-item key="2">option2</ik-menu-item>
                <ik-menu-item key="3">option3</ik-menu-item>
                <ik-menu-item key="4">option4</ik-menu-item>
              </ik-sub-menu>
              <ik-sub-menu key="sub2">
                <span slot="title">
                  <ik-icon type="laptop" />subnav 2
                </span>
                <ik-menu-item key="5">option5</ik-menu-item>
                <ik-menu-item key="6">option6</ik-menu-item>
                <ik-menu-item key="7">option7</ik-menu-item>
                <ik-menu-item key="8">option8</ik-menu-item>
              </ik-sub-menu>
              <ik-sub-menu key="sub3">
                <span slot="title">
                  <ik-icon type="notification" />subnav 3
                </span>
                <ik-menu-item key="9">option9</ik-menu-item>
                <ik-menu-item key="10">option10</ik-menu-item>
                <ik-menu-item key="11">option11</ik-menu-item>
                <ik-menu-item key="12">option12</ik-menu-item>
              </ik-sub-menu>
            </ik-menu>
          </ik-layout-sider>
          <ik-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">Content</ik-layout-content>
        </ik-layout>
      </ik-layout-content>
      <ik-layout-footer style="text-align: center">Design</ik-layout-footer>
    </ik-layout>
  </codeBox>
</template>

<script>
import { topSideLayoutCode } from './../codeExample'
export default {
  data () {
    return {
      topSideLayoutCode
    }
  }
}
</script>

<style>
#components-layout-demo-top-side .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 28px 16px 0;
  float: left;
}
</style>
