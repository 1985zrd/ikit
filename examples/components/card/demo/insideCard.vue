<template>
  <codeBox title="内部卡片"
           :description="description"
           :code="insideCard">
    <template>
      <ik-card title="Card title">
        <p style="fontSize: 14px;color: rgba(0, 0, 0, 0.85); marginBottom: 16px;fontWeight: 500">
          Group title
        </p>
        <ik-card title="Inner card title">
          <a href="#" slot="extra">More</a>
          Inner Card content
        </ik-card>
        <ik-card title="Inner card title" :style="{ marginTop: '16px' }">
          <a href="#" slot="extra">More</a>
          Inner Card content
        </ik-card>
      </ik-card>
    </template>
  </codeBox>
</template>
<script>
import { insideCard } from '../card'
export default {
  data () {
    return {
      insideCard,
      description: `可以放在普通卡片内部，展示多层级结构的信息`
    }
  }
}
</script>
<style>

</style>
