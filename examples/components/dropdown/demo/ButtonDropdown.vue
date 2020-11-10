<template>
  <codeBox title="带下拉框的按钮"
           description="左边是按钮，右边是额外的相关功能菜单。"
           :code="code">
    <div>
      <ik-dropdown-button @click="handleButtonClick">
        Dropdown
        <ik-menu slot="overlay"
                 @click="handleMenuClick">
          <ik-menu-item key="1">
            <ik-icon type="user" />1st menu item</ik-menu-item>
          <ik-menu-item key="2">
            <ik-icon type="user" />2nd menu item</ik-menu-item>
          <ik-menu-item key="3">
            <ik-icon type="user" />3rd item</ik-menu-item>
        </ik-menu>
      </ik-dropdown-button>
      <ik-dropdown-button @click="handleButtonClick"
                          disabled
                          style="margin-left: 8px">
        Dropdown
        <ik-menu slot="overlay"
                 @click="handleMenuClick">
          <ik-menu-item key="1">
            <ik-icon type="user" />1st menu item</ik-menu-item>
          <ik-menu-item key="2">
            <ik-icon type="user" />2nd menu item</ik-menu-item>
          <ik-menu-item key="3">
            <ik-icon type="user" />3rd item</ik-menu-item>
        </ik-menu>
      </ik-dropdown-button>
      <ik-dropdown>
        <ik-menu slot="overlay"
                 @click="handleMenuClick">
          <ik-menu-item key="1">
            <ik-icon type="user" />1st menu item</ik-menu-item>
          <ik-menu-item key="2">
            <ik-icon type="user" />2nd menu item</ik-menu-item>
          <ik-menu-item key="3">
            <ik-icon type="user" />3rd item</ik-menu-item>
        </ik-menu>
        <ik-button style="margin-left: 8px"> Button
          <ik-icon type="down" />
        </ik-button>
      </ik-dropdown>
    </div>
  </codeBox>
</template>
<script>
import { buttonDropdown } from '../dropdown.js'

export default {
  data () {
    return {
      code: buttonDropdown
    }
  },
  methods: {
    handleButtonClick (e) {
      console.log('click left button', e)
    },
    handleMenuClick (e) {
      console.log('click', e)
    }
  }
}
</script>
