<template>
  <codeBox :title="title"
           :description="description"
           :code="basicAlert">
    <ik-alert message="Success Text" type="success" />
  </codeBox>
</template>
<script>
import { basicAlert } from '../codeExample'
export default {
  data () {
    return {
      title: '基本',
      description: '最简单的用法，适用于简短的警告提示。',
      basicAlert
    }
  }
}
</script>
