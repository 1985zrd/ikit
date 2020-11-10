<template>
  <codeBox title="其他字符"
           description="可以将星星替换为其他字符，比如字母，数字，字体图标甚至中文。"
           :code="hasTextStar">
    <ik-rate :tooltips="desc"
            v-model="value" />
    <span class="ant-rate-text">{{desc[value - 1]}}</span>
  </codeBox>
</template>
<script>
import { hasTextStar } from '../codeExample'
export default {
  data () {
    return {
      hasTextStar,
      value: 3,
      desc: ['terrible', 'bad', 'normal', 'good', 'wonderful']
    }
  }
}
</script>
