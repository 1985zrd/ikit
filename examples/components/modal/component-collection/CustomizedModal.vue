<template>
  <codeBox
      title="自定义页脚"
      description="更复杂的例子，自定义了页脚的按钮，点击提交后进入 loading 状态，完成后关闭。<br/>不需要默认确定取消按钮时，你可以把 footer 设为 null。"
      :code="customizedModalCode">
    <ik-button type="primary" @click="showModal">Open Modal with customized footer</ik-button>
    <ik-modal v-model="visible" title="Title" onOk="handleOk">
      <template slot="footer">
        <ik-button key="back" @click="handleCancel">Return</ik-button>
        <ik-button key="submit" type="primary" :loading="loading" @click="handleOk">Submit</ik-button>
      </template>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </ik-modal>
  </codeBox>
</template>

<script>
import { customizedModalCode } from './../codeExample'
export default {
  data () {
    return {
      customizedModalCode,
      loading: false,
      visible: false
    }
  },
  methods: {
    showModal () {
      this.visible = true
    },
    handleOk (e) {
      this.loading = true
      setTimeout(() => {
        this.visible = false
        this.loading = false
      }, 3000)
    },
    handleCancel (e) {
      this.visible = false
    }
  }
}
</script>
