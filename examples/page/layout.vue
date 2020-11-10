
<template>
  <div class="layout-demo">
    <ik-row>
      <div class="demo1">
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
      </div>
    </ik-row>
    <ik-row>
      <div class="demo2">
        <ik-layout id="components-layout-demo-custom-trigger">
          <ik-layout-sider :trigger="null"
                           collapsible
                           v-model="collapsed">
            <div class="logo" />
            <ik-menu theme="dark"
                     mode="inline"
                     :defaultSelectedKeys="['1']">
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
              <ik-icon class="trigger"
                       :type="collapsed ? 'menu-unfold' : 'menu-fold'"
                       @click="()=> collapsed = !collapsed" />
            </ik-layout-header>
            <ik-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
              Content
            </ik-layout-content>
          </ik-layout>
        </ik-layout>
      </div>
    </ik-row>
    <ik-row>
      <div class="demo3">
        <ik-layout id="components-layout-demo-top-side-2">
          <ik-layout-header class="header">
            <div class="logo" />
            <ik-menu theme="dark"
                     mode="horizontal"
                     :defaultSelectedKeys="['2']"
                     :style="{ lineHeight: '64px' }">
              <ik-menu-item key="1">nav 1</ik-menu-item>
              <ik-menu-item key="2">nav 2</ik-menu-item>
              <ik-menu-item key="3">nav 3</ik-menu-item>
            </ik-menu>
          </ik-layout-header>
          <ik-layout>
            <ik-layout-sider width="200"
                             style="background: #fff">
              <ik-menu mode="inline"
                       :defaultSelectedKeys="['1']"
                       :defaultOpenKeys="['sub1']"
                       :style="{ height: '100%', borderRight: 0 }">
                <ik-sub-menu key="sub1">
                  <span slot="title">
                    <ik-icon type="user" />subnav 1</span>
                  <ik-menu-item key="1">option1</ik-menu-item>
                  <ik-menu-item key="2">option2</ik-menu-item>
                  <ik-menu-item key="3">option3</ik-menu-item>
                  <ik-menu-item key="4">option4</ik-menu-item>
                </ik-sub-menu>
                <ik-sub-menu key="sub2">
                  <span slot="title">
                    <ik-icon type="laptop" />subnav 2</span>
                  <ik-menu-item key="5">option5</ik-menu-item>
                  <ik-menu-item key="6">option6</ik-menu-item>
                  <ik-menu-item key="7">option7</ik-menu-item>
                  <ik-menu-item key="8">option8</ik-menu-item>
                </ik-sub-menu>
                <ik-sub-menu key="sub3">
                  <span slot="title">
                    <ik-icon type="notification" />subnav 3</span>
                  <ik-menu-item key="9">option9</ik-menu-item>
                  <ik-menu-item key="10">option10</ik-menu-item>
                  <ik-menu-item key="11">option11</ik-menu-item>
                  <ik-menu-item key="12">option12</ik-menu-item>
                </ik-sub-menu>
              </ik-menu>
            </ik-layout-sider>
            <ik-layout style="padding: 0 24px 24px">
              <ik-breadcrumb style="margin: 16px 0">
                <ik-breadcrumb-item>Home</ik-breadcrumb-item>
                <ik-breadcrumb-item>List</ik-breadcrumb-item>
                <ik-breadcrumb-item>App</ik-breadcrumb-item>
              </ik-breadcrumb>
              <ik-layout-content :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
                Content
              </ik-layout-content>
            </ik-layout>
          </ik-layout>
        </ik-layout>
      </div>
    </ik-row>
    <ik-row>
      <div class="demo4">
        <ik-layout id="components-layout-demo-top-side">
          <ik-layout-header class="header">
            <div class="logo" />
            <ik-menu theme="dark"
                     mode="horizontal"
                     :defaultSelectedKeys="['2']"
                     :style="{ lineHeight: '64px' }">
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
              <ik-layout-sider width="200"
                               style="background: #fff">
                <ik-menu mode="inline"
                         :defaultSelectedKeys="['1']"
                         :defaultOpenKeys="['sub1']"
                         style="height: 100%">
                  <ik-sub-menu key="sub1">
                    <span slot="title">
                      <ik-icon type="user" />subnav 1</span>
                    <ik-menu-item key="1">option1</ik-menu-item>
                    <ik-menu-item key="2">option2</ik-menu-item>
                    <ik-menu-item key="3">option3</ik-menu-item>
                    <ik-menu-item key="4">option4</ik-menu-item>
                  </ik-sub-menu>
                  <ik-sub-menu key="sub2">
                    <span slot="title">
                      <ik-icon type="laptop" />subnav 2</span>
                    <ik-menu-item key="5">option5</ik-menu-item>
                    <ik-menu-item key="6">option6</ik-menu-item>
                    <ik-menu-item key="7">option7</ik-menu-item>
                    <ik-menu-item key="8">option8</ik-menu-item>
                  </ik-sub-menu>
                  <ik-sub-menu key="sub3">
                    <span slot="title">
                      <ik-icon type="notification" />subnav 3</span>
                    <ik-menu-item key="9">option9</ik-menu-item>
                    <ik-menu-item key="10">option10</ik-menu-item>
                    <ik-menu-item key="11">option11</ik-menu-item>
                    <ik-menu-item key="12">option12</ik-menu-item>
                  </ik-sub-menu>
                </ik-menu>
              </ik-layout-sider>
              <ik-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
                Content
              </ik-layout-content>
            </ik-layout>
          </ik-layout-content>
          <ik-layout-footer style="text-align: center">
            Ant Design ©2018 Created by Ant UED
          </ik-layout-footer>
        </ik-layout>
      </div>
    </ik-row>
    <ik-row>
      <div class="demo5">
        <ik-layout id="components-layout-demo-top"
                   class="layout">
          <ik-layout-header>
            <div class="logo" />
            <ik-menu theme="dark"
                     mode="horizontal"
                     :defaultSelectedKeys="['2']"
                     :style="{ lineHeight: '64px' }">
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
            <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">Content</div>
          </ik-layout-content>
          <ik-layout-footer style="text-align: center">
            Ant Design ©2018 Created by Ant UED
          </ik-layout-footer>
        </ik-layout>
      </div>
    </ik-row>
    <ik-row>
      <div class="demo6">
        <ik-layout id="components-layout-demo-responsive">
          <ik-layout-sider breakpoint="lg"
                           collapsedWidth="0"
                           @collapse="onCollapse"
                           @breakpoint="onBreakpoint">
            <div class="logo" />
            <ik-menu theme="dark"
                     mode="inline"
                     :defaultSelectedKeys="['4']">
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
              <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
                content
              </div>
            </ik-layout-content>
            <ik-layout-footer style="textAlign: center">
              Ant Design ©2018 Created by Ant UED
            </ik-layout-footer>
          </ik-layout>
        </ik-layout>
      </div>
    </ik-row>
    <!-- <ik-row>
      <div class="demo7">
        <ik-layout id="components-layout-demo-side"
                   style="min-height: 100vh">
          <ik-layout-sider collapsible
                           v-model="collapsed">
            <div class="logo" />
            <ik-menu theme="dark"
                     :defaultSelectedKeys="['1']"
                     mode="inline">
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
                  <ik-icon type="user" /><span>User</span></span>
                <ik-menu-item key="3">Tom</ik-menu-item>
                <ik-menu-item key="4">Bill</ik-menu-item>
                <ik-menu-item key="5">Alex</ik-menu-item>
              </ik-sub-menu>
              <ik-sub-menu key="sub2">
                <span slot="title">
                  <ik-icon type="team" /><span>Team</span></span>
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
              <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
                Bill is a cat.
              </div>
            </ik-layout-content>
            <ik-layout-footer style="text-align: center">
              Ant Design ©2018 Created by Ant UED
            </ik-layout-footer>
          </ik-layout>
        </ik-layout>
      </div>
    </ik-row> -->
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'layout-demo',
  data () {
    return {
      collapsed: false
    }
  },
  components: {},
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

