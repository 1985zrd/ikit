<template>
  <codeBox :title="title" :description="description" :code="CustomCode">
    <ik-timeline>
      <ik-timeline-item>Create a services site 2015-09-01</ik-timeline-item>
      <ik-timeline-item>Solve initial network problems 2015-09-01</ik-timeline-item>
      <ik-timeline-item color="red">
        <ik-icon slot="dot" type="clock-circle-o" style="font-size: 16px;" />
        Technical testing 2015-09-01
      </ik-timeline-item>
      <ik-timeline-item>Network problems being solved 2015-09-01</ik-timeline-item>
    </ik-timeline>
  </codeBox>
</template>
<script>
import { CustomCode } from '../codeExample'
export default {
  data () {
    return {
      title: '自定义时间轴点',
      description: '基本的时间轴。',
      CustomCode
    }
  }
}
</script>
