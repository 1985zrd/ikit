<template>
  <codeBox title="销毁确认对话框" description="使用 Modal.destroyAll() 可以销毁弹出的确认窗。通常用于路由监听当中，处理路由前进、后退不能销毁确认对话框的问题。" :code="destroyModalCode">
    <ik-button @click="showConfirm">Confirm</ik-button>
  </codeBox>
</template>

<script>
import { destroyModalCode } from './../codeExample'
export default {
  data () {
    return {
      destroyModalCode
    }
  },
  methods: {
    showConfirm () {
      const self = this
      for (let i = 0; i < 3; i += 1) {
        setTimeout(() => {
          this.$confirm({
            content: 'destroy all',
            onOk () {
              return new Promise((resolve, reject) => {
                setTimeout(Math.random() > 0.5 ? resolve : reject, 1000)
              }).catch(() => console.log('Oops errors!'))
            },
            cancelText: 'Click to destroy all',
            onCancel () {
              self.destroyAll()
            }
          })
        }, i * 500)
      }
    },
    destroyAll () {
      this.$destroyAll()
    }
  }
}
</script>
