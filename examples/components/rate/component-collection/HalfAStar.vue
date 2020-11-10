<template>
  <codeBox title="半星"
           description="支持选中半星。"
           :code="halfAStar">
    <ik-rate :defaultValue="2.5"
            allowHalf />
  </codeBox>
</template>
<script>
import { halfAStar } from '../codeExample'
export default {
  data () {
    return {
      halfAStar
    }
  }
}
</script>
