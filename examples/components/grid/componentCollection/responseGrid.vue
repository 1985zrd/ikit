<template>
  <codeBox title="响应式布局  " :description="description" :code="responseGridCode">
    <ik-row>
      <ik-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10">Col</ik-col>
      <ik-col :xs="20" :sm="16" :md="12" :lg="8" :xl="4">Col</ik-col>
      <ik-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10">Col</ik-col>
    </ik-row>
  </codeBox>
</template>

<script>
import { responseGridCode } from './../codeExample'
export default {
  data () {
    return {
      responseGridCode,
      description: '参照 Bootstrap 的 响应式设计，预设六个响应尺寸：xs sm md lg xl xxl。'
    }
  }
}
</script>
