<template>
  <div class="tree">
    <ControlledTree></ControlledTree>
    <Basic></Basic>
    <CustomTreeNode></CustomTreeNode>
    <CustomIcon></CustomIcon>
    <DragTree></DragTree>
    <AsyncDataTree></AsyncDataTree>
    <CableLineTree></CableLineTree>
    <SearchedTree></SearchedTree>
    <DirectoryTree></DirectoryTree>
    <MarkdownRender mdFileName="tree"></MarkdownRender>
  </div>
</template>

<script>
import ControlledTree from './component-collection/ControlledTree'
import Basic from './component-collection/Basic'
import CustomTreeNode from './component-collection/CustomTreeNode'
import CustomIcon from './component-collection/CustomIcon'
import DragTree from './component-collection/DragTree'
import AsyncDataTree from './component-collection/AsyncDataTree'
import CableLineTree from './component-collection/CableLineTree'
import SearchedTree from './component-collection/SearchedTree'
import DirectoryTree from './component-collection/DirectoryTree'
export default {
  name: 'tree-demo',
  data () {
    return {}
  },
  components: {
    ControlledTree,
    Basic,
    CustomTreeNode,
    CustomIcon,
    DragTree,
    AsyncDataTree,
    CableLineTree,
    SearchedTree,
    DirectoryTree
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.tree {
}
</style>
