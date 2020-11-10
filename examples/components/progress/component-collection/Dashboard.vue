<template>
  <codeBox :title="title" :description="description" :code="dashboard">
    <ik-progress type="dashboard" :percent="75" />
  </codeBox>
</template>
<script>
import { dashboard } from '../codeExample'
export default {
  data () {
    return {
      title: '仪表盘',
      description: '仪表盘格式，设置type="dashboard"',
      dashboard
    }
  }
}
</script>
