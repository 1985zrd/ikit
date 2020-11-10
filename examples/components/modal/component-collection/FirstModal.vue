<template>
  <codeBox title="基本"
           description="第一个对话框。"
           :code="firstModalCode">
    <ik-button type="primary"
               @click="showModal">Open Modal</ik-button>
    <ik-modal title="Basic Modal"
              v-model="visible"
              @ok="handleOk">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </ik-modal>
  </codeBox>
</template>

<script>
import { firstModalCode } from './../codeExample'
export default {
  data () {
    return {
      firstModalCode,
      visible: false
    }
  },
  methods: {
    showModal () {
      this.visible = true
    },
    handleOk (e) {
      console.log(e)
      this.visible = false
    }
  }
}
</script>
