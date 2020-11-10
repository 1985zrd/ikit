<template>
  <codeBox :title="title"
    :description="description"
    :code="redDot">
    <div id="components-badge-demo-dot">
      <ik-badge dot>
        <ik-icon type="notification" />
      </ik-badge>
      <ik-badge :count="0" dot>
        <ik-icon type="notification" />
      </ik-badge>
      <ik-badge dot>
        <a href="#">Link something</a>
      </ik-badge>
    </div>
  </codeBox>
</template>
<script>
import { redDot } from '../code.js'
export default {
  name: 'redDotBadge',
  data () {
    return {
      title: '小红点',
      description: '没有数字。',
      redDot
    }
  }
}
</script>
<style scoped>
.ant-badge {
  margin-right: 20px;
}
#components-badge-demo-dot .anticon-notification {
  width: 16px;
  height: 16px;
  line-height: 16px;
  font-size: 16px;
}
</style>
