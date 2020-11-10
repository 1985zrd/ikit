<template>
  <codeBox title="自定义描述文案"
           description="自定义描述文案。"
           :code="customizeDescriptionSpinCode">
    <div>
        <ik-spin tip="Loading...">
          <div class="spin-content">
            我的描述文案是自定义的。。。
          </div>
        </ik-spin>
      </div>
  </codeBox>
</template>
<script>
import { customizeDescriptionSpinCode } from '../demoCode.js'
export default {
  name: 'customizeDescriptionSpin',
  data  () {
    return {
      customizeDescriptionSpinCode
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
