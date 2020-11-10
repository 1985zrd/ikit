<template>
  <codeBox title="触发事件"
           description="点击菜单项后会触发事件，用户可以通过相应的菜单项 key 进行不同的操作。"
           :code="code">
    <ik-dropdown>
      <a style="color:#FF6800"
         href="#"> Hover me, Click menu item
        <ik-icon type="down" /> </a>
      <ik-menu slot="overlay"
               @click="onClick">
        <ik-menu-item key="1">1st menu item</ik-menu-item>
        <ik-menu-item key="2">2nd menu item</ik-menu-item>
        <ik-menu-item key="3">3rd menu item</ik-menu-item>
      </ik-menu>
    </ik-dropdown>
  </codeBox>
</template>
<script>
import { eventDropdown } from '../dropdown.js'

export default {
  data () {
    return {
      code: eventDropdown
    }
  },
  methods: {
    onClick ({ key }) {
      console.log('Click on item' + key)
    }
  }
}
</script>
