<template>
  <codeBox :title="title" :description="description" :code="sizeCode">
    <div>
      <ik-switch defaultChecked />
      <br />
      <ik-switch size="small" defaultChecked />
    </div>
  </codeBox>
</template>
<script type="text/ecmascript-6">
import { sizeCode } from '../codeExample'
export default {
  name: 'size',
  data () {
    return {
      title: '两种大小',
      description: '`size="small"` 表示小号开关。',
      sizeCode
    }
  }
}
</script>
