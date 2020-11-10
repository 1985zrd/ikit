<template>
  <codeBox title="无边框"
           :description="description"
           :code="nobordercard">
    <template>
      <div style="background:#ECECEC; padding:30px">
        <ik-card title="Card title" :bordered="false" style="width: 300px">
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </ik-card>
      </div>
    </template>
  </codeBox>
</template>
<script>
import { nobordercard } from '../card'
export default {
  data () {
    return {
      nobordercard,
      description: `在灰色背景上使用无边框的卡片`
    }
  }
}
</script>
<style>

</style>
