<template>
  <codeBox title="基本"
           description="最简单的用法。"
           :code="radioBasics">
    <ik-radio>Radio</ik-radio>
  </codeBox>
</template>
<script>
import { radioBasics } from '../radio'
export default {
  name: 'radioBasics',
  data () {
    return {
      radioBasics
    }
  }
}
</script>
