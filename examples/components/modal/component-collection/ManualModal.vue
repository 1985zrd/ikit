<template>
  <codeBox title="手动更新和移除" description="手动更新和关闭 Modal.method 方式创建的对话框。" :code="manualModalCode">
    <ik-button @click="countDown">Open modal to close in 5s</ik-button>
  </codeBox>
</template>

<script>
import { manualModalCode } from './../codeExample'
export default {
  data () {
    return {
      manualModalCode
    }
  },
  methods: {
    countDown () {
      let secondsToGo = 5
      const modal = this.$success({
        title: 'This is a notification message',
        content: `This modal will be destroyed after ${secondsToGo} second.`
      })
      const interval = setInterval(() => {
        secondsToGo -= 1
        modal.update({
          content: `This modal will be destroyed after ${secondsToGo} second.`
        })
      }, 1000)
      setTimeout(() => {
        clearInterval(interval)
        modal.destroy()
      }, secondsToGo * 1000)
    }
  }
}
</script>
