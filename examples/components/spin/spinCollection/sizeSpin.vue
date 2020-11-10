<template>
  <codeBox title="各种大小"
           description="小的用于文本加载，默认用于卡片容器级加载，大的用于页面级加载。"
           :code="sizeSpinCode">
    <div>
        <ik-spin size="small" />
        <ik-spin />
        <ik-spin size="large" />
      </div>
  </codeBox>
</template>
<script>
import { sizeSpinCode } from '../demoCode.js'
export default {
  name: 'sizeSpin',
  data  () {
    return {
      sizeSpinCode
    }
  }
}
</script>
