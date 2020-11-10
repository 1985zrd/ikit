<template>
  <codeBox :title="title" :description="description" :code="progressDotCode">
    <ik-steps progressDot :current="1">
      <ik-step title="Finished" description="This is a description." />
      <ik-step title="In Progress" description="This is a description." />
      <ik-step title="Waiting" description="This is a description." />
    </ik-steps>
  </codeBox>
</template>
<script>
import { progressDotCode } from '../codeExample'
export default {
  data () {
    return {
      title: '点状步骤条',
      description: '包含步骤点的进度条。',
      progressDotCode
    }
  }
}
</script>
