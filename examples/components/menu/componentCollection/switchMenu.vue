<template>
  <codeBox :title="title"
           :description="description"
           :code="switchMenu">
    <div>
      <ik-switch :defaultChecked="false"
                 @change="changeMode" /> Change Mode
      <span className="ant-divider"
            style="margin: 0 1em" />
      <ik-switch :defaultChecked="false"
                 @change="changeTheme" /> Change Theme
      <br />
      <br />
      <ik-menu style="width: 256px"
               :defaultSelectedKeys="['1']"
               :defaultOpenKeys="['sub1']"
               :mode="mode"
               :theme="theme">
        <ik-menu-item key="1">
          <ik-icon type="icontime"
                   isIk />
          Navigation One
        </ik-menu-item>
        <ik-menu-item key="2">
          <ik-icon type="icontime"
                   isIk />
          Navigation Two
        </ik-menu-item>
        <ik-sub-menu key="sub1">
          <span slot="title">
            <ik-icon type="icontime"
                     isIk /><span>Navigation Three</span></span>
          <ik-menu-item key="3">Option 3</ik-menu-item>
          <ik-menu-item key="4">Option 4</ik-menu-item>
          <ik-sub-menu key="sub1-2"
                       title="Submenu">
            <ik-menu-item key="5">Option 5</ik-menu-item>
            <ik-menu-item key="6">Option 6</ik-menu-item>
          </ik-sub-menu>
        </ik-sub-menu>
        <ik-sub-menu key="sub2">
          <span slot="title">
            <ik-icon type="icontime"
                     isIk /><span>Navigation Four</span></span>
          <ik-menu-item key="7">Option 7</ik-menu-item>
          <ik-menu-item key="8">Option 8</ik-menu-item>
          <ik-menu-item key="9">Option 9</ik-menu-item>
          <ik-menu-item key="10">Option 10</ik-menu-item>
        </ik-sub-menu>
      </ik-menu>
    </div>
  </codeBox>
</template>

<script>
import { switchMenu } from './../codeExample'

export default {
  data () {
    return {
      switchMenu,
      title: '切换菜单类型',
      description: '展示动态切换模式',
      mode: 'inline',
      theme: 'light'
    }
  },
  methods: {
    changeMode (checked) {
      this.mode = checked ? 'vertical' : 'inline'
    },
    changeTheme (checked) {
      this.theme = checked ? 'dark' : 'light'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
