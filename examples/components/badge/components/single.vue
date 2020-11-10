<template>
  <codeBox :title="title"
    :description="description"
    :code="single">
    <ik-badge count="25" />
    <ik-badge
      count="4"
      :numberStyle="{backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset'}"
    />
    <ik-badge count="109" :numberStyle="{backgroundColor: '#52c41a'} " />
  </codeBox>
</template>
<script>
import { single } from '../code.js'
export default {
  name: 'singleBadge',
  data () {
    return {
      title: '独立使用',
      description: '不包裹任何元素即是独立使用，可自定样式展现。<br />在右上角的 badge 则限定为红色。',
      single
    }
  }
}
</script>
<style scoped>
.ant-badge {
  margin-right: 8px;
}
</style>
