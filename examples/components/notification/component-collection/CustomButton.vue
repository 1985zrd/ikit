<template>
  <codeBox :title="title"
           :description="description"
           :code="customButton">
    <ik-button type="primary"
              @click="openNotification">Open the notification box</ik-button>
  </codeBox>
</template>
<script>
import { customButton } from './../codeExample'
const close = () => {
  console.log(
    'Notification was closed. Either the close button was clicked or duration time elapsed.'
  )
}

export default {
  data () {
    return {
      customButton,
      title: '自定义按钮',
      description: '自定义关闭按钮的样式和文字。'
    }
  },
  methods: {
    openNotification () {
      const key = `open${Date.now()}`
      this.$notification.open({
        message: 'Notification Title',
        description:
          'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
        btn: h => {
          return h(
            'ik-button',
            {
              props: {
                type: 'primary',
                size: 'small'
              },
              on: {
                click: () => this.$notification.close(key)
              }
            },
            'Confirm'
          )
        },
        key,
        onClose: close
      })
    }
  }
}
</script>
