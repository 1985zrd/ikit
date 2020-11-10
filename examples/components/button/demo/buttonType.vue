<template>
  <codeBox title="按钮类型"
           description="按钮有五种类型：主按钮、次按钮、虚线按钮、危险按钮和链接按钮。主按钮在同一个操作区域最多出现一次。"
           :code="buttonType">
    <div>
        <ik-button type="primary">Primary</ik-button>
        <ik-button>Default</ik-button>
        <ik-button type="dashed">Dashed</ik-button>
        <ik-button type="danger">Danger</ik-button>
        <ik-config-provider :autoInsertSpaceInButton="false">
          <ik-button type="primary">按钮</ik-button>
        </ik-config-provider>
        <ik-button type="primary">按钮</ik-button>
        <ik-button type="link">Link</ik-button>
      </div>
  </codeBox>
</template>
<script>
import { buttonType } from '../test.js'
export default {
  name: 'buttonType',
  data () {
    return {
      buttonType
    }
  }
}
</script>
