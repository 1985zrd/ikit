<template>
  <codeBox :title="title" :description="description" :code="RighCode">
    <ik-timeline mode="right">
      <ik-timeline-item>Create a services site 2015-09-01</ik-timeline-item>
      <ik-timeline-item>Solve initial network problems 2015-09-01</ik-timeline-item>
      <ik-timeline-item>
        <ik-icon slot="dot" type="clock-circle-o" style="font-size: 16px;" />
        Technical testing 2015-09-01
      </ik-timeline-item>
      <ik-timeline-item>Network problems being solved 2015-09-01</ik-timeline-item>
    </ik-timeline>
  </codeBox>
</template>
<script>
import { RighCode } from '../codeExample'
export default {
  data () {
    return {
      title: '右侧时间轴点',
      description: '时间轴点可以在内容的右边。',
      RighCode
    }
  }
}
</script>
