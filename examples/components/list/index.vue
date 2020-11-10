<template>
  <div>
    <BasicsList></BasicsList>
    <GridList></GridList>
    <LoadMoreList></LoadMoreList>
    <BootstrapGirdList></BootstrapGirdList>
    <SizeList></SizeList>
    <VerticlList></VerticlList>
    <ScrollAutoplayList></ScrollAutoplayList>
    <InfiniteList></InfiniteList>
    <MarkdownRender></MarkdownRender>
    <MarkdownRender mdFileName="list"></MarkdownRender>
  </div>
</template>
<script>
import BasicsList from './demo/basicsList'
import GridList from './demo/gridList'
import LoadMoreList from './demo/loadMoreList'
import BootstrapGirdList from './demo/bootstrapGripList'
import SizeList from './demo/sizeList'
import VerticlList from './demo/vreticlList'
import ScrollAutoplayList from './demo/scrollAutoplayList'
import InfiniteList from './demo/infiniteList'
export default {
  data () {
    return {

    }
  },
  components: {
    BasicsList,
    GridList,
    LoadMoreList,
    BootstrapGirdList,
    SizeList,
    VerticlList,
    ScrollAutoplayList,
    InfiniteList,
    MarkdownRender: () => import('../../apiDoc/list.md')
  }
}
</script>
<style lang="scss" scoped>
</style>
