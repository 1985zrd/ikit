<template>
  <codeBox title="清除"
           description="支持允许或者禁用清除。"
           :code="clear">
    <ik-rate :defaultValue="3" /> allowClear: true
    <br />
    <ik-rate :allowClear="false" :defaultValue="3" /> allowClear: false
    <br />
  </codeBox>
</template>
<script>
import { clear } from '../codeExample'
export default {
  data () {
    return {
      clear
    }
  }
}
</script>
