<template>
  <codeBox :title="title"
           :description="description"
           :code="basic">
    <ik-button type="primary" @click="showDrawer">
      Open
    </ik-button>
    <ik-drawer
      title="Basic Drawer"
      placement="right"
      :closable="false"
      @close="onClose"
      :visible="visible"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </ik-drawer>
  </codeBox>
</template>
<script>
import { basic } from '../codeExample'
export default {
  data () {
    return {
      title: '基础抽屉',
      description: '基础抽屉，点击触发按钮抽屉从右滑出，点击遮罩区关闭',
      basic,
      visible: false
    }
  },
  methods: {
    showDrawer () {
      this.visible = true
    },
    onClose () {
      this.visible = false
    }
  }
}
</script>
