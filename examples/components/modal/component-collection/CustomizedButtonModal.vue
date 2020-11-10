<template>
  <codeBox title="自定义页脚按钮属性" description="传入 okButtonProps 和 cancelButtonProps 可分别自定义确定按钮和取消按钮的 props。" :code="customizedButtonModalCode">
    <ik-button type="primary" @click="showModal">Open Modal with customized button props</ik-button>
    <ik-modal title="Basic Modal" v-model="visible" @ok="handleOk" :okButtonProps="{ props: {disabled: true} }" :cancelButtonProps="{ props: {disabled: true} }">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </ik-modal>
  </codeBox>
</template>

<script>
import { customizedButtonModalCode } from './../codeExample'

export default {
  data () {
    return {
      customizedButtonModalCode,
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
    },
    handleCancel (e) {
      console.log(e)
      this.visible = false
    }
  }
}
</script>
