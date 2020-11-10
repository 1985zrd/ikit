<template>
  <codeBox title="小数 " description="和原生的数字输入框一样，value 的精度由 step 的小数位数决定。" :code="decimalInputNumberCode">
    <ik-input-number :min="0" :max="10" :step="0.1" @change="onChange" />
  </codeBox>
</template>
<script>
import { decimalInputNumberCode } from './../codeExample'
export default {
  data () {
    return {
      decimalInputNumberCode
    }
  },
  methods: {
    onChange (value) {
      console.log('changed', value)
    }
  }
}
</script>
