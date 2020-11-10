const basicLayoutCode = `<template>
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
</template>

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
`

const customLayoutCode = `
<template>
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
        <ik-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> collapsed = !collapsed"
        />
      </ik-layout-header>
      <ik-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        Content
      </ik-layout-content>
    </ik-layout>
  </ik-layout>
</template>
<script>
  export default {
    data() {
      return {
        collapsed: false,
      };
    },
  };
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
`

const topSideBannerLayoutCode = `
<template>
  <ik-layout id="components-layout-demo-top-side-2">
    <ik-layout-header class="header">
      <div class="logo" />
      <ik-menu
        theme="dark"
        mode="horizontal"
        :defaultSelectedKeys="['2']"
        :style="{ lineHeight: '64px' }"
      >
        <ik-menu-item key="1">nav 1</ik-menu-item>
        <ik-menu-item key="2">nav 2</ik-menu-item>
        <ik-menu-item key="3">nav 3</ik-menu-item>
      </ik-menu>
    </ik-layout-header>
    <ik-layout>
      <ik-layout-sider width="200" style="background: #fff">
        <ik-menu
          mode="inline"
          :defaultSelectedKeys="['1']"
          :defaultOpenKeys="['sub1']"
          :style="{ height: '100%', borderRight: 0 }"
        >
          <ik-sub-menu key="sub1">
            <span slot="title"><ik-icon type="user" />subnav 1</span>
            <ik-menu-item key="1">option1</ik-menu-item>
            <ik-menu-item key="2">option2</ik-menu-item>
            <ik-menu-item key="3">option3</ik-menu-item>
            <ik-menu-item key="4">option4</ik-menu-item>
          </ik-sub-menu>
          <ik-sub-menu key="sub2">
            <span slot="title"><ik-icon type="laptop" />subnav 2</span>
            <ik-menu-item key="5">option5</ik-menu-item>
            <ik-menu-item key="6">option6</ik-menu-item>
            <ik-menu-item key="7">option7</ik-menu-item>
            <ik-menu-item key="8">option8</ik-menu-item>
          </ik-sub-menu>
          <ik-sub-menu key="sub3">
            <span slot="title"><ik-icon type="notification" />subnav 3</span>
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
        <ik-layout-content
          :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"
        >
          Content
        </ik-layout-content>
      </ik-layout>
    </ik-layout>
  </ik-layout>
</template>
<script>
  export default {
    data() {
      return {
        collapsed: false,
      };
    },
  };
</script>

<style>
  #components-layout-demo-top-side-2 .logo {
    width: 120px;
    height: 31px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px 28px 16px 0;
    float: left;
  }
</style>
`

const topSideLayoutCode = `
<template>
  <ik-layout id="components-layout-demo-top-side">
    <ik-layout-header class="header">
      <div class="logo" />
      <ik-menu
        theme="dark"
        mode="horizontal"
        :defaultSelectedKeys="['2']"
        :style="{ lineHeight: '64px' }"
      >
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
          <ik-menu
            mode="inline"
            :defaultSelectedKeys="['1']"
            :defaultOpenKeys="['sub1']"
            style="height: 100%"
          >
            <ik-sub-menu key="sub1">
              <span slot="title"><ik-icon type="user" />subnav 1</span>
              <ik-menu-item key="1">option1</ik-menu-item>
              <ik-menu-item key="2">option2</ik-menu-item>
              <ik-menu-item key="3">option3</ik-menu-item>
              <ik-menu-item key="4">option4</ik-menu-item>
            </ik-sub-menu>
            <ik-sub-menu key="sub2">
              <span slot="title"><ik-icon type="laptop" />subnav 2</span>
              <ik-menu-item key="5">option5</ik-menu-item>
              <ik-menu-item key="6">option6</ik-menu-item>
              <ik-menu-item key="7">option7</ik-menu-item>
              <ik-menu-item key="8">option8</ik-menu-item>
            </ik-sub-menu>
            <ik-sub-menu key="sub3">
              <span slot="title"><ik-icon type="notification" />subnav 3</span>
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
      Design
    </ik-layout-footer>
  </ik-layout>
</template>

<style>
  #components-layout-demo-top-side .logo {
    width: 120px;
    height: 31px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px 28px 16px 0;
    float: left;
  }
</style>
`

const topCenterBottomLayoutCode = `
<template>
  <ik-layout id="components-layout-demo-top" class="layout">
    <ik-layout-header>
      <div class="logo" />
      <ik-menu
        theme="dark"
        mode="horizontal"
        :defaultSelectedKeys="['2']"
        :style="{ lineHeight: '64px' }"
      >
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
      Design
    </ik-layout-footer>
  </ik-layout>
</template>
<style>
  #components-layout-demo-top .logo {
    width: 120px;
    height: 31px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px 24px 16px 0;
    float: left;
  }
</style>
`

