<template>
  <codeBox title="右键菜单"
           description="默认是移入触发菜单，可以点击鼠标右键触发。"
           :code="code">
    <ik-dropdown :trigger="['contextmenu']">
      <span style="user-select: none">Right Click on Me</span>
      <ik-menu slot="overlay">
        <ik-menu-item key="1">1st menu item</ik-menu-item>
        <ik-menu-item key="2">2nd menu item</ik-menu-item>
        <ik-menu-item key="3">3rd menu item</ik-menu-item>
      </ik-menu>
    </ik-dropdown>
  </codeBox>
</template>
<script>
import { rightClickDropdown } from '../dropdown.js'

export default {
  data () {
    return {
      code: rightClickDropdown
    }
  }
}
</script>
