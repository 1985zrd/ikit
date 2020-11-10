<template>
  <codeBox title="带移除图标 " description="带移除图标的输入框，点击图标删除所有内容。" :code="clearIconInputCode">
    <ik-input placeholder="input with clear icon" allowClear @change="onChange" />
  </codeBox>
</template>
<script>
import { clearIconInputCode } from './../codeExample'
export default {
  data () {
    return {
      clearIconInputCode
    }
  },
  methods: {
    onChange (e) {
      console.log(e)
    }
  }
}
</script>
