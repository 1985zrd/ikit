<template>
  <codeBox title="多个按钮组合"
           description="按钮组合使用时，推荐使用1个主操作 + n 个次操作，3个以上操作时把更多操作放到 Dropdown.Button 中组合使用。"
           :code="buttonAny">
    <div>
        <ik-button type="primary">Primary</ik-button>
        <ik-button>secondary</ik-button>
        <ik-dropdown>
          <ik-menu slot="overlay"
                  @click="handleMenuClick">
            <ik-menu-item key="1">1st item</ik-menu-item>
            <ik-menu-item key="2">2nd item</ik-menu-item>
            <ik-menu-item key="3">3rd item</ik-menu-item>
          </ik-menu>
          <ik-button> Actions
            <ik-icon type="down" />
          </ik-button>
        </ik-dropdown>
      </div>
  </codeBox>
</template>
<script>
import { buttonAny } from '../test.js'
export default {
  name: 'buttonAny',
  data () {
    return {
      buttonAny
    }
  },
  methods: {
    handleMenuClick (e) {
      console.log('click', e)
    }
  }
}
</script>
