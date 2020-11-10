<template>
  <codeBox title="延迟"
           description="延迟显示 loading 效果。当 spinning 状态在 delay 时间内结束，则不显示 loading 状态。"
           :code="delaySpinCode">
    <div>
        <ik-spin :spinning="spinning" :delay="delayTime">
          <div class="spin-content">
            可以点击‘切换’按钮，延迟显示 loading 效果。当 spinning 状态在 `delay` 时间内结束，则不显示
            loading 状态。
          </div>
        </ik-spin>
        <p></p>Loading state：
        <ik-switch v-model="spinning"></ik-switch>
      </div>
  </codeBox>
</template>
<script>
import { delaySpinCode } from '../demoCode.js'
export default {
  name: 'delaySpin',
  data () {
    return {
      delaySpinCode,
      spinning: false,
      delayTime: 500
    }
  },
  methods: {
    changeSpinning () {
      this.spinning = !this.spinning
    }
  }
}
</script>
<style scoped>
.spin-content {
  border: 1px solid #91d5ff;
  background-color: #e6f7ff;
  padding: 30px;
}
</style>
