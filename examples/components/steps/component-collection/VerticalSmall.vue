<template>
 <codeBox :title="title" :description="description" :code="verticalSmallCode">
  <ik-steps direction="vertical" size="small" :current="1">
    <ik-step title="Finished" description="This is a description." />
    <ik-step title="In Progress" description="This is a description." />
    <ik-step title="Waiting" description="This is a description." />
  </ik-steps>
  </codeBox>
</template>
<script>
import { verticalSmallCode } from '../codeExample'
export default {
  data () {
    return {
      title: '竖直方向的小型步骤条',
      description: '简单的竖直方向的小型步骤条。',
      verticalSmallCode
    }
  }
}
</script>
