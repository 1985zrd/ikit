<template>
  <codeBox :title="title" :description="description" :code="loadingCode">
    <div>
      <ik-switch loading defaultChecked />
      <br />
      <ik-switch size="small" loading />
    </div>
  </codeBox>
</template>
<script type="text/ecmascript-6">
import { loadingCode } from '../codeExample'
export default {
  name: 'loading',
  data () {
    return {
      title: '加载中',
      description: '标识开关操作仍在执行中。',
      loadingCode
    }
  }
}
</script>
