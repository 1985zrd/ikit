<template>
  <codeBox title="信息提示" description="各种类型的信息提示，只提供一个按钮用于关闭。" :code="typeModalCode">
    <ik-button @click="info">Info</ik-button>
    <ik-button @click="success">Success</ik-button>
    <ik-button @click="error">Error</ik-button>
    <ik-button @click="warning">Warning</ik-button>
  </codeBox>
</template>

<script>
import { Modal } from '~/index'
import { typeModalCode } from './../codeExample'
export default {
  data () {
    return {
      typeModalCode
    }
  },
  methods: {
    info () {
      const h = this.$createElement
      this.$info({
        title: 'This is a notification message',
        content: h('div', {}, [
          h('p', 'some messages...some messages...'),
          h('p', 'some messages...some messages...')
        ]),
        onOk () { }
      })
    },

    success () {
      this.$success({
        title: 'This is a success message',
        // JSX support
        content: (
          <div>
            <p>some messages...some messages...</p>
            <p>some messages...some messages...</p>
          </div>
        )
      })
    },

    error () {
      this.$error({
        title: 'This is an error message',
        content: 'some messages...some messages...'
      })
    },

    warning () {
      this.$warning({
        title: 'This is a warning message',
        content: 'some messages...some messages...'
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
