<template>
<codeBox :title="title"
           :description="description"
           :code="customStyles">
  <ik-button type="primary" @click="openNotification">Open the notification box</ik-button>
</codeBox>
</template>
<script>
import { customStyles } from './../codeExample'

export default {
  data () {
    return {
      customStyles,
      title: '自定义样式',
      description: '使用 style 和 className 来定义样式。'
    }
  },
  methods: {
    openNotification () {
      this.$notification.open({
        message: 'Notification Title',
        description:
            'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        style: {
          width: '600px',
          marginLeft: `${335 - 600}px`
        }
      })
    }
  }
}
</script>
