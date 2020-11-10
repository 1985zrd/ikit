<template>
  <codeBox title="title居中"
           description="title居中显示"
           :code="titleModalCenterCode">
    <ik-button type="primary"
               @click="showModal">title居中</ik-button>
    <ik-modal title="下一站提示"
              :bodyStyle="{'padding': '59px 0 76px!important','fontSize':'18px','textAlign':'center'}"
              titleCenter
              v-model="visible"
              :footer="null"
              @ok="handleOk">
      <strong>下一站【316 男 内科 3】</strong>
    </ik-modal>
  </codeBox>
</template>

<script>
import { titleModalCenterCode } from './../codeExample'
export default {
  data () {
    return {
      titleModalCenterCode,
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
