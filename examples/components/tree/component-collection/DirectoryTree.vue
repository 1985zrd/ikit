<template>
  <codeBox :title="title"
           :description="description"
           :code="directoryTree">
    <ik-directory-tree multiple
                      defaultExpandAll
                      @select="onSelect"
                      @expand="onExpand">
      <ik-tree-node title="parent 0"
                   key="0-0">
        <ik-tree-node title="leaf 0-0"
                     key="0-0-0"
                     isLeaf />
        <ik-tree-node title="leaf 0-1"
                     key="0-0-1"
                     isLeaf />
      </ik-tree-node>
      <ik-tree-node title="parent 1"
                   key="0-1">
        <ik-tree-node title="leaf 1-0"
                     key="0-1-0"
                     isLeaf />
        <ik-tree-node title="leaf 1-1"
                     key="0-1-1"
                     isLeaf />
      </ik-tree-node>
    </ik-directory-tree>
  </codeBox>
</template>
<script>
import { directoryTree } from '../codeExample'
export default {
  data () {
    return {
      title: '目录',
      description: '内置的目录树，multiple 模式支持 ctrl(Windows) / command(Mac) 复选。',
      directoryTree
    }
  },
  methods: {
    onSelect (keys) {
      console.log('Trigger Select', keys)
    },
    onExpand () {
      console.log('Trigger Expand')
    }
  }
}
</script>
