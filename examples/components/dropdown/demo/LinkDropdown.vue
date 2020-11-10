<template>
  <codeBox title="菜单隐藏方式 "
           description="默认是点击关闭菜单，可以关闭此功能。"
           :code="code">
    <ik-dropdown v-model="visible">
      <a style="color:#FF6800"
         href="#"> Hover me
        <ik-icon type="down" /> </a>
      <ik-menu slot="overlay"
               @click="handleMenuClick">
        <ik-menu-item key="1">Clicking me will not close the menu.</ik-menu-item>
        <ik-menu-item key="2">Clicking me will not close the menu also.</ik-menu-item>
        <ik-menu-item key="3">Clicking me will close the menu</ik-menu-item>
      </ik-menu>
    </ik-dropdown>
  </codeBox>
</template>
<script>
import { linkDropdown } from '../dropdown.js'

export default {
  data () {
    return {
      visible: false,
      code: linkDropdown
    }
  },
  methods: {
    handleMenuClick (e) {
      if (e.key === '3') {
        this.visible = false
      }
    }
  }
}
</script>
