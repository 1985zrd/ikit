<template>
  <codeBox :title="title" :description="description" :code="smallSizeCode">
    <ik-steps :current="1" size="small">
      <ik-step title="Finished" />
      <ik-step title="In Progress" />
      <ik-step title="Waiting" />
    </ik-steps>
  </codeBox>
</template>
<script>
import { smallSizeCode } from '../codeExample'
export default {
  data () {
    return {
      title: '迷你版',
      description: '迷你版的步骤条，通过设置  size="small" 启用。',
      smallSizeCode
    }
  }
}
</script>
