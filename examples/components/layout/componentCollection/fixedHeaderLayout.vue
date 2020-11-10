<template>
  <codeBox title="固定头部 " description="一般用于固定顶部导航，方便页面切换。" :code="fixedHeaderLayoutCode">
    <div class="fixedHeaderLayout">
      <iframe src="https://antdv.com/iframe/layout/#fixed-header" height="360" width="100%" frameborder="0"></iframe>
      <!-- <ik-layout id="components-layout-demo-fixed">
        <ik-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
          <div class="logo" />
          <ik-menu theme="dark" mode="horizontal" :defaultSelectedKeys="['2']" :style="{ lineHeight: '64px' }">
            <ik-menu-item key="1">nav 1</ik-menu-item>
            <ik-menu-item key="2">nav 2</ik-menu-item>
            <ik-menu-item key="3">nav 3</ik-menu-item>
          </ik-menu>
        </ik-layout-header>
        <ik-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
          <ik-breadcrumb :style="{ margin: '16px 0' }">
            <ik-breadcrumb-item>Home</ik-breadcrumb-item>
            <ik-breadcrumb-item>List</ik-breadcrumb-item>
            <ik-breadcrumb-item>App</ik-breadcrumb-item>
          </ik-breadcrumb>
          <div :style="{ background: '#fff', padding: '24px', minHeight: '380px' }">Content</div>
        </ik-layout-content>
        <ik-layout-footer :style="{ textAlign: 'center' }">Ant Design ©2018 Created by Ant UED</ik-layout-footer>
      </ik-layout>-->
    </div>
  </codeBox>
</template>

<script>
import { fixedHeaderLayoutCode } from './../codeExample'
export default {
  data () {
    return {
      fixedHeaderLayoutCode
    }
  }
}
</script>

<style lang="scss">
.fixedHeaderLayout {
  // height: 428px;
  // overflow: auto;
  #components-layout-demo-fixed {
    position: relative;
    .logo {
      width: 120px;
      height: 31px;
      background: rgba(255, 255, 255, 0.2);
      margin: 16px 24px 16px 0;
      float: left;
    }
    // .ant-layout-header {
    //   position: absolute !important;
    //   top: 0;
    //   left: 0;
    // }
    // .ant-layout-content {
    //   margin-top: 60px !important;
    //   height: 296px;
    //   overflow: auto;
    // }
  }
}
</style>
