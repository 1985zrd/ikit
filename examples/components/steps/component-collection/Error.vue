<template>
  <codeBox :title="title" :description="description" :code="errorCode">
    <ik-steps :current="1" status="error">
      <ik-step title="Finished" description="This is a description." />
      <ik-step title="In Progress" description="This is a description." />
      <ik-step title="Waiting" description="This is a description." />
    </ik-steps>
  </codeBox>
</template>
<script>
import { errorCode } from '../codeExample'
export default {
  data () {
    return {
      title: '步骤运行错误',
      description: '使用 Steps 的 `status` 属性来指定当前步骤的状态。',
      errorCode
    }
  }
}
</script>
