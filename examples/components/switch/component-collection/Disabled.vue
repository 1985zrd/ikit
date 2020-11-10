<template>
  <codeBox :title="title" :description="description" :code="disableCode">
    <div>
      <ik-switch defaultChecked :disabled="disabled" style="margin-bottom:5px" />
      <br />
      <ik-button type="primary" @click="onToggle">Toggle disabled</ik-button>
    </div>
  </codeBox>
</template>
<script>
import { disableCode } from '../codeExample'
export default {
  data () {
    return {
      disabled: true,
      title: '不可用',
      description: 'Switch 失效状态。',
      disableCode
    }
  },
  methods: {
    onToggle () {
      this.disabled = !this.disabled
    }
  }
}
</script>
