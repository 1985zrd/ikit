<template>
  <div class="grid">
    <basicGrid></basicGrid>
    <flexAlignGrid></flexAlignGrid>
    <flexOrderGrid></flexOrderGrid>
    <flexLayoutGrid></flexLayoutGrid>
    <blockGrid></blockGrid>
    <offsetGrid></offsetGrid>
    <attributeGrid></attributeGrid>
    <responseGrid></responseGrid>
    <columnGrid></columnGrid>
    <configureGrid></configureGrid>
    <MarkdownRender mdFileName="grid"></MarkdownRender>
  </div>
</template>

<script>
import basicGrid from './componentCollection/basicGrid'
import flexAlignGrid from './componentCollection/flexAlignGrid'
import flexOrderGrid from './componentCollection/flexOrderGrid'
import flexLayoutGrid from './componentCollection/flexLayoutGrid'
import blockGrid from './componentCollection/blockGrid'
import offsetGrid from './componentCollection/offsetGrid'
import attributeGrid from './componentCollection/attributeGrid'
import responseGrid from './componentCollection/responseGrid'
import columnGrid from './componentCollection/columnGrid'
import configureGrid from './componentCollection/configureGrid'
export default {
  components: {
    basicGrid,
    flexAlignGrid,
    flexOrderGrid,
    flexLayoutGrid,
    blockGrid,
    offsetGrid,
    attributeGrid,
    responseGrid,
    columnGrid,
    configureGrid
  }
}
</script>

<style lang="less">
.grid{
  [class^="ant-row"]{
    text-align: center;
    background: #f5f5f5;
    [class^="ant-col"]{
      padding: 10px 0;
    }
    [class^="ant-col"]:nth-child(2n){
      background: rgba(0, 160, 233, 0.9);
    }
    [class^="ant-col"]:nth-child(2n+1){
      background: rgba(0, 160, 233, 0.6);
    }
  }
}
</style>
