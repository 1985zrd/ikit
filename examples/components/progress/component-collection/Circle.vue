<template>
  <codeBox :title="title" :description="description" :code="circle">
    <ik-progress type="circle" :percent="75" />
    <ik-progress type="circle" :percent="70" status="exception" />
    <ik-progress type="circle" :percent="100" />
  </codeBox>
</template>
<script>
import { circle } from '../codeExample'
export default {
  data () {
    return {
      title: '进度圈',
      description: '圈形的进度。',
      circle
    }
  }
}
</script>
<style scoped>
  .ant-progress-circle-wrap,
  .ant-progress-line-wrap {
    margin-right: 8px;
    margin-bottom: 5px;
  }
</style>
