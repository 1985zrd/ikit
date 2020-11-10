<template>
  <codeBox title="Flex 对齐 " description="Flex 子元素垂直对齐。" :code="flexAlignGridCode">
    <p>Align Top</p>
    <ik-row type="flex" justify="center" align="top">
      <ik-col :span="4"><p class="height-100">col-4</p></ik-col>
      <ik-col :span="4"><p class="height-50">col-4</p></ik-col>
      <ik-col :span="4"><p class="height-120">col-4</p></ik-col>
      <ik-col :span="4"><p class="height-80">col-4</p></ik-col>
    </ik-row>

    <p>Align Center</p>
    <ik-row type="flex" justify="space-around" align="middle">
      <ik-col :span="4"><p class="height-100">col-4</p></ik-col>
      <ik-col :span="4"><p class="height-50">col-4</p></ik-col>
      <ik-col :span="4"><p class="height-120">col-4</p></ik-col>
      <ik-col :span="4"><p class="height-80">col-4</p></ik-col>
    </ik-row>

    <p>Align Bottom</p>
    <ik-row type="flex" justify="space-between" align="bottom">
      <ik-col :span="4"><p class="height-100">col-4</p></ik-col>
      <ik-col :span="4"><p class="height-50">col-4</p></ik-col>
      <ik-col :span="4"><p class="height-120">col-4</p></ik-col>
      <ik-col :span="4"><p class="height-80">col-4</p></ik-col>
    </ik-row>
  </codeBox>
</template>
<script>
import { flexAlignGridCode } from './../codeExample'
export default {
  data () {
    return {
      flexAlignGridCode
    }
  }
}
</script>
