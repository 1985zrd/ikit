<template>
  <codeBox title="自定义title"
           description="自定义title，可设定title和描述"
           :code="customizedTitleModalCode">
    <ik-button type="primary"
               @click="showModal">自定义title</ik-button>
    <ik-modal title="Basic Modal" subTitle='示例示例示例' v-model="visible" @ok="handleOk">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </ik-modal>
  </codeBox>
</template>

<script>
import { customizedTitleModalCode } from './../codeExample'
export default {
  data () {
    return {
      customizedTitleModalCode,
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
