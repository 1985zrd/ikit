<template>
  <codeBox title="卡片加载中"
           description="可以直接把内容内嵌到 Spin 中，将现有容器变为加载状态。"
           :code="embedModeSpinCode">
    <div>
        <ik-spin :spinning="spinning">
          <div class="spin-content">可以点击‘切换’按钮，控制本区域的spin展示。</div>
        </ik-spin>
        <p></p>Loading state：
        <ik-switch v-model="spinning"></ik-switch>
      </div>
  </codeBox>
</template>
<script>
import { embedModeSpinCode } from '../demoCode.js'
export default {
  name: 'embedModeSpin',
  data () {
    return {
      embedModeSpinCode,
      spinning: false
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
