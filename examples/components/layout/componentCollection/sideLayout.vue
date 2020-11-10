<template>
  <codeBox title="侧边布局 " :description="description" :code="sideLayoutCode">
    <div class="sideLayout">
      <iframe src="https://antdv.com/iframe/layout/#sider" height="360" width="100%" frameborder="0"></iframe>
      <!-- <ik-layout id="components-layout-demo-side" style="min-height: 360px">
        <ik-layout-sider collapsible v-model="collapsed">
          <div class="logo" />
          <ik-menu theme="dark" :defaultSelectedKeys="['1']" mode="inline">
            <ik-menu-item key="1">
              <ik-icon type="pie-chart" />
              <span>Option 1</span>
            </ik-menu-item>
            <ik-menu-item key="2">
              <ik-icon type="desktop" />
              <span>Option 2</span>
            </ik-menu-item>
            <ik-sub-menu key="sub1">
              <span slot="title">
                <ik-icon type="user" />
                <span>User</span>
              </span>
              <ik-menu-item key="3">Tom</ik-menu-item>
              <ik-menu-item key="4">Bill</ik-menu-item>
              <ik-menu-item key="5">Alex</ik-menu-item>
            </ik-sub-menu>
            <ik-sub-menu key="sub2">
              <span slot="title">
                <ik-icon type="team" />
                <span>Team</span>
              </span>
              <ik-menu-item key="6">Team 1</ik-menu-item>
              <ik-menu-item key="8">Team 2</ik-menu-item>
            </ik-sub-menu>
            <ik-menu-item key="9">
              <ik-icon type="file" />
              <span>File</span>
            </ik-menu-item>
          </ik-menu>
        </ik-layout-sider>
        <ik-layout>
          <ik-layout-header style="background: #fff; padding: 0" />
          <ik-layout-content style="margin: 0 16px">
            <ik-breadcrumb style="margin: 16px 0">
              <ik-breadcrumb-item>User</ik-breadcrumb-item>
              <ik-breadcrumb-item>Bill</ik-breadcrumb-item>
            </ik-breadcrumb>
            <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">Bill is a cat.</div>
          </ik-layout-content>
          <ik-layout-footer style="text-align: center">Ant Design ©2018 Created by Ant UED</ik-layout-footer>
        </ik-layout>
      </ik-layout> -->
    </div>
  </codeBox>
</template>
<script>
import { sideLayoutCode } from './../codeExample'
export default {
  data () {
    return {
      sideLayoutCode,
      description: '侧边两列式布局。页面横向空间有限时，侧边导航可收起。<br/>侧边导航在页面布局上采用的是左右的结构，一般主导航放置于页面的左侧固定位置，辅助菜单放置于工作区顶部。内容根据浏览器终端进行自适应，能提高横向空间的使用率，但是整个页面排版不稳定。侧边导航的模式层级扩展性强，一、二、三级导航项目可以更为顺畅且具关联性的被展示，同时侧边导航可以固定，使得用户在操作和浏览中可以快速的定位和切换当前位置，有很高的操作效率。但这类导航横向页面内容的空间会被牺牲一部份。',
      collapsed: false
    }
  }
}
</script>

<style lang="scss">
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

// .sideLayout {
//   height: 360px;
//   overflow: auto;
//   .ant-layout-sider-trigger {
//     position: absolute;
//   }
// }
</style>
