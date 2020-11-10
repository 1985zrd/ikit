<template>
  <codeBox :title="title" :description="description" :code="basicCode">
    <div>
      <ik-affix :offsetTop="this.top">
        <ik-button type="primary" @click="()=>{this.top += 10}">Affix top</ik-button>
      </ik-affix>
      <br />
      <ik-affix :offsetBottom="this.bottom">
        <ik-button type="primary" @click="()=>{this.bottom += 10}">Affix bottom</ik-button>
      </ik-affix>
    </div>
  </codeBox>
</template>
<script>
import { basicCode } from '../codeExample'
export default {
  data () {
    return {
      top: 10,
      bottom: 10,
      title: '基本用法',
      description: '最简单的用法。',
      basicCode
    }
  }
}
</script>
