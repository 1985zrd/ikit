<template>
  <codeBox title="文本域 " description="用于多行输入。" :code="textareaInputCode">
    <ik-textarea placeholder="Basic usage" :rows="4" />
  </codeBox>
</template>

<script>
import { textareaInputCode } from './../codeExample'
export default {
  data () {
    return {
      textareaInputCode
    }
  }
}
</script>
