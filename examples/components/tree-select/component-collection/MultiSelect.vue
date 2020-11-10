<template>
  <codeBox :title="title"
           :description="description"
           :code="multiSelect">
    <ik-tree-select showSearch
                   style="width: 300px"
                   :value="value"
                   :dropdownStyle="{ maxHeight: '400px', overflow: 'auto' }"
                   placeholder="Please select"
                   allowClear
                   multiple
                   treeDefaultExpandAll
                   @change="onChange"
                   @search="onSearch"
                   @select="onSelect">
      <ik-tree-select-node value="parent 1"
                          title="parent 1"
                          key="0-1">
        <ik-tree-select-node value="parent 1-0"
                            title="parent 1-0"
                            key="0-1-1">
          <ik-tree-select-node value="leaf1"
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
import { multiSelect } from '../codeExample'
export default {
  data () {
    return {
      title: '多选',
      description: '多选的树选择。',
      multiSelect,
      value: undefined
    }
  },
  methods: {
    onChange (value) {
      console.log(value)
      this.value = value
    },
    onSearch () {
      console.log(...arguments)
    },
    onSelect () {
      console.log(...arguments)
    }
  }
}
</script>
