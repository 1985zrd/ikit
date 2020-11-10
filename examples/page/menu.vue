
<template>
  <div class="menu">
    <ik-button type="primary" @click="toggleCollapsed" style="margin-bottom: 16px">
      <ik-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
    </ik-button>
    <ik-button
      @click="changeTheme"
    >切换主题</ik-button>
    <div style="width: 192px">
      <ik-menu
      @click="handleClick"
      :theme="theme"
      :defaultSelectedKeys="['1']"
      :openKeys.sync="openKeys"
      mode="inline"
      class="ik-menu--inline-collapsed--two"
      :inlineCollapsed="collapsed"
    >
      <ik-sub-menu key="sub1" @titleClick="titleClick">
        <span slot="title"><ik-icon type="mail" /><span>一级标题</span></span>
        <ik-menu-item-group key="g1">
          <template slot="title">
            <ik-icon type="qq" /><span>Item 1</span>
          </template>
          <ik-menu-item key="1">Option 1</ik-menu-item>
          <ik-menu-item key="2">Option 2</ik-menu-item>
        </ik-menu-item-group>
        <ik-menu-item-group key="g2" title="Item 2">
          <ik-menu-item key="3">Option 3</ik-menu-item>
          <ik-menu-item key="4">Option 4</ik-menu-item>
        </ik-menu-item-group>
      </ik-sub-menu>
      <ik-sub-menu key="sub2" @titleClick="titleClick">
        <span slot="title"><ik-icon type="appstore" /><span>二级标题</span></span>
        <ik-menu-item key="5">Option 5</ik-menu-item>
        <ik-menu-item key="6">Option 6</ik-menu-item>
        <ik-sub-menu key="sub3" title="Submenu">
          <ik-menu-item key="7">Option 7</ik-menu-item>
          <ik-menu-item key="8">Option 8</ik-menu-item>
        </ik-sub-menu>
      </ik-sub-menu>
      <ik-sub-menu key="sub4">
        <span slot="title"><ik-icon type="setting" /><span>三级标题</span></span>
        <ik-menu-item key="9">Option 9</ik-menu-item>
        <ik-menu-item key="10">Option 10</ik-menu-item>
        <ik-menu-item key="11">Option 11</ik-menu-item>
        <ik-menu-item key="12">Option 12</ik-menu-item>
      </ik-sub-menu>
    </ik-menu>
    </div>
    <br>
    <br>
    <br>
    <br>
    <ik-menu v-model="current" mode="horizontal">
      <ik-menu-item key="mail"> <ik-icon type="mail" />Navigation One </ik-menu-item>
      <ik-menu-item key="app" disabled> <ik-icon type="appstore" />Navigation Two </ik-menu-item>
      <ik-sub-menu>
        <span slot="title" class="submenu-title-wrapper">
          <ik-icon type="setting" />
          Navigation Three - Submenu
        </span
        >
        <ik-menu-item-group title="Item 1">
          <ik-menu-item key="setting:1">Option 1</ik-menu-item>
          <ik-menu-item key="setting:2">Option 2</ik-menu-item>
        </ik-menu-item-group>
        <ik-menu-item-group title="Item 2">
          <ik-menu-item key="setting:3">Option 3</ik-menu-item>
          <ik-menu-item key="setting:4">Option 4</ik-menu-item>
        </ik-menu-item-group>
      </ik-sub-menu>
      <ik-menu-item key="alipay">
        <a href="http://ikit.ikang.com" target="_blank" rel="noopener noreferrer"
          >Navigation Four - Link</a
        >
      </ik-menu-item>
    </ik-menu>
    <br>
    <br>
    <br>
    <div style="width: 256px">
    <ik-menu
      :defaultSelectedKeys="['1']"
      :defaultOpenKeys="['sub1']"
      mode="inline"
      theme="dark"
      :inlineCollapsed="collapsed"
    >
      <ik-menu-item key="1">
        <ik-icon type="pie-chart" />
        <span>Option 1</span>
      </ik-menu-item>
      <ik-menu-item key="2">
        <ik-icon type="desktop" />
        <span>Option 2</span>
      </ik-menu-item>
      <ik-menu-item key="3">
        <ik-icon type="inbox" />
        <span>Option 3</span>
      </ik-menu-item>
      <ik-sub-menu key="sub1">
        <span slot="title"><ik-icon type="mail" /><span>Navigation One</span></span>
        <ik-menu-item key="5">Option 5</ik-menu-item>
        <ik-menu-item key="6">Option 6</ik-menu-item>
        <ik-menu-item key="7">Option 7</ik-menu-item>
        <ik-menu-item key="8">Option 8</ik-menu-item>
      </ik-sub-menu>
      <ik-sub-menu key="sub2">
        <span slot="title"><ik-icon type="appstore" /><span>Navigation Two</span></span>
        <ik-menu-item key="9">Option 9</ik-menu-item>
        <ik-menu-item key="10">Option 10</ik-menu-item>
        <ik-sub-menu key="sub3" title="Submenu">
          <ik-menu-item key="11">Option 11</ik-menu-item>
          <ik-menu-item key="12">Option 12</ik-menu-item>
        </ik-sub-menu>
      </ik-sub-menu>
    </ik-menu>
  </div>
  <br>
  <br>
  <br>
  <br>
  <br>
  <ik-menu mode="inline" :openKeys="openKeys" @openChange="onOpenChange" style="width: 256px">
      <ik-sub-menu key="sub1">
        <span slot="title"><ik-icon type="mail" /><span>Navigation One</span></span>
        <ik-menu-item key="1">Option 1</ik-menu-item>
        <ik-menu-item key="2">Option 2</ik-menu-item>
        <ik-menu-item key="3">Option 3</ik-menu-item>
        <ik-menu-item key="4">Option 4</ik-menu-item>
      </ik-sub-menu>
      <ik-sub-menu key="sub2">
        <span slot="title"><ik-icon type="appstore" /><span>Navigation Two</span></span>
        <ik-menu-item key="5">Option 5</ik-menu-item>
        <ik-menu-item key="6">Option 6</ik-menu-item>
        <ik-sub-menu key="sub3" title="Submenu">
          <ik-menu-item key="7">Option 7</ik-menu-item>
          <ik-menu-item key="8">Option 8</ik-menu-item>
        </ik-sub-menu>
      </ik-sub-menu>
      <ik-sub-menu key="sub4">
        <span slot="title"><ik-icon type="setting" /><span>Navigation Three</span></span>
        <ik-menu-item key="9">Option 9</ik-menu-item>
        <ik-menu-item key="10">Option 10</ik-menu-item>
        <ik-menu-item key="11">Option 11</ik-menu-item>
        <ik-menu-item key="12">Option 12</ik-menu-item>
      </ik-sub-menu>
    </ik-menu>
    <br>
    <br>
    <br>
    <br>
    <br>
    <ik-menu style="width: 256px" mode="vertical" @click="handleClick">
      <ik-menu-item key="1">
        <ik-icon type="mail" />
        Navigation One
      </ik-menu-item>
      <ik-menu-item key="2">
        <ik-icon type="calendar" />
        Navigation Two
      </ik-menu-item>
      <ik-sub-menu key="sub1">
        <span slot="title"><ik-icon type="appstore" /><span>Navigation Three</span></span>
        <ik-menu-item key="3">Option 3</ik-menu-item>
        <ik-menu-item key="4">Option 4</ik-menu-item>
        <ik-sub-menu key="sub1-2" title="Submenu">
          <ik-menu-item key="5">Option 5</ik-menu-item>
          <ik-menu-item key="6">Option 6</ik-menu-item>
        </ik-sub-menu>
      </ik-sub-menu>
      <ik-sub-menu key="sub2">
        <span slot="title"><ik-icon type="setting" /><span>Navigation Four</span></span>
        <ik-menu-item key="7">Option 7</ik-menu-item>
        <ik-menu-item key="8">Option 8</ik-menu-item>
        <ik-menu-item key="9">Option 9</ik-menu-item>
        <ik-menu-item key="10">Option 10</ik-menu-item>
      </ik-sub-menu>
    </ik-menu>
    <br>
    <br>
    <br>
    <br>
    <div>
    <ik-button
      @click="changeTheme"
    >切换主题</ik-button>
    <ik-button
      @click="changeMode"
    >切换模式</ik-button>
    <br />
    <br />
    <ik-menu
      style="width: 256px"
      :defaultSelectedKeys="['1']"
      :defaultOpenKeys="['sub1']"
      :mode="mode"
      :theme="theme"
      :selectedKeys="[currentNum]"
      @click="handleClickCurrent"
    >
      <ik-menu-item key="1">
        <ik-icon type="mail" />
        Navigation One
      </ik-menu-item>
      <ik-menu-item key="2">
        <ik-icon type="calendar" />
        Navigation Two
      </ik-menu-item>
      <ik-sub-menu key="sub1">
        <span slot="title"><ik-icon type="appstore" /><span>Navigation Three</span></span>
        <ik-menu-item key="3">Option 3</ik-menu-item>
        <ik-menu-item key="4">Option 4</ik-menu-item>
        <ik-sub-menu key="sub1-2" title="Submenu">
          <ik-menu-item key="5">Option 5</ik-menu-item>
          <ik-menu-item key="6">Option 6</ik-menu-item>
        </ik-sub-menu>
      </ik-sub-menu>
      <ik-sub-menu key="sub2">
        <span slot="title"><ik-icon type="setting" /><span>Navigation Four</span></span>
        <ik-menu-item key="7">Option 7</ik-menu-item>
        <ik-menu-item key="8">Option 8</ik-menu-item>
        <ik-menu-item key="9">Option 9</ik-menu-item>
        <ik-menu-item key="10">Option 10</ik-menu-item>
      </ik-sub-menu>
    </ik-menu>
  </div>
  <br>
  <br>
  <br>
  <br>
  <br>
  <div style="width: 256px">
    <ik-button type="primary" @click="toggleCollapsed" style="margin-bottom: 16px">
      <ik-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
    </ik-button>
    <ik-menu
      :defaultSelectedKeys="['1']"
      :defaultOpenKeys="['2']"
      mode="inline"
      theme="dark"
      :inlineCollapsed="collapsed"
    >
      <template v-for="item in list">
        <ik-menu-item v-if="!item.children" :key="item.key">
          <ik-icon type="pie-chart" />
          <span>{{item.title}}</span>
        </ik-menu-item>
        <sub-menu v-else :menu-info="item" :key="item.key" />
      </template>
    </ik-menu>
  </div>
  </div>
