<template>
  <codeBox title="三种大小" description="三种大小的数字输入框，当 size 分别为 large 和 small 时，输入框高度为 40px 和 24px ，默认高度为 32px。" :code="sizeInputNumberCode">
    <ik-input-number size="large" :min="1" :max="100000" :defaultValue="3" @change="onChange" />
    <ik-input-number :min="1" :max="100000" :defaultValue="3" @change="onChange" />
    <ik-input-number size="small" :min="1" :max="100000" :defaultValue="3" @change="onChange" />
  </codeBox>
</template>
<script>
import { sizeInputNumberCode } from './../codeExample'
export default {
  data () {
    return {
      sizeInputNumberCode
    }
  },
  methods: {
    onChange (value) {
      console.log('changed', value)
    }
  }
}
</script>
<style scoped>
.ant-input-number {
  margin-right: 10px;
}
</style>
