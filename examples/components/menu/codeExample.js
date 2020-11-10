const topOfNavigation = `
<template>
  <div>
    <ik-menu v-model="current" mode="horizontal" theme="dark">
      <ik-menu-item key="mail"> <ik-icon type="mail" />Navigation One </ik-menu-item>
      <ik-menu-item key="app" disabled> <ik-icon type="appstore" />Navigation Two </ik-menu-item>
      <ik-sub-menu>
        <span slot="title" class="submenu-title-wrapper"
          ><ik-icon type="setting" />Navigation Three - Submenu</span
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
  </div>
</template>
<script>
  export default {
    data() {
      return {
        current: ['mail'],
      };
    },
  };
</script>`

const topOfNavigationL = `
<template>
  <div>
    <ik-menu v-model="current" mode="horizontal" theme="light">
      <ik-menu-item key="mail"> <ik-icon type="mail" />Navigation One </ik-menu-item>
      <ik-menu-item key="app" disabled> <ik-icon type="appstore" />Navigation Two </ik-menu-item>
      <ik-sub-menu>
        <span slot="title" class="submenu-title-wrapper"
          ><ik-icon type="setting" />Navigation Three - Submenu</span
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
  </div>
</template>
<script>
  export default {
    data() {
      return {
        current: ['mail'],
      };
    },
  };
</script>`

const builtInMenu = `
<template>
  <div>
    <ik-menu
      @click="handleClick"
      style="width: 256px"
      :defaultSelectedKeys="['1']"
      :openKeys.sync="openKeys"
      mode="inline"
    >
      <ik-sub-menu key="sub1" @titleClick="titleClick">
        <span slot="title"><ik-icon type="mail" /><span>Navigation One</span></span>
        <ik-menu-item-group key="g1">
          <template slot="title"
            ><span>Item 1</span>
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
  </div>
</template>
<script>
  export default {
    data() {
      return {
        current: ['mail'],
        openKeys: ['sub1'],
      };
    },
    methods: {
      handleClick(e) {
        console.log('click', e);
      },
      titleClick(e) {
        console.log('titleClick', e);
      },
    },
    watch: {
      openKeys(val) {
        console.log('openKeys', val);
      },
    },
  };
</script>`

const embeddedMenu = `
<template>
  <div style="width: 256px">
    <ik-switch :defaultChecked="false" @change="toggleCollapsed" /> Change Collapsed
    <br>
    <br>
    <div v-show="collapsed">
      <ik-switch :defaultChecked="false" @change="changeTwoLine" /> Change Style
      <br>
      <br>
    </div>
    <ik-switch :defaultChecked="false" @change="changeTheme" /> Change Theme
    <br>
    <br>
    <ik-menu
      :defaultSelectedKeys="['1']"
      :defaultOpenKeys="['sub1']"
      :inlineCollapsed="collapsed"
      :theme="theme"
      mode="inline"
      :showInlineCollapsedTwoLine='showInlineCollapsedTwoLine'
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
</template>

<script>
  export default {
    data() {
      return {
        collapsed: false,
        showInlineCollapsedTwoLine: false,
        theme: 'light'
      }
    },
    methods: {
      toggleCollapsed () {
        this.collapsed = !this.collapsed
      },
      changeTwoLine (checked) {
        this.showInlineCollapsedTwoLine = !this.showInlineCollapsedTwoLine
      },
      changeTheme (checked) {
        this.theme = checked ? 'dark' : 'light'
      }
    }
  }
</script>`

const collapsedOpenMenu = `
<template>
  <div style="width: 256px">
    <ik-menu
      :defaultSelectedKeys="['1']"
      :defaultOpenKeys="['sub1']"
      mode="inline"
      theme="light"
      :inlineCollapsed="collapsed"
      inlineCollapsedAttrName="collapsed"
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
</template>

<script>
  export default {
    data() {
      return {
        collapsed: false,
      };
    },
    methods: {
    },
  };
</script>`

