<template>
  <codeBox title="区块间隔" :description="description" :code="blockGridCode">
    <div class="gutter-example">
      <ik-row :gutter="16">
        <ik-col class="gutter-row" :span="6">
          <div class="gutter-box">col-6</div>
        </ik-col>
        <ik-col class="gutter-row" :span="6">
          <div class="gutter-box">col-6</div>
        </ik-col>
        <ik-col class="gutter-row" :span="6">
          <div class="gutter-box">col-6</div>
        </ik-col>
        <ik-col class="gutter-row" :span="6">
          <div class="gutter-box">col-6</div>
        </ik-col>
      </ik-row>
    </div>
  </codeBox>
</template>

<script>
import { blockGridCode } from './../codeExample'
export default {
  data () {
    return {
      blockGridCode,
      description: '栅格常常需要和间隔进行配合，你可以使用 Row 的 gutter 属性，我们推荐使用 (16+8n)px 作为栅格间隔。(n 是自然数)<br/>如果要支持响应式，可以写成 { xs: 8, sm: 16, md: 24, lg: 32 }。'
    }
  }
}
</script>

<style scoped>
.gutter-example >>> .ant-row > div {
  background: transparent;
  border: 0;
}
.gutter-box {
  background: #00a0e9;
  padding: 5px 0;
}
</style>
