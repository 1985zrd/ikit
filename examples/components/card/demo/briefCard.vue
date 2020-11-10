<template>
  <codeBox title="简洁卡片"
           :description="description"
           :code="briefCard">
    <template>
      <ik-card style="width: 300px">
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </ik-card>
    </template>
  </codeBox>
</template>
<script>
import { briefCard } from '../card'
export default {
  data () {
    return {
      briefCard,
      description: `只包含内容区域。`
    }
  }
}
</script>
<style>

</style>
