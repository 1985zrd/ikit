<template>
  <codeBox title="不可用"
           description="checkbox 不可用"
           :code="disablCheckboxCode">
    <div>
        <ik-checkbox :defaultChecked="false" disabled />
        <br />
        <ik-checkbox defaultChecked disabled />
      </div>
  </codeBox>
</template>
<script>
import { disablCheckboxCode } from '../demoCode.js'
export default {
  name: 'disablCheckbox',
  data () {
    return {
      disablCheckboxCode
    }
  }
}
</script>
