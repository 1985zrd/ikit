<template>
  <codeBox :title="title" :description="description" :code="AlternateCode">
    <ik-timeline mode="alternate">
      <ik-timeline-item>Create a services site 2015-09-01</ik-timeline-item>
      <ik-timeline-item color="green">Solve initial network problems 2015-09-01</ik-timeline-item>
      <ik-timeline-item>
        <ik-icon slot="dot" type="clock-circle-o" style="font-size: 16px;" />
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
        beatae vitae dicta sunt explicabo.
      </ik-timeline-item>
      <ik-timeline-item color="red">Network problems being solved 2015-09-01</ik-timeline-item>
      <ik-timeline-item>Create a services site 2015-09-01</ik-timeline-item>
      <ik-timeline-item>
        <ik-icon slot="dot" type="clock-circle-o" style="font-size: 16px;" />
        Technical testing 2015-09-01
      </ik-timeline-item>
    </ik-timeline>
  </codeBox>
</template>
<script>
import { AlternateCode } from '../codeExample'
export default {
  data () {
    return {
      title: '交替展现',
      description: '内容在时间轴两侧轮流出现。',
      AlternateCode
    }
  }
}
</script>
