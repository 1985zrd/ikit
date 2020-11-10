<template>
  <codeBox :title="title" :description="description" :code="ColorCode">
    <ik-timeline>
      <ik-timeline-item color="green">Create a services site 2015-09-01</ik-timeline-item>
      <ik-timeline-item color="green">Create a services site 2015-09-01</ik-timeline-item>
      <ik-timeline-item color="red">
        <p>Solve initial network problems 1</p>
        <p>Solve initial network problems 2</p>
        <p>Solve initial network problems 3 2015-09-01</p>
      </ik-timeline-item>
      <ik-timeline-item>
        <p>Technical testing 1</p>
        <p>Technical testing 2</p>
        <p>Technical testing 3 2015-09-01</p>
      </ik-timeline-item>
    </ik-timeline>
  </codeBox>
</template>
<script>
import { ColorCode } from '../codeExample'
export default {
  data () {
    return {
      title: '圆圈颜色',
      description: '圆圈颜色，绿色用于已完成、成功状态，红色表示告警或错误状态，蓝色可表示正在进行或其他默认状态。',
      ColorCode
    }
  }
}
</script>
