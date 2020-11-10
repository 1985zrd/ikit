<template>
  <codeBox title="基本用法"
           description="一个简单的 loading 状态。"
           :code="basicSpinCode">
    <div>
        <ik-spin />
    </div>
  </codeBox>
</template>
<script>
import { basicSpinCode } from '../demoCode.js'
export default {
  name: 'basicSpin',
  data  () {
    return {
      basicSpinCode
    }
  }
}
</script>
