<template>
  <codeBox :title="title"
           :description="description"
           :code="basic">
    <ik-anchor>
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
import { basic } from '../codeExample'
export default {
  data () {
    return {
      title: '基本',
      description: '最简单的用法。',
      basic
    }
  }
}
</script>
