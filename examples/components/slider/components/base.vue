<template>
  <codeBox :title="title"
    :description="description"
    :code="base">
    <ik-slider id="test" :defaultValue="30" :disabled="disabled" />
    <ik-slider range :defaultValue="[20, 50]" :disabled="disabled" />
    Disabled: <ik-switch size="small" :checked="disabled" @change="handleDisabledChange" />
  </codeBox>
</template>
<script>
import { base } from '../code.js'
export default {
  name: 'baseSlider',
  data () {
    return {
      title: '基本',
      description: '基本滑动条。当 range 为 true 时，渲染为双滑块。当 disabled 为 true 时，滑块处于不可用状态。',
      base,
      disabled: false
    }
  },
  methods: {
    handleDisabledChange (disabled) {
      this.disabled = disabled
    }
  }
}
</script>
<style scoped>
  .code-box-demo .ant-slider {
    margin-bottom: 16px;
  }
</style>
