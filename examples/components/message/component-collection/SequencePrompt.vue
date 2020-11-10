<template>
  <codeBox
    title="Promise 接口"
    description="可以通过 then 接口在关闭后运行 callback 。以上用例将在每个 message 将要结束时通过 then 显示新的 message 。"
    :code="sequencePromptCode"
  >
    <ik-button @click="success">Display a sequence of message</ik-button>
  </codeBox>
</template>

<script>
import { sequencePromptCode } from './../codeExample'

export default {
  data () {
    return {
      sequencePromptCode
    }
  },
  methods: {
    success () {
      this.$message
        .loading('Action in progress..', 2.5)
        .then(() => this.$message.success('Loading finished', 2.5))
        .then(() => this.$message.info('Loading finished is finished', 2.5))
    }
  }
}
</script>

<style lang="scss" scoped></style>
