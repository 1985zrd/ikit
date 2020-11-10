<template>
  <codeBox :title="title"
           :description="description"
           :code="basic">
    <ik-button type="primary"
              @click="openNotification">Open the notification box</ik-button>
  </codeBox>
</template>
<script>
import { basic } from './../codeExample'

export default {
  data () {
    return {
      basic,
      title: '基本',
      description: '最简单的用法，4.5 秒后自动关闭。'
    }
  },
  methods: {
    openNotification () {
      this.$notification.open({
        message: 'Notification Title',
        description:
          'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        onClick: () => {
          console.log('Notification Clicked!')
        }
      })
    }
  }
}
</script>
