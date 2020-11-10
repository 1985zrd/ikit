<template>
  <codeBox title="只读"
           description="只读，无法进行鼠标交互。"
           :code="readonly">
    <ik-rate :defaultValue="2"
            disabled />
  </codeBox>
</template>
<script>
import { readonly } from '../codeExample'
export default {
  data () {
    return {
      readonly
    }
  }
}
</script>
