<template>
  <codeBox :title="title"
           :description="description"
           :code="normalPromptCode">
    <ik-button type="primary"
               @click="info">Display normal message</ik-button>
  </codeBox>
</template>

<script>
import { normalPromptCode } from './../codeExample'

export default {
  data () {
    return {
      normalPromptCode,
      title: '普通提示',
      description: '信息提醒反馈。'
    }
  },
  methods: {
    info () {
      this.$message.info('This is a normal message')
    }
  }
}
</script>

<style lang="scss" scoped></style>
