<template>
  <codeBox title="block 按钮"
           description="block属性将使按钮适合其父宽度。"
           :code="buttonBlock">
    <div>
        <ik-button type="primary" block>Primary</ik-button>
        <ik-button block>Default</ik-button>
        <ik-button type="dashed" block>Dashed</ik-button>
        <ik-button type="danger" block>Danger</ik-button>
        <ik-button type="link" block>Link</ik-button>
      </div>
  </codeBox>
</template>
<script>
import { buttonBlock } from '../test'
export default {
  name: 'buttonBlock',
  data () {
    return {
      buttonBlock
    }
  }
}
</script>
