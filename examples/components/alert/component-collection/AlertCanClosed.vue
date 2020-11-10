<template>
  <codeBox :title="title"
           :description="description"
           :code="alertCanClosed">
    <ik-alert
      message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
      type="warning"
      closable
      @close="onClose"
    />
    <br>
    <ik-alert
      message="Error Text"
      description="Error Description Error Description Error Description Error Description Error Description Error Description"
      type="error"
      closable
      @close="onClose"
    />
  </codeBox>
</template>
<script>
import { alertCanClosed } from '../codeExample'
export default {
  data () {
    return {
      title: '可关闭的警告提示',
      description: '显示关闭按钮，点击可关闭警告提示。',
      alertCanClosed
    }
  },
  methods: {
    onClose (e) {
      console.log(e, 'I was closed.')
    }
  }
}
</script>
