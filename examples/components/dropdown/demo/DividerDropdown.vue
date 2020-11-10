<template>
  <codeBox title="其他元素"
           description="分割线和不可用菜单项。"
           :code="code">
    <ik-dropdown>
      <a style="color:#FF6800"
         href="#"> Hover me
        <ik-icon type="down" /> </a>
      <ik-menu slot="overlay">
        <ik-menu-item key="0">
          <a target="_blank"
             rel="noopener noreferrer"
             href="#">1st menu item</a>
        </ik-menu-item>
        <ik-menu-item key="1">
          <a target="_blank"
             rel="noopener noreferrer"
             href="#">2nd menu item</a>
        </ik-menu-item>
        <ik-menu-divider />
        <ik-menu-item key="3"
                      disabled>3rd menu item（disabled）</ik-menu-item>
      </ik-menu>
    </ik-dropdown>
  </codeBox>
</template>
<script>
import { dividerDropdown } from '../dropdown.js'

export default {
  data () {
    return {
      code: dividerDropdown
    }
  }
}
</script>
