<template>
  <codeBox :title="title"
           :description="description"
           :code="customIcon">
    <ik-button type="primary"
              @click="openNotification">Open the notification box</ik-button>
  </codeBox>
</template>
<script>
import { customIcon } from './../codeExample'

export default {
  data () {
    return {
      customIcon,
      title: '自定义图标',
      description: '图标可以被自定义。'
    }
  },
  methods: {
    openNotification () {
      this.$notification.open({
        message: 'Notification Title',
        description:
          'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        icon: <ik-icon type="smile" style="color: #108ee9" />
      })
    }
  }
}
</script>
