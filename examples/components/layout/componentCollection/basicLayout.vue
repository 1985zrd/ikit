<template>
  <codeBox title="基本结构 " description="典型的页面布局。" :code="basicLayoutCode">
    <div id="components-layout-demo-basic">
      <ik-layout>
        <ik-layout-header>Header</ik-layout-header>
        <ik-layout-content>Content</ik-layout-content>
        <ik-layout-footer>Footer</ik-layout-footer>
      </ik-layout>

      <ik-layout>
        <ik-layout-header>Header</ik-layout-header>
        <ik-layout>
          <ik-layout-sider>Sider</ik-layout-sider>
          <ik-layout-content>Content</ik-layout-content>
        </ik-layout>
        <ik-layout-footer>Footer</ik-layout-footer>
      </ik-layout>

      <ik-layout>
        <ik-layout-header>Header</ik-layout-header>
        <ik-layout>
          <ik-layout-content>Content</ik-layout-content>
          <ik-layout-sider>Sider</ik-layout-sider>
        </ik-layout>
        <ik-layout-footer>Footer</ik-layout-footer>
      </ik-layout>

      <ik-layout>
        <ik-layout-sider>Sider</ik-layout-sider>
        <ik-layout>
          <ik-layout-header>Header</ik-layout-header>
          <ik-layout-content>Content</ik-layout-content>
          <ik-layout-footer>Footer</ik-layout-footer>
        </ik-layout>
      </ik-layout>
    </div>
  </codeBox>
</template>

<script>
import { basicLayoutCode } from './../codeExample'
export default {
  data () {
    return {
      basicLayoutCode
    }
  }
}
</script>

<style>
#components-layout-demo-basic {
  text-align: center;
}
#components-layout-demo-basic .ant-layout-header,
#components-layout-demo-basic .ant-layout-footer {
  background: #7dbcea;
  color: #fff;
}
#components-layout-demo-basic .ant-layout-footer {
  line-height: 1.5;
}
#components-layout-demo-basic .ant-layout-sider {
  background: #3ba0e9;
  color: #fff;
  line-height: 120px;
}
#components-layout-demo-basic .ant-layout-content {
  background: rgba(16, 142, 233, 1);
  color: #fff;
  min-height: 120px;
  line-height: 120px;
}
#components-layout-demo-basic > .ant-layout {
  margin-bottom: 48px;
}
#components-layout-demo-basic > .ant-layout:last-child {
  margin: 0;
}
</style>