const responseLayoutCode = `
<template>
  <ik-layout id="components-layout-demo-responsive">
    <ik-layout-sider
      breakpoint="lg"
      collapsedWidth="0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
    >
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
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          content
        </div>
      </ik-layout-content>
      <ik-layout-footer style="textAlign: center">
        Design
      </ik-layout-footer>
    </ik-layout>
  </ik-layout>
</template>
<script>
  export default {
    methods: {
      onCollapse(collapsed, type) {
        console.log(collapsed, type);
      },
      onBreakpoint(broken) {
        console.log(broken);
      },
    },
  };
</script>

<style>
  #components-layout-demo-responsive .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
</style>
`

const fixedSideLayoutCode = `
<template>
  <ik-layout id="components-layout-demo-fixed-sider">
    <ik-layout-sider :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }">
      <div class="logo"></div>
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
          <ik-icon type="bar-chart" />
          <span class="nav-text">nav 4</span>
        </ik-menu-item>
        <ik-menu-item key="5">
          <ik-icon type="cloud-o" />
          <span class="nav-text">nav 5</span>
        </ik-menu-item>
        <ik-menu-item key="6">
          <ik-icon type="appstore-o" />
          <span class="nav-text">nav 6</span>
        </ik-menu-item>
        <ik-menu-item key="7">
          <ik-icon type="team" />
          <span class="nav-text">nav 7</span>
        </ik-menu-item>
        <ik-menu-item key="8">
          <ik-icon type="shop" />
          <span class="nav-text">nav 8</span>
        </ik-menu-item>
      </ik-menu>
    </ik-layout-sider>
    <ik-layout :style="{ marginLeft: '200px' }">
      <ik-layout-header :style="{ background: '#fff', padding: 0 }" />
      <ik-layout-content :style="{ margin: '24px 16px 0', overflow: 'initial' }">
        <div :style="{ padding: '24px', background: '#fff', textAlign: 'center' }">
          ...
          <br />
          Really
          <br />...<br />...<br />...<br />
          long
          <br />...<br />...<br />...<br />...<br />...<br />...
          <br />...<br />...<br />...<br />...<br />...<br />...
          <br />...<br />...<br />...<br />...<br />...<br />...
          <br />...<br />...<br />...<br />...<br />...<br />...
          <br />...<br />...<br />...<br />...<br />...<br />...
          <br />...<br />...<br />...<br />...<br />...<br />...
          <br />...<br />...<br />...<br />...<br />...<br />
          content
        </div>
      </ik-layout-content>
      <ik-layout-footer :style="{ textAlign: 'center' }">
        Design
      </ik-layout-footer>
    </ik-layout>
  </ik-layout>
</template>
<style>
  #components-layout-demo-fixed-sider .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
</style>
`

const fixedHeaderLayoutCode = `
<template>
  <ik-layout id="components-layout-demo-fixed">
    <ik-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
      <div class="logo" />
      <ik-menu
        theme="dark"
        mode="horizontal"
        :defaultSelectedKeys="['2']"
        :style="{ lineHeight: '64px' }"
      >
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
    <ik-layout-footer :style="{ textAlign: 'center' }">
      Ant Design ©2018 Created by Ant UED
    </ik-layout-footer>
  </ik-layout>
</template>
<style>
  #components-layout-demo-fixed .logo {
    width: 120px;
    height: 31px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px 24px 16px 0;
    float: left;
  }
</style>
`

const sideLayoutCode = `
<template>
  <ik-layout id="components-layout-demo-side" style="min-height: 100vh">
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
          <span slot="title"><ik-icon type="user" /><span>User</span></span>
          <ik-menu-item key="3">Tom</ik-menu-item>
          <ik-menu-item key="4">Bill</ik-menu-item>
          <ik-menu-item key="5">Alex</ik-menu-item>
        </ik-sub-menu>
        <ik-sub-menu key="sub2">
          <span slot="title"><ik-icon type="team" /><span>Team</span></span>
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
</template>
<script>
  export default {
    data() {
      return {
        collapsed: false,
      };
    },
  };
</script>

<style>
  #components-layout-demo-side .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
</style>
`

export {
  basicLayoutCode, customLayoutCode, topSideBannerLayoutCode, topSideLayoutCode, topCenterBottomLayoutCode,
  responseLayoutCode, fixedSideLayoutCode, fixedHeaderLayoutCode, sideLayoutCode
}
