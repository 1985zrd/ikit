<template>
  <codeBox :title="title"
           :description="description"
           :code="updateInfo">
    <ik-button type="primary"
              @click="openNotification">Open the notification box</ik-button>
  </codeBox>
</template>
<script>
import { updateInfo } from './../codeExample'
const key = 'updatable'

export default {
  data () {
    return {
      updateInfo,
      title: '更新消息内容',
      description: '可以通过唯一的 key 来更新内容。'
    }
  },
  methods: {
    openNotification () {
      this.$notification.open({
        key,
        message: 'Notification Title',
        description: 'description.'
      })
      setTimeout(() => {
        this.$notification.open({
          key,
          message: 'New Title',
          description: 'New description.'
        })
      }, 1000)
    }
  }
}
</script>
