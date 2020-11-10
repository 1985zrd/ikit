<template>
  <codeBox :title="title"
    :description="description"
    :code="overflow">
    <ik-badge :count="99">
      <a href="#" class="head-example"></a>
    </ik-badge>
    <ik-badge :count="100">
      <a href="#" class="head-example"></a>
    </ik-badge>
    <ik-badge :count="99" :overflowCount="10">
      <a href="#" class="head-example"></a>
    </ik-badge>
    <ik-badge :count="1000" :overflowCount="999">
      <a href="#" class="head-example"></a>
    </ik-badge>
  </codeBox>
</template>
<script>
import { overflow } from '../code.js'
export default {
  name: 'overflowBadge',
  data () {
    return {
      title: '封顶数字',
      description: '超过 overflowCount 的会显示为 overflowCount+，默认的 overflowCount 为 99。',
      overflow
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
