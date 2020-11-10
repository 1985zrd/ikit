<template>
  <codeBox title="基础栅格 " description="从堆叠到水平排列。<br/> 使用单一的一组 Row 和 Col 栅格组件，就可以创建一个基本的栅格系统，所有列（Col）必须放在 Row 内。" :code="basicGridCode">
    <ik-row>
      <ik-col :span="12">col-12</ik-col>
      <ik-col :span="12">col-12</ik-col>
    </ik-row>
    <ik-row>
      <ik-col :span="8">col-8</ik-col>
      <ik-col :span="8">col-8</ik-col>
      <ik-col :span="8">col-8</ik-col>
    </ik-row>
    <ik-row>
      <ik-col :span="6">col-6</ik-col>
      <ik-col :span="6">col-6</ik-col>
      <ik-col :span="6">col-6</ik-col>
      <ik-col :span="6">col-6</ik-col>
    </ik-row>
  </codeBox>
</template>

<script>
import { basicGridCode } from './../codeExample'
export default {
  data () {
    return {
      basicGridCode
    }
  }
}
</script>
