<template>
  <codeBox title="典型卡片"
           :description="description"
           :code="typicalCard">
    <template>
      <div>
        <ik-card title="Default size card" style="width: 300px">
          <a href="#" slot="extra">more</a>
          <p>card content</p>
          <p>card content</p>
          <p>card content</p>
        </ik-card>
        <br />
        <ik-card size="small" title="Small size card" style="width: 300px">
          <a href="#" slot="extra">more</a>
          <p>card content</p>
          <p>card content</p>
          <p>card content</p>
        </ik-card>
      </div>
    </template>
  </codeBox>
</template>
<script>
import { typicalCard } from '../card'
export default {
  data () {
    return {
      typicalCard,
      description: `包含标题、内容、操作区域。<br/>
      可通过设置size为default或者small，控制尺寸`
    }
  }
}
</script>
<style>

</style>
