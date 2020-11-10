<template>
  <codeBox :title="title" :description="description" :code="durationPromptCode">
    <ik-button @click="success"
      >Customized display duration</ik-button
    >
  </codeBox>
</template>

<script>
import { durationPromptCode } from './../codeExample'

export default {
  data () {
    return {
      durationPromptCode,
      title: '修改延时',
      description: '自定义时长 10s，默认时长为 3s'
    }
  },
  methods: {
    success () {
      this.$message.success(
        'This is a prompt message for success, and it will disappear in 10 seconds',
        10
      )
    }
  }
}
</script>

<style lang="scss" scoped></style>
