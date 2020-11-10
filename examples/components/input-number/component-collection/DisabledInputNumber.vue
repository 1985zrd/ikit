<template>
  <codeBox title="不可用 " description="点击按钮切换可用状态。" :code="disabledInputNumberCode">
    <ik-input-number :min="1" :max="10" :disabled="disabled" :defaultValue="3" />
    <div style="marginTop:20px">
      <ik-button @click="toggle" type="primary">Toggle disabled</ik-button>
    </div>
  </codeBox>
</template>
<script>
import { disabledInputNumberCode } from './../codeExample'
export default {
  data () {
    return {
      disabledInputNumberCode,
      disabled: true
    }
  },
  methods: {
    toggle () {
      this.disabled = !this.disabled
    }
  }
}
</script>
