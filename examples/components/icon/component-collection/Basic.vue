<template>
  <codeBox title="基础用法"
           :description="description"
           :code="basic">
    <div class="icons-list">
      <ik-icon type="setting"
               theme="filled" />
      <ik-icon type="home" />
      <ik-icon type="smile"
               theme="outlined" />
      <ik-icon type="sync"
               spin />
      <ik-icon type="smile"
               :rotate="180" />
      <ik-icon type="loading" />
    </div>
  </codeBox>
</template>

<script>
import { basic } from './../codeExample'

export default {
  data () {
    return {
      basic,
      description: '使用 <Icon/> 标签声明组件，指定图标对应的 type 属性。可以通过 theme 属性来设置不同的主题风格的图标，也可以通过设置 spin 属性来实现动画旋转效果。'
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
