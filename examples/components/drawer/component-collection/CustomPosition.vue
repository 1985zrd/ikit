<template>
  <codeBox :title="title"
           :description="description"
           :code="customPosition">
    <ik-radio-group style="margin-right: 8px" :defaultValue="placement" @change="onChange">
      <ik-radio value="top">top</ik-radio>
      <ik-radio value="right">right</ik-radio>
      <ik-radio value="bottom">bottom</ik-radio>
      <ik-radio value="left">left</ik-radio>
    </ik-radio-group>
    <ik-button type="primary" @click="showDrawer">
      Open
    </ik-button>
    <ik-drawer
      title="Basic Drawer"
      :placement="placement"
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
import { customPosition } from '../codeExample'
export default {
  data () {
    return {
      title: '自定义位置',
      description: '自定义位置，点击触发按钮抽屉从相应的位置滑出，点击遮罩区关闭',
      customPosition,
      visible: false,
      placement: 'left'
    }
  },
  methods: {
    showDrawer () {
      this.visible = true
    },
    onClose () {
      this.visible = false
    },
    onChange (e) {
      this.placement = e.target.value
    }
  }
}
</script>
