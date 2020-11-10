<template>
  <codeBox :title="title"
           :description="description"
           :code="durationClose">
  <ik-button type="primary" @click="openNotification">Open the notification box</ik-button>
  </codeBox>
</template>
<script>
import { durationClose } from './../codeExample'

export default {
  data () {
    return {
      durationClose,
      title: '自动关闭的延时',
      description: '自定义通知框自动关闭的延时，默认4.5s，取消自动关闭只要将该值设为 0 即可。'
    }
  },
  methods: {
    openNotification () {
      this.$notification.open({
        message: 'Notification Title',
        description:
            'I will never close automatically. I will be close automatically. I will never close automatically.',
        duration: 0
      })
    }
  }
}
</script>
