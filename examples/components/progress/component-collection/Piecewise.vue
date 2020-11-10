<template>
  <codeBox :title="title" :description="description" :code="piecewise">
    <ik-tooltip title="3 done / 3 in progress / 4 to do">
      <ik-progress :percent="60" :successPercent="30" />
    </ik-tooltip>
    <ik-tooltip title="3 done / 3 in progress / 4 to do">
      <ik-progress :percent="60" :successPercent="30" type="circle" />
    </ik-tooltip>
    <ik-tooltip title="3 done / 3 in progress / 4 to do">
      <ik-progress :percent="60" :successPercent="30" type="dashboard" />
    </ik-tooltip>
  </codeBox>
</template>
<script>
import { piecewise } from '../codeExample'
export default {
  data () {
    return {
      title: '分段进度条',
      description: '分段的进度条。',
      piecewise
    }
  }
}
</script>
