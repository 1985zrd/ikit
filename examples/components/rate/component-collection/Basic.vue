<template>
  <codeBox title="其他字符"
           description="可以将星星替换为其他字符，比如字母，数字，字体图标甚至中文。"
           :code="basic">
    <ik-rate v-model="value" />
  </codeBox>
</template>
<script>
import { basic } from '../codeExample'
export default {
  data () {
    return {
      basic,
      value: 2
    }
  }
}
</script>
