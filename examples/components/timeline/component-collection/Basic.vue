<template>
  <codeBox :title="title" :description="description" :code="BasicCode">
    <ik-timeline>
      <ik-timeline-item>Create a services site 2015-09-01</ik-timeline-item>
      <ik-timeline-item>Solve initial network problems 2015-09-01</ik-timeline-item>
      <ik-timeline-item>Technical testing 2015-09-01</ik-timeline-item>
      <ik-timeline-item>Network problems being solved 2015-09-01</ik-timeline-item>
    </ik-timeline>
  </codeBox>
</template>
<script>
import { BasicCode } from '../codeExample'
export default {
  data () {
    return {
      title: '基本用法',
      description: '基本的时间轴。',
      BasicCode
    }
  }
}
</script>
