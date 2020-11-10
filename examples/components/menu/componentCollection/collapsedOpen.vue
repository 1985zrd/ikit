<template>
  <codeBox :title="title"
           :description="description"
           :code="collapsedOpenMenu">
    <div style="width: 256px">
      <ik-menu :inlineIndent='36'
               :defaultSelectedKeys="['1']"
               :defaultOpenKeys="['sub1']"
               mode="inline"
               theme="light"
               :inlineCollapsed="collapsed"
               inlineCollapsedAttrName="collapsed">
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
import { collapsedOpenMenu } from './../codeExample'

export default {
  data () {
    return {
      collapsedOpenMenu,
      title: '自带收缩按钮',
      description: '内嵌菜单可以被缩起/展开, 展示自带收缩按钮动态切换模式，需要添加 inlineCollapsedAttrName，值为inlineCollapsed属性的变量名 ',
      collapsed: false
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>
