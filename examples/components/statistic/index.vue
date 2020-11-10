<template>
  <div class="statistic">
    <Basic></Basic>
    <Unit></Unit>
    <UseInCard></UseInCard>
    <Countdown></Countdown>
    <MarkdownRender mdFileName="statistic"></MarkdownRender>
  </div>
</template>

<script>
import Basic from './component-collection/Basic'
import Unit from './component-collection/Unit'
import UseInCard from './component-collection/UseInCard'
import Countdown from './component-collection/Countdown'
export default {
  name: 'statistic-demo',
  data () {
    return {}
  },
  components: { Basic, Unit, UseInCard, Countdown },
  methods: {}
}
</script>

<style lang="scss" scoped>
.statistic {
}
</style>
