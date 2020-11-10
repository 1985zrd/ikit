<template>
  <codeBox title="触发方式"
           description="默认是移入触发菜单，可以点击触发。"
           :code="code">
    <ik-dropdown :trigger="['click']">
      <a style="color:#FF6800"
         href="#"> Click me
        <ik-icon type="down" /> </a>
      <ik-menu slot="overlay">
        <ik-menu-item key="0">
          <a href="#">1st menu item</a>
        </ik-menu-item>
        <ik-menu-item key="1">
          <a href="#">2nd menu item</a>
        </ik-menu-item>
        <ik-menu-divider />
        <ik-menu-item key="3">3rd menu item</ik-menu-item>
      </ik-menu>
    </ik-dropdown>
  </codeBox>
</template>
<script>
import { clickDropdown } from '../dropdown.js'

export default {
  data () {
    return {
      code: clickDropdown
    }
  }
}
</script>
