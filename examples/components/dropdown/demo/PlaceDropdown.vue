<template>
  <codeBox title="带下拉框的按钮"
           description="左边是按钮，右边是额外的相关功能菜单。"
           :code="code">
    <div id="components-dropdown-demo-placement">
      <template v-for="(placement, index) in placements">
        <ik-dropdown :placement="placement"
                     :key="index">
          <ik-button>{{placement}}</ik-button>
          <ik-menu slot="overlay">
            <ik-menu-item>
              <a target="_blank"
                 rel="noopener noreferrer"
                 href="#">1st menu item</a>
            </ik-menu-item>
            <ik-menu-item>
              <a target="_blank"
                 rel="noopener noreferrer"
                 href="#">2nd menu item</a>
            </ik-menu-item>
            <ik-menu-item>
              <a target="_blank"
                 rel="noopener noreferrer"
                 href="#">3rd menu item</a>
            </ik-menu-item>
          </ik-menu>
        </ik-dropdown>
      </template>
    </div>
  </codeBox>
</template>
<script>
import { placeDropdown } from '../dropdown.js'

export default {
  data () {
    return {
      placements: [
        'bottomLeft',
        'bottomCenter',
        'bottomRight',
        'topLeft',
        'topCenter',
        'topRight'
      ],
      code: placeDropdown
    }
  }
}
</script>
<style>
#components-dropdown-demo-placement .ant-btn {
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>