const collapsedTwoOpenMenu = `
<template>
  <div style="width: 256px">
    <ik-menu
      :defaultSelectedKeys="['1']"
      :defaultOpenKeys="['sub1']"
      mode="inline"
      theme="dark"
      :inlineCollapsed="collapsed"
      inlineCollapsedAttrName="collapsed"
      showInlineCollapsedTwoLine='true'
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
</template>

<script>
  export default {
    data() {
      return {
        collapsed: false,
      };
    },
    methods: {
    },
  };
</script>`

const expandParentMenu = `
<template>
  <div>
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
  </div>
</template>
<script>
  export default {
    data() {
      return {
        rootSubmenuKeys: ['sub1', 'sub2', 'sub4'],
        openKeys: ['sub1'],
      };
    },
    methods: {
      onOpenChange(openKeys) {
        const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
          this.openKeys = openKeys;
        } else {
          this.openKeys = latestOpenKey ? [latestOpenKey] : [];
        }
      },
    },
  };
</script>`

const verticalMenu = `
<template>
  <div>
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
  </div>
</template>
<script>
  export default {
    methods: {
      handleClick(e) {
        console.log('click ', e);
      },
    },
  };
</script>`

const topicMenu = `
<template>
  <div>
    <ik-switch
      defaultChecked
      @change="changeTheme"
      checkedChildren="dark"
      unCheckedChildren="light"
    />
    <br />
    <br />
    <ik-menu
      style="width: 256px"
      :defaultSelectedKeys="['1']"
      :defaultOpenKeys="['sub1']"
      mode="inline"
      :theme="theme"
      :selectedKeys="[current]"
      @click="handleClick"
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
</template>
<script>
  export default {
    data() {
      return {
        current: '1',
        theme: 'dark',
      };
    },
    methods: {
      handleClick(e) {
        console.log('click ', e);
        this.current = e.key;
      },
      changeTheme(checked) {
        this.theme = checked ? 'dark' : 'light';
      },
    },
  };
</script>`

const switchMenu = `
<template>
  <div>
    <ik-switch :defaultChecked="false" @change="changeMode" /> Change Mode
    <span className="ant-divider" style="margin: 0 1em" />
    <ik-switch :defaultChecked="false" @change="changeTheme" /> Change Theme
    <br />
    <br />
    <ik-menu
      style="width: 256px"
      :defaultSelectedKeys="['1']"
      :defaultOpenKeys="['sub1']"
      :mode="mode"
      :theme="theme"
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
</template>
<script>
  export default {
    data() {
      return {
        mode: 'inline',
        theme: 'light',
      };
    },
    methods: {
      changeMode(checked) {
        this.mode = checked ? 'vertical' : 'inline';
      },
      changeTheme(checked) {
        this.theme = checked ? 'dark' : 'light';
      },
    },
  };
</script>`

const recursiveMenu = `
<template>
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
</template>

<script>
  /*
   * recommend SubMenu.vue https://github.com/vueComponent/ant-design-vue/blob/master/components/menu/demo/SubMenu.vue
   * SubMenu1.vue https://github.com/vueComponent/ant-design-vue/blob/master/components/menu/demo/SubMenu1.vue
   * */
  import SubMenu from './SubMenu';
  export default {
    components: {
      'sub-menu': SubMenu,
    },
    data() {
      return {
        collapsed: false,
        list: [
          {
            key: '1',
            title: 'Option 1',
          },
          {
            key: '2',
            title: 'Navigation 2',
            children: [
              {
                key: '2.1',
                title: 'Navigation 3',
                children: [{ key: '2.1.1', title: 'Option 2.1.1' }],
              },
            ],
          },
        ],
      };
    },
    methods: {
      toggleCollapsed() {
        this.collapsed = !this.collapsed;
      },
    },
  };
</script>`

export {
  topOfNavigation,
  topOfNavigationL,
  builtInMenu,
  embeddedMenu,
  collapsedOpenMenu,
  collapsedTwoOpenMenu,
  expandParentMenu,
  verticalMenu,
  topicMenu,
  switchMenu,
  recursiveMenu
}