</template>

<script type="text/ecmascript-6">
import SubMenu from '@/components/menu/componentCollection/components/SubMenu.vue'
export default {
  name: 'menu-demo',
  components: {
    'sub-menu': SubMenu
  },
  data () {
    return {
      collapsed: false,
      list: [
        {
          key: '1',
          title: 'Option 1'
        },
        {
          key: '2',
          title: 'Navigation 2',
          children: [
            {
              key: '2.1',
              title: 'Navigation 3',
              children: [{ key: '2.1.1', title: 'Option 2.1.1' }]
            }
          ]
        }
      ],
      current: ['mail'],
      openKeys: ['sub1'],
      rootSubmenuKeys: ['sub1', 'sub2', 'sub4'],
      currentNum: '1',
      mode: 'inline',
      theme: 'dark'
    }
  },
  watch: {
    openKeys (val) {
      console.log('openKeys', val)
    }
  },
  methods: {
    toggleCollapsed () {
      this.collapsed = !this.collapsed
    },
    onOpenChange (openKeys) {
      console.log('onOpenChange', openKeys)
      const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1)
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : []
      }
    },
    handleClick (e) {
      console.log('click', e)
    },
    titleClick (e) {
      console.log('titleClick', e)
    },
    handleClickCurrent (e) {
      console.log('click', e)
      if (e.key !== undefined) {
        this.currentNum = e.key
      }
    },
    changeMode () {
      this.mode = this.mode === 'inline' ? 'vertical' : 'inline'
    },
    changeTheme () {
      this.theme = this.theme === 'light' ? 'dark' : 'light'
    }
  }
}
</script>
<style lang="less" scoped>
.menu{

}
</style>
