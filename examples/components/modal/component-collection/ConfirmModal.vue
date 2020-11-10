<template>
  <codeBox title="确认对话框(promise)" description="使用 confirm() 可以快捷地弹出确认框。onCancel/onOk 返回 promise 可以延迟关闭" :code="confirmModalCode">
    <ik-button @click="showConfirm">Confirm</ik-button>
  </codeBox>
</template>

<script>
import { confirmModalCode } from './../codeExample'
export default {
  data () {
    return {
      confirmModalCode
    }
  },
  methods: {
    showConfirm () {
      this.$confirm({
        title: 'Do you want to delete these items?',
        content: 'When clicked the OK button, this dialog will be closed after 1 second',
        onOk () {
          return new Promise((resolve, reject) => {
            setTimeout(Math.random() > 0.5 ? resolve : reject, 1000)
          }).catch(() => console.log('Oops errors!'))
        },
        onCancel () { }
      })
    }
  }
}
</script>
