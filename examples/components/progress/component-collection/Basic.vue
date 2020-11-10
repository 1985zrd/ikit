<template>
  <codeBox :title="title" :description="description" :code="basic">
    <ik-progress :percent="30" />
    <ik-progress :percent="50"
                status="active" />
    <ik-progress :percent="70"
                status="exception" />
    <ik-progress :percent="100" />
    <ik-progress :percent="50"
                :showInfo="false" />
  </codeBox>
</template>
<script>
import { basic } from '../codeExample'
export default {
  data () {
    return {
      title: '进度条',
      description: '标准的进度条。',
      basic
    }
  }
}
</script>
