<template>
  <codeBox :title="title"
           :description="description"
           :code="small">
    <div style="width: 170px">
      <ik-progress :percent="30"
                  size="small" />
      <ik-progress :percent="50"
                  size="small"
                  status="active" />
      <ik-progress :percent="70"
                  size="small"
                  status="exception" />
      <ik-progress :percent="100"
                  size="small" />
    </div>
  </codeBox>
</template>
<script>
import { small } from '../codeExample'
export default {
  data () {
    return {
      title: '小型进度条',
      description: '适合放在较狭窄的区域内。',
      small
    }
  }
}
</script>
