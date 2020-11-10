<template>
  <codeBox title="设置为ikangloading"
           description="一个专属ikang的 loading 状态。默认72px大小，可设置width"
           :code="ikangLoadingCode">
    <div>
      <ik-spin ikangLoading/>
      <ik-spin width="40" ikangLoading/>
    </div>
  </codeBox>
</template>
<script>
import { ikangLoadingCode } from '../demoCode.js'
export default {
  name: 'ikangLoading',
  data  () {
    return {
      ikangLoadingCode
    }
  }
}
</script>
<style lang="scss" scoped>
.ant-spin {
  margin-right: 20px;
}
</style>
