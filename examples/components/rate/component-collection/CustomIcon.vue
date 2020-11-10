<template>
  <codeBox title="其他字符"
           description="可以将星星替换为其他字符，比如字母，数字，字体图标甚至中文。"
           :code="customIcon">
    <ik-rate allowHalf>
      <ik-icon slot="character" type="heart" />
    </ik-rate>
    <br />
    <ik-rate character="A" allowHalf style="fontSize: 36px" />
    <br />
    <ik-rate character="好" allowHalf />
    <br />
  </codeBox>
</template>
<script>
import { customIcon } from '../codeExample'
export default {
  data () {
    return {
      customIcon
    }
  }
}
</script>
