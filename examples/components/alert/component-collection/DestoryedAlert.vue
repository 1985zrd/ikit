<template>
  <codeBox :title="title"
           :description="description"
           :code="destoryedAlert">
    <ik-alert v-if="visible"
             message="Alert Message Text"
             type="success"
             closable
             :afterClose="handleClose" />
  </codeBox>
</template>
<script>
import { destoryedAlert } from '../codeExample'
export default {
  data () {
    return {
      title: '平滑地卸载',
      description: '平滑、自然的卸载提示。',
      destoryedAlert,
      visible: true
    }
  },
  methods: {
    handleClose () {
      this.visible = false
    }
  }
}
</script>
