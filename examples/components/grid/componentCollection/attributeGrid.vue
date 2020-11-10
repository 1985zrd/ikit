<template>
  <codeBox title="其他属性的响应式 " :description="description" :code="attributeGridCode">
    <ik-row>
      <ik-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</ik-col>
      <ik-col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</ik-col>
      <ik-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</ik-col>
    </ik-row>
  </codeBox>
</template>

<script>
import { attributeGridCode } from './../codeExample'
export default {
  data () {
    return {
      attributeGridCode,
      description: 'span pull push offset order 属性可以通过内嵌到 xs sm md lg xl xxl 属性中来使用。其中 :xs="6" 相当于 :xs="{ span: 6 }"。'
    }
  }
}
</script>
