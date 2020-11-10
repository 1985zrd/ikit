<template>
  <codeBox :title="title"
           :description="description"
           :code="smallCircle">
    <ik-progress type="circle" :percent="30" :width="80" />
    <ik-progress type="circle" :percent="70" :width="80" status="exception" />
    <ik-progress type="circle" :percent="100" :width="80" />
  </codeBox>
</template>
<script>
import { smallCircle } from '../codeExample'
export default {
  data () {
    return {
      title: '小型进度圈',
      description: '小一号的圈形进度。',
      smallCircle
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
