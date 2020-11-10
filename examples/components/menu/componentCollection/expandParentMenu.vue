<template>
  <codeBox :title="title"
           :description="description"
           :code="expandParentMenu">
    <div>
      <ik-menu mode="inline"
               :openKeys="openKeys"
               @openChange="onOpenChange"
               style="width: 256px">
        <ik-sub-menu key="sub1">
          <span slot="title">
            <ik-icon type="icontime"
                     isIk />
            <span>Navigation One</span>
          </span>
          <ik-menu-item key="1">Option 1</ik-menu-item>
          <ik-menu-item key="2">Option 2</ik-menu-item>
          <ik-menu-item key="3">Option 3</ik-menu-item>
          <ik-menu-item key="4">Option 4</ik-menu-item>
        </ik-sub-menu>
        <ik-sub-menu key="sub2">
          <span slot="title">
            <ik-icon type="icontime"
                     isIk />
            <span>Navigation Two</span>
          </span>
          <ik-menu-item key="5">Option 5</ik-menu-item>
          <ik-menu-item key="6">Option 6</ik-menu-item>
          <ik-sub-menu key="sub3"
                       title="Submenu">
            <ik-menu-item key="7">Option 7</ik-menu-item>
            <ik-menu-item key="8">Option 8</ik-menu-item>
          </ik-sub-menu>
        </ik-sub-menu>
        <ik-sub-menu key="sub4">
          <span slot="title">
            <ik-icon type="icontime"
                     isIk />
            <span>Navigation Three</span>
          </span>
          <ik-menu-item key="9">Option 9</ik-menu-item>
          <ik-menu-item key="10">Option 10</ik-menu-item>
          <ik-menu-item key="11">Option 11</ik-menu-item>
          <ik-menu-item key="12">Option 12</ik-menu-item>
        </ik-sub-menu>
      </ik-menu>
    </div>
  </codeBox>
</template>

<script>
import { expandParentMenu } from './../codeExample'

export default {
  data () {
    return {
      expandParentMenu,
      title: '只展开当前父级菜单',
      description: '点击菜单，收起其他展开的所有菜单',
      rootSubmenuKeys: ['sub1', 'sub2', 'sub4'],
      openKeys: ['sub1']
    }
  },
  methods: {
    onOpenChange (openKeys) {
      const latestOpenKey = openKeys.find(
        key => this.openKeys.indexOf(key) === -1
      )
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
