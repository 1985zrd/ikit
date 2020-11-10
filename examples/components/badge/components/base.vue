<template>
  <codeBox :title="title"
    :description="description"
    :code="base">
    <ik-badge count="5">
      <a href="#" class="head-example"></a>
    </ik-badge>
    <ik-badge count="0" showZero>
      <a href="#" class="head-example"></a>
    </ik-badge>
    <ik-badge>
      <ik-icon slot="count" type="clock-circle" style="color: #f5222d" />
      <a href="#" class="head-example"></a>
    </ik-badge>
    <ik-badge gray count="5">
      <a href="#" class="head-example"></a>
    </ik-badge>
  </codeBox>
</template>
<script>
import { base } from '../code.js'
export default {
  name: 'baseBadge',
  data () {
    return {
      title: '基本',
      description: '简单的徽章展示，当 count 为 0 时，默认不显示，但是可以使用 showZero 修改为显示。',
      base
    }
  }
}
</script>
<style scoped>
.ant-badge {
  margin-right: 20px;
}
.head-example {
  width: 42px;
  height: 42px;
  border-radius: 4px;
  background: #eee;
  display: inline-block;
  vertical-align: middle;
}
</style>
