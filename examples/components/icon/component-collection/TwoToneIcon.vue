<template>
  <codeBox title="多色图标"
           :description="description"
           :code="twoToneIcon">
    <div class="icons-list">
      <ik-icon type="smile"
              theme="twoTone" />
      <ik-icon type="heart"
              theme="twoTone"
              twoToneColor="#eb2f96" />
      <ik-icon type="check-circle"
              theme="twoTone"
              twoToneColor="#52c41a" />
    </div>
  </codeBox>
</template>

<script>
import { twoToneIcon } from './../codeExample'

export default {
  data () {
    return {
      twoToneIcon,
      description: '可以通过设置 theme 属性为 twoTone 来渲染双色图标，并且可以设置主题色。'
    }
  }
}
</script>

<style scoped>
.icons-list >>> .anticon {
  margin-right: 12px;
  font-size: 24px;
}
</style>
