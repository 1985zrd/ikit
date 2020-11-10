<template>
  <codeBox :title="title" :description="description" :code="iconCode">
    <ik-steps>
      <ik-step status="finish" title="Login">
        <ik-icon type="user" slot="icon" />
      </ik-step>
      <ik-step status="finish" title="Verification">
        <ik-icon type="solution" slot="icon" />
      </ik-step>
      <ik-step status="process" title="Pay">
        <ik-icon type="loading" slot="icon" />
      </ik-step>
      <ik-step status="wait" title="Done">
        <ik-icon type="smile-o" slot="icon" />
      </ik-step>
    </ik-steps>
  </codeBox>
</template>
<script>
import { iconCode } from '../codeExample'
export default {
  data () {
    return {
      title: '带图标的步骤条',
      description: '通过设置 `Steps.Step` 的 `icon` 属性，可以启用自定义图标。',
      iconCode
    }
  }
}
</script>
