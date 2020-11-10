<template>
  <codeBox :title="title"
           :description="description"
           :code="builtInMenu">
    <div>
      <ik-menu :inlineIndent='36'
               @click="handleClick"
               style="width: 256px"
               :defaultSelectedKeys="['1']"
               :openKeys.sync="openKeys"
               mode="inline">
        <ik-sub-menu key="sub1"
                     @titleClick="titleClick">
          <span slot="title">
            <ik-icon type="icontime"
                     isIk />
            <span>Navigation One</span>
          </span>
          <ik-menu-item-group key="g1">
            <template slot="title">
              <!-- <ik-icon type="qq" /> -->
              <span>Item 1</span>
            </template>
            <ik-menu-item key="1">Option 1</ik-menu-item>
            <ik-menu-item key="2">Option 2</ik-menu-item>
          </ik-menu-item-group>
          <ik-menu-item-group key="g2"
                              title="Item 2">
            <ik-menu-item key="3">Option 3</ik-menu-item>
            <ik-menu-item key="4">Option 4</ik-menu-item>
          </ik-menu-item-group>
        </ik-sub-menu>
        <ik-sub-menu key="sub2"
                     @titleClick="titleClick">
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
import { builtInMenu } from './../codeExample'

export default {
  data () {
    return {
      builtInMenu,
      current: ['mail'],
      openKeys: ['sub1'],
      title: '内嵌菜单',
      description: '垂直菜单，子菜单内嵌在菜单区域'
    }
  },
  methods: {
    handleClick (e) {
      console.log('click', e)
    },
    titleClick (e) {
      console.log('titleClick', e)
    }
  },
  watch: {
    openKeys (val) {
      console.log('openKeys', val)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
