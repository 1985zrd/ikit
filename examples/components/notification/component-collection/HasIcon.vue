<template>
  <codeBox :title="title"
           :description="description"
           :code="hasIcon">
    <ik-button @click="() => openNotificationWithIcon('success')">Success</ik-button>
    <ik-button @click="() => openNotificationWithIcon('info')">Info</ik-button>
    <ik-button @click="() => openNotificationWithIcon('warning')">Warning</ik-button>
    <ik-button @click="() => openNotificationWithIcon('error')">Error</ik-button>
  </codeBox>
</template>
<script>
import { hasIcon } from './../codeExample'

export default {
  data () {
    return {
      hasIcon,
      title: '带有图标的通知提醒框',
      description: '通知提醒框左侧有图标。'
    }
  },
  methods: {
    openNotificationWithIcon (type) {
      this.$notification[type]({
        message: 'Notification Title',
        description:
          'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
      })
    }
  }
}
</script>
