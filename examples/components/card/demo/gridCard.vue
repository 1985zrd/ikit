<template>
  <codeBox title="网格型内嵌卡片"
           :description="description"
           :code="girdCard">
    <template>
      <ik-card title="Card Title">
        <ik-card-grid style="width:25%;textAlign:'center'">Content</ik-card-grid>
        <ik-card-grid style="width:25%;textAlign:'center'">Content</ik-card-grid>
        <ik-card-grid style="width:25%;textAlign:'center'">Content</ik-card-grid>
        <ik-card-grid style="width:25%;textAlign:'center'">Content</ik-card-grid>
        <ik-card-grid style="width:25%;textAlign:'center'">Content</ik-card-grid>
        <ik-card-grid style="width:25%;textAlign:'center'">Content</ik-card-grid>
        <ik-card-grid style="width:25%;textAlign:'center'">Content</ik-card-grid>
      </ik-card>
    </template>
  </codeBox>
</template>
<script>
import { girdCard } from '../card'
export default {
  data () {
    return {
      girdCard,
      description: `一种常见的卡片内容区隔模式。`
    }
  }
}
</script>
<style>

</style>
