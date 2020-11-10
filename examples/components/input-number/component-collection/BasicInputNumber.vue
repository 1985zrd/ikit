<template>
  <codeBox title="基本" description="数字输入框。" :code="basicInputNumberCode">
    <ik-input-number :min="1" :max="10" v-model="value" @change="onChange" />
    当前值：{{value}}
  </codeBox>
</template>
<script>
import { basicInputNumberCode } from './../codeExample'
export default {
  data () {
    return {
      basicInputNumberCode,
      value: 3
    }
  },
  methods: {
    onChange (value) {
      console.log('changed', value)
    }
  }
}
</script>
