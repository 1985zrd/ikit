<template>
  <codeBox :title="title" :description="description" :code="customeEmpty">
    <ik-empty image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original">
      <!-- <span slot="image"><img src="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original" alt=""> </span> -->
      <span slot="description"> Customize <a href="#API">Description</a> </span>
      <ik-button type="primary">Create Now</ik-button>
    </ik-empty>
  </codeBox>
</template>

<script>
import { customeEmpty } from './../codeExample'

export default {
  data () {
    return {
      customeEmpty,
      title: '自定义',
      description: '自定义图片、描述、附属内容。'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
