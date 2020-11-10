<template>
  <codeBox :title="title"
           :description="description"
           :code="cableLine">
    <ik-tree showLine
            :defaultExpandedKeys="['0-0-0']"
            @select="onSelect">
      <ik-tree-node key="0-0">
        <span slot="title"
              style="color: #1890ff">parent 1</span>
        <ik-tree-node title="parent 1-0"
                     key="0-0-0">
          <ik-tree-node title="leaf"
                       key="0-0-0-0" />
          <ik-tree-node title="leaf"
                       key="0-0-0-1" />
          <ik-tree-node title="leaf"
                       key="0-0-0-2" />
        </ik-tree-node>
        <ik-tree-node title="parent 1-1"
                     key="0-0-1">
          <ik-tree-node title="leaf"
                       key="0-0-1-0" />
        </ik-tree-node>
        <ik-tree-node title="parent 1-2"
                     key="0-0-2">
          <ik-tree-node title="leaf"
                       key="0-0-2-0" />
          <ik-tree-node title="leaf"
                       key="0-0-2-1" />
        </ik-tree-node>
      </ik-tree-node>
    </ik-tree>
  </codeBox>
</template>

<script>
import { cableLine } from '../codeExample'
export default {
  data () {
    return {
      title: '连接线',
      description: '带连接线的树。',
      cableLine
    }
  },
  methods: {
    onSelect (selectedKeys, info) {
      console.log('selected', selectedKeys, info)
    }
  }
}
</script>
