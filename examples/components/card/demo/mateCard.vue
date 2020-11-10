<template>
  <codeBox title="更灵活的内容展示"
           :description="description"
           :code="mateCard">
    <template>
      <ik-card hoverable style="width: 240px">
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          slot="cover"
        />
        <ik-card-meta title="Europe Street beat">
          <template slot="description">www.instagram.com</template>
        </ik-card-meta>
      </ik-card>
    </template>
  </codeBox>
</template>
<script>
import { mateCard } from '../card'
export default {
  data () {
    return {
      mateCard,
      description: `可以利用 Card.Meta 支持更灵活的内容`
    }
  }
}
</script>
<style>

</style>
