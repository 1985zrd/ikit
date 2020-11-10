<template>
  <codeBox title="国际化" description="设置 okText 与 cancelText 以自定义按钮文字。" :code="internationalModalCode">
    <ik-button type="primary" @click="showModal">Modal</ik-button>
    <ik-modal title="Modal" v-model="visible" @ok="hideModal" okText="确认" cancelText="取消">
      <p>Bla bla ...</p>
      <p>Bla bla ...</p>
      <p>Bla bla ...</p>
    </ik-modal>
    <br />
    <br />
    <ik-button @click="confirm">Confirm</ik-button>
  </codeBox>
</template>

<script>
import { internationalModalCode } from './../codeExample'
export default {
  data () {
    return {
      internationalModalCode,
      visible: false
    }
  },
  methods: {
    showModal () {
      this.visible = true
    },
    hideModal () {
      this.visible = false
    },
    confirm () {
      this.$confirm({
        title: 'Confirm',
        content: 'Bla bla ...',
        okText: '确认',
        cancelText: '取消'
      })
    }
  }
}
</script>
