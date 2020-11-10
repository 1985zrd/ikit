<template>
  <codeBox :title="title"
           :description="description"
           :code="basic">
    <ik-back-top />
    Scroll down to see the bottom-right
    <strong style="color: rgba(64, 64, 64, 0.6)"> gray </strong>
    button.
  </codeBox>
</template>
<script>
import { basic } from '../codeExample'
export default {
  data () {
    return {
      title: '基本',
      description: '最简单的用法。',
      basic
    }
  }
}
</script>
