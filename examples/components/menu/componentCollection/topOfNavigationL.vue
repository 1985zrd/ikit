<template>
  <div class="content">
    <codeBox :title="title"
             :description="description"
             :code="topOfNavigationL">
      <div>
        <ik-menu v-model="current"
                 mode="horizontal"
                 theme='light'>
          <ik-menu-item key="mail">
            <ik-icon type="icontime"
                     isIk />Navigation One
          </ik-menu-item>
          <ik-menu-item key="app"
                        disabled>
            <ik-icon type="icontime"
                     isIk />Navigation Two
          </ik-menu-item>
          <ik-sub-menu>
            <span slot="title"
                  class="submenu-title-wrapper">
              <ik-icon type="icontime"
                       isIk />Navigation Three - Submenu
            </span>
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
            <a href="https://ant.design"
               target="_blank"
               rel="noopener noreferrer">Navigation Four - Link</a>
          </ik-menu-item>
        </ik-menu>
      </div>
    </codeBox>
  </div>
</template>

<script>
import { topOfNavigationL } from './../codeExample'

export default {
  data () {
    return {
      topOfNavigationL,
      current: ['mail'],
      title: '顶部导航',
      description: '水平的顶部导航菜单,浅色主题'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
