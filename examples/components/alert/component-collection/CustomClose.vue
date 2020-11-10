<template>
  <codeBox :title="title"
           :description="description"
           :code="customClose">
    <ik-alert message="Info Text" type="info" closeText="Close Now" />
  </codeBox>
</template>
<script>
import { customClose } from '../codeExample'
export default {
  data () {
    return {
      title: '自定义关闭',
      description: '可以自定义关闭，自定义的文字会替换原先的关闭 Icon。',
      customClose
    }
  }
}
</script>
