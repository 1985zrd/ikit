<template>
  <codeBox :title="title" :description="description" :code="miniVersionCode">
    <ik-pagination size="small" :total="50" />
     <br />
    <ik-pagination size="small" :total="50" showSizeChanger showQuickJumper />
     <br />
    <ik-pagination size="small" :total="50" :showTotal="total => `Total ${total} items`" />
  </codeBox>
</template>

<script>
import { miniVersionCode } from '../codeExample'
export default {
  data () {
    return {
      miniVersionCode,
      title: '迷你',
      description: '迷你版本。'
    }
  }
}
</script>

<style scoped>
#components-pagination-demo-mini .ant-pagination:not(:last-child) {
  margin-bottom: 24px;
}
</style>
