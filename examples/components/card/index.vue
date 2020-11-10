<template>
  <div>
    <TypicalCard></TypicalCard>
    <NoBorderCard></NoBorderCard>
    <MateCard></MateCard>
    <GridCard></GridCard>
    <LatticeCard></LatticeCard>
    <InsideCard></InsideCard>
    <LoadCard></LoadCard>
    <MoreCard></MoreCard>
    <BriefCard></BriefCard>
    <PageCard></PageCard>
    <MarkdownRender mdFileName="card"></MarkdownRender>

  </div>
</template>
<script>
import TypicalCard from './demo/typicalCard'
import NoBorderCard from './demo/noBorderCard'
import MateCard from './demo/mateCard'
import GridCard from './demo/gridCard'
import LatticeCard from './demo/latticeCard'
import InsideCard from './demo/insideCard'
import LoadCard from './demo/loadCard'
import MoreCard from './demo/moreCard'
import BriefCard from './demo/briefCard'
import PageCard from './demo/pageCard'
export default {
  data () {
    return {

    }
  },
  components: {
    TypicalCard,
    NoBorderCard,
    MateCard,
    GridCard,
    LatticeCard,
    InsideCard,
    LoadCard,
    MoreCard,
    BriefCard,
    PageCard,
    MarkdownRender: () => import('../../apiDoc/card.md')
  }
}
</script>
<style lang="scss" scoped>

</style>
