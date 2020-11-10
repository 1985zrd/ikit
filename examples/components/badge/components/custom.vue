<template>
  <codeBox :title="title"
    :description="description"
    :code="custom">
    <ik-badge :count="5" title="Custom hover text">
      <a href="#" class="head-example" />
    </ik-badge>
  </codeBox>
</template>
<script>
import { custom } from '../code.js'
export default {
  name: 'customBadge',
  data () {
    return {
      title: '自定义标题 ',
      description: '设置鼠标放在状态点上时显示的文字。',
      custom
    }
  }
}
</script>
<style scoped>
.head-example {
  width: 42px;
  height: 42px;
  border-radius: 4px;
  background: #eee;
  display: inline-block;
  vertical-align: middle;
}
</style>
