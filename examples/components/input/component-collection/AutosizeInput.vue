<template>
  <codeBox title="适应文本高度的文本域" description="autosize 属性适用于 textarea 节点，并且只有高度会自动变化。另外 autosize 可以设定为一个对象，指定最小行数和最大行数。" :code="autosizeInputCode">
    <ik-textarea placeholder="Autosize height based on content lines" autosize />
    <div style="margin: 24px 0" />
  </codeBox>
</template>

<script>
import { autosizeInputCode } from './../codeExample'
export default {
  data () {
    return {
      autosizeInputCode
    }
  }
}
</script>
