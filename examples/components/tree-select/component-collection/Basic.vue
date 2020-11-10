<template>
  <codeBox :title="title"
           :description="description"
           :code="basic">
    <ik-tree-select showSearch
                   style="width: 300px"
                   :value="value"
                   :dropdownStyle="{ maxHeight: '400px', overflow: 'auto' }"
                   placeholder="Please select"
                   allowClear
                   treeDefaultExpandAll
                   @change="onChange">
      <ik-tree-select-node value="parent 1"
                          title="parent 1"
                          key="0-1">
        <ik-tree-select-node value="parent 1-0"
                            title="parent 1-0"
                            key="0-1-1">
          <ik-tree-select-node :selectable="false"
                              value="leaf1"
                              title="my leaf"
                              key="random" />
          <ik-tree-select-node value="leaf2"
                              title="your leaf"
                              key="random1" />
        </ik-tree-select-node>
        <ik-tree-select-node value="parent 1-1"
                            title="parent 1-1"
                            key="random2">
          <ik-tree-select-node value="sss"
                              key="random3">
            <b style="color: #08c"
               slot="title">sss</b>
          </ik-tree-select-node>
        </ik-tree-select-node>
      </ik-tree-select-node>
    </ik-tree-select>
  </codeBox>
</template>

<script>
import { basic } from '../codeExample'
export default {
  data () {
    return {
      title: '基本用法',
      description: '最简单的用法。',
      basic,
      treeExpandedKeys: [],
      value: undefined
    }
  },
  methods: {
    onChange (value) {
      console.log(value)
      this.value = value
    }
  }
}
</script>
