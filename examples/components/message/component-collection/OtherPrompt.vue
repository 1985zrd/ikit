<template>
<codeBox title="其他提示类型"
           description="包括成功、失败、警告。"
           :code="otherPromptCode">
    <ik-button @click="success">Success</ik-button>
        <ik-button @click="error">Error</ik-button>
        <ik-button @click="warning">Warning</ik-button>
  </codeBox>
</template>

<script>
import { otherPromptCode } from './../codeExample'

export default {
  data () {
    return {
      otherPromptCode
    }
  },
  methods: {
    success () {
      this.$message.success('This is a message of success')
    },
    error () {
      this.$message.error('This is a message of error')
    },
    warning () {
      this.$message.warning('This is message of warning')
    }
  }
}
</script>

<style lang="scss" scoped>
button{
  margin-right: 6px;
}
</style>
