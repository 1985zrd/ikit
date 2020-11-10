<template>
  <codeBox title="不可用状态"
           description="添加 disabled 属性即可让按钮处于不可用状态，同时按钮样式也会改变。"
           :code="buttonDisabled">
    <div>
        <ik-button type="primary">Primary</ik-button>
        <ik-button type="primary" disabled>Primary(disabled)</ik-button>
        <br />
        <ik-button>Default</ik-button>
        <ik-button disabled>Default(disabled)</ik-button>
        <br />
        <ik-button type="dashed">Dashed</ik-button>
        <ik-button type="dashed" disabled>Dashed(disabled)</ik-button>
        <br />
        <ik-button type="link">Link</ik-button>
        <ik-button type="link" disabled>Link(disabled)</ik-button>
        <div :style="{ padding: '8px 8px 0 8px', background: '#AEAEAE', width: '272px' }">
          <ik-button ghost>Ghost</ik-button>
          <ik-button ghost disabled>Ghost(disabled)</ik-button>
        </div>
      </div>
  </codeBox>
</template>
<script>
import { buttonDisabled } from '../test.js'
export default {
  name: 'buttonDisabled',
  data () {
    return {
      buttonDisabled
    }
  }
}
</script>
