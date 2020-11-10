<template>
  <codeBox title="幽灵按钮"
           description="幽灵按钮将其他按钮的内容反色，背景变为透明，常用在有色背景上。"
           :code="buttonGhost">
    <div :style="{ background: '#AEAEAE', padding: '26px 16px 16px', width: '520px'  }">
        <ik-button type="primary" ghost>Primary</ik-button>
        <ik-button ghost>Default</ik-button>
        <ik-button type="dashed" ghost>Dashed</ik-button>
        <ik-button type="danger" ghost>Danger</ik-button>
        <ik-button type="link" ghost>Link</ik-button>
      </div>
  </codeBox>
</template>
<script>
import { buttonGhost } from '../test'
export default {
  data () {
    return {
      buttonGhost
    }
  }
}
</script>
