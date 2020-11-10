<template>
  <codeBox :title="title"
           :description="description"
           :code="customClick">
    <ik-anchor :affix="false"
              @click="handleClick">
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
import { customClick } from '../codeExample'
export default {
  data () {
    return {
      title: '自定义 click 事件',
      description: '点击锚点不记录历史。',
      customClick
    }
  },
  methods: {
    handleClick (e, link) {
      e.preventDefault()
      console.log(link)
    }
  }
}
</script>
