<template>
  <codeBox title="确认对话框" description="使用 confirm() 可以快捷地弹出确认框。" :code="multipleModalCode">
    <ik-button @click="showConfirm">Confirm</ik-button>
    <ik-button @click="showDeleteConfirm" type="dashed">Delete</ik-button>
    <ik-button @click="showPropsConfirm" type="dashed">With extra props</ik-button>
  </codeBox>
</template>

<script>
import { multipleModalCode } from './../codeExample'
export default {
  data () {
    return {
      multipleModalCode
    }
  },
  methods: {
    showConfirm () {
      this.$confirm({
        title: 'Do you Want to delete these items?',
        content: h => <div style="color:red;">Some descriptions</div>,
        onOk () {
          console.log('OK')
        },
        onCancel () {
          console.log('Cancel')
        },
        class: 'test'
      })
    },

    showDeleteConfirm () {
      this.$confirm({
        title: 'Are you sure delete this task?',
        content: 'Some descriptions',
        okText: 'Yes',
        okType: 'danger',
        cancelText: 'No',
        onOk () {
          console.log('OK')
        },
        onCancel () {
          console.log('Cancel')
        }
      })
    },
    showPropsConfirm () {
      this.$confirm({
        title: 'Are you sure delete this task?',
        content: 'Some descriptions',
        okText: 'Yes',
        okType: 'danger',
        okButtonProps: {
          props: { disabled: true }
        },
        cancelText: 'No',
        onOk () {
          console.log('OK')
        },
        onCancel () {
          console.log('Cancel')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  margin-right: 16px;
}
</style>