<style lang="less" scoped>
.layout-demo {
  .ant-row {
    padding: 50px 0;
    border-bottom: 1px blue dashed;
  }
  .demo1 {
    text-align: center;
    .ant-layout-header，.ant-layout-footer {
      background: #7dbcea;
      color: #fff;
    }
    .ant-layout-footer {
      line-height: 1.5;
    }
    .ant-layout-sider {
      background: #3ba0e9;
      color: #fff;
      line-height: 120px;
    }
    .ant-layout-content {
      background: rgba(16, 142, 233, 1);
      color: #fff;
      min-height: 120px;
      line-height: 120px;
    }
    & > .ant-layout:last-child {
      margin: 0;
    }
  }
  .demo2 {
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
  }
  .demo3 {
    #components-layout-demo-top-side-2 .logo {
      width: 120px;
      height: 31px;
      background: rgba(255, 255, 255, 0.2);
      margin: 16px 28px 16px 0;
      float: left;
    }
  }
  .demo4 {
    #components-layout-demo-top-side .logo {
      width: 120px;
      height: 31px;
      background: rgba(255, 255, 255, 0.2);
      margin: 16px 28px 16px 0;
      float: left;
    }
  }
  .demo5 {
    #components-layout-demo-top .logo {
      width: 120px;
      height: 31px;
      background: rgba(255, 255, 255, 0.2);
      margin: 16px 24px 16px 0;
      float: left;
    }
  }
  .demo6 {
    #components-layout-demo-responsive .logo {
      height: 32px;
      background: rgba(255, 255, 255, 0.2);
      margin: 16px;
    }
  }
  .demo7 {
    #components-layout-demo-side .logo {
      height: 32px;
      background: rgba(255, 255, 255, 0.2);
      margin: 16px;
    }
  }
}
</style>
