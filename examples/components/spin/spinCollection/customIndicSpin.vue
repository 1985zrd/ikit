<template>
  <codeBox title="自定义指示符"
           description="使用自定义指示符。"
           :code="customIndicSpinCode">
    <div>
        <ik-spin>
          <ik-icon slot="indicator" type="loading" style="font-size: 24px" spin />
        </ik-spin>
        <ik-spin :indicator="indicator" />
      </div>
  </codeBox>
</template>
<script>
import { customIndicSpinCode } from '../demoCode.js'
export default {
  name: 'customIndicSpin',
  data () {
    return {
      customIndicSpinCode,
      indicator: <ik-icon type="loading" style="font-size: 24px" spin />
    }
  }
}
</script>
