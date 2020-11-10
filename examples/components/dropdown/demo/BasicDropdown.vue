<template>
  <codeBox title="基本"
           description="最简单的下拉菜单。"
           :code="code">
    <ik-dropdown>
      <a style="color:#FF6800"
         href="#"> Hover me
        <ik-icon type="down" /> </a>
      <ik-menu slot="overlay">
        <ik-menu-item>
          <a href="javascript:;">1st menu item</a>
        </ik-menu-item>
        <ik-menu-item>
          <a href="javascript:;">2nd menu item</a>
        </ik-menu-item>
        <ik-menu-item>
          <a href="javascript:;">3rd menu item</a>
        </ik-menu-item>
      </ik-menu>
    </ik-dropdown>
  </codeBox>
</template>
<script>
import { basicDropdown } from '../dropdown.js'

export default {
  data () {
    return {
      code: basicDropdown
    }
  }
}
</script>
