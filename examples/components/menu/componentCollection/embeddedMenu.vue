<template>
  <codeBox :title="title"
           :description="description"
           :code="embeddedMenu">
    <div style="width: 256px">
      <ik-switch :defaultChecked="false"
                 @change="toggleCollapsed" /> Change Collapsed
      <br>
      <br>
      <div v-show="collapsed">
        <ik-switch :defaultChecked="false"
                   @change="changeTwoLine" /> Change Style
        <br>
        <br>
      </div>
      <ik-switch :defaultChecked="false"
                 @change="changeTheme" /> Change Theme
      <br>
      <br>
      <ik-menu :defaultSelectedKeys="['1']"
               :defaultOpenKeys="['sub1']"
               :inlineCollapsed="collapsed"
               :theme="theme"
               mode="inline"
               :showInlineCollapsedTwoLine='showInlineCollapsedTwoLine'>
        <ik-menu-item key="1">
          <ik-icon type="icontime"
                   isIk />
          <span>Option 1</span>
        </ik-menu-item>
        <ik-menu-item key="2">
          <ik-icon type="icontime"
                   isIk />
          <span>Option 2</span>
        </ik-menu-item>
        <ik-menu-item key="3">
          <ik-icon type="icontime"
                   isIk />
          <span>Option 3</span>
        </ik-menu-item>
        <ik-sub-menu key="sub1">
          <span slot="title">
            <ik-icon type="icontime"
                     isIk />
            <span>Navigation One</span>
          </span>
          <ik-menu-item key="5">Option 5</ik-menu-item>
          <ik-menu-item key="6">Option 6</ik-menu-item>
          <ik-menu-item key="7">Option 7</ik-menu-item>
          <ik-menu-item key="8">Option 8</ik-menu-item>
        </ik-sub-menu>
        <ik-sub-menu key="sub2">
          <span slot="title">
            <ik-icon type="icontime"
                     isIk />
            <span>Navigation Two</span>
          </span>
          <ik-menu-item key="9">Option 9</ik-menu-item>
          <ik-menu-item key="10">Option 10</ik-menu-item>
          <ik-sub-menu key="sub3"
                       title="Submenu">
            <ik-menu-item key="11">Option 11</ik-menu-item>
            <ik-menu-item key="12">Option 12</ik-menu-item>
          </ik-sub-menu>
        </ik-sub-menu>
      </ik-menu>
    </div>
  </codeBox>
</template>

<script>
import { embeddedMenu } from './../codeExample'

export default {
  data () {
    return {
      embeddedMenu,
      title: '缩起内嵌菜单',
      description: '内嵌菜单可以被缩起/展开',
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
</script>

<style lang="scss" scoped>
</style>
