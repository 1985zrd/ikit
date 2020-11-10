<template>
  <codeBox title="Flex 排序  " description="从堆叠到水平排列。<br/>通过 Flex 布局的 Order 来改变元素的排序。" :code="flexOrderGridCode">
    <ik-row type="flex">
      <ik-col :span="6" :order="4">1 col-order-4</ik-col>
      <ik-col :span="6" :order="3">2 col-order-3</ik-col>
      <ik-col :span="6" :order="2">3 col-order-2</ik-col>
      <ik-col :span="6" :order="1">4 col-order-1</ik-col>
    </ik-row>
  </codeBox>
</template>

<script>
import { flexOrderGridCode } from './../codeExample'
export default {
  data () {
    return {
      flexOrderGridCode
    }
  }
}
</script>
