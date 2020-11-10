<template>
  <codeBox title="多级菜单"
           description="传入的菜单里有多个层级。"
           :code="code">
    <ik-dropdown>
      <a style="color:#FF6800"
         href="#"> Cascading menu
        <ik-icon type="down" /> </a>
      <ik-menu slot="overlay">
        <ik-menu-item>1st menu item</ik-menu-item>
        <ik-menu-item>2nd menu item</ik-menu-item>
        <ik-sub-menu title="sub menu"
                     key="test">
          <ik-menu-item>3rd menu item</ik-menu-item>
          <ik-menu-item>4th menu item</ik-menu-item>
        </ik-sub-menu>
        <ik-sub-menu title="disabled sub menu"
                     disabled>
          <ik-menu-item>5d menu item</ik-menu-item>
          <ik-menu-item>6th menu item</ik-menu-item>
        </ik-sub-menu>
      </ik-menu>
    </ik-dropdown>
  </codeBox>
</template>
<script>
import { subDropdown } from '../dropdown.js'

export default {
  data () {
    return {
      code: subDropdown
    }
  }
}
</script>
