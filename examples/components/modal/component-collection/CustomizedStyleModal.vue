<template>
  <codeBox title="自定义位置" description="使用 centered 或类似 style.top 的样式来设置对话框位置。" :code="customizedStyleModalCode">
    <div id="components-modal-demo-position">
      <ik-button type="primary" @click="() => setModal1Visible(true)">Display a modal dialog at 20px to Top</ik-button>
      <ik-modal title="20px to Top" style="top: 20px;" :visible="modal1Visible" @ok="() => setModal1Visible(false)" @cancel="() => setModal1Visible(false)">
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </ik-modal>
      <br />
      <br />
      <ik-button type="primary" @click="() => modal2Visible = true">Vertically centered modal dialog</ik-button>
      <ik-modal title="Vertically centered modal dialog" centered v-model="modal2Visible" @ok="() => modal2Visible = false">
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </ik-modal>
    </div>
  </codeBox>
</template>

<script>
import { customizedStyleModalCode } from './../codeExample'
export default {
  data () {
    return {
      customizedStyleModalCode,
      modal1Visible: false,
      modal2Visible: false
    }
  },
  methods: {
    setModal1Visible (modal1Visible) {
      this.modal1Visible = modal1Visible
    }
  }
}
</script>
