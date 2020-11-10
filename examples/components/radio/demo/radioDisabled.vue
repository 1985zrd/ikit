<template>
  <codeBox title="不可用"
          description="Radio 不可用。"
          :code="radioDisabled">
    <div>
        <ik-radio :defaultChecked="false" :disabled="disabled">Disabled</ik-radio>
        <br />
        <ik-radio defaultChecked :disabled="disabled">Disabled</ik-radio>
        <div :style="{ marginTop: 20 }">
          <ik-button type="primary" @click="toggleDisabled">
            Toggle disabled
          </ik-button>
        </div>
      </div>
  </codeBox>
</template>
<script>
import { radioDisabled } from '../radio'
export default {
  name: 'radioDisabled',
  data () {
    return {
      radioDisabled,
      disabled: true
    }
  },
  methods: {
    toggleDisabled () {
      this.disabled = !this.disabled
    }
  }
}
</script>
<style lang="scss" scoped>
.ant-radio-wrapper {
  margin-bottom: 10px;
}
</style>
