<template>
  <codeBox :title="title" :description="description" :code="verticalCode">
    <ik-steps direction="vertical" :current="1">
      <ik-step title="Finished" description="This is a description." />
      <ik-step title="In Progress" description="This is a description." />
      <ik-step title="Waiting" description="This is a description." />
    </ik-steps>
  </codeBox>
</template>
<script>
import { verticalCode } from '../codeExample'
export default {
  data () {
    return {
      title: '竖直方向的步骤条',
      description: '简单的竖直方向的步骤条。',
      verticalCode
    }
  }
}
</script>
