<template>
  <codeBox :title="title"
           :description="description"
           :code="staticPosition">
    <ik-anchor :affix="false">
      <ik-anchor-link href="#components-anchor-demo-basic"
                     title="Basic demo" />
      <ik-anchor-link href="#components-anchor-demo-static"
                     title="Static demo" />
      <ik-anchor-link href="#API"
                     title="API">
        <ik-anchor-link href="#Anchor-Props"
                       title="Anchor Props" />
        <ik-anchor-link href="#Link-Props"
                       title="Link Props" />
      </ik-anchor-link>
    </ik-anchor>
  </codeBox>
</template>
<script>
import { staticPosition } from '../codeExample'
export default {
  data () {
    return {
      title: '静态位置',
      description: '不浮动，状态不随页面滚动变化。',
      staticPosition
    }
  }
}
</script>
