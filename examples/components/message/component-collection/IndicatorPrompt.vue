<template>
  <codeBox :title="title"
           :description="description"
           :code="indicatorPromptCode">
    <ik-button @click="success">display a loading indicator</ik-button>
  </codeBox>
</template>

<script>
import { indicatorPromptCode } from './../codeExample'

export default {
  data () {
    return {
      indicatorPromptCode,
      title: '修改延时',
      description: '自定义时长 10s，默认时长为 3s'
    }
  },
  methods: {
    success () {
      const hide = this.$message.loading('Action in progress..', 0)
      setTimeout(hide, 2500)
    }
  }
}
</script>

<style lang="scss" scoped></style>
