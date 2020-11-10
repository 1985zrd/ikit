<template>
  <codeBox :title="title"
           :description="description"
           :code="customIcon">
    <ik-tree :treeData="treeData"
            showIcon
            defaultExpandAll
            :defaultSelectedKeys="['0-0-0']">
      <ik-icon type="down"
              slot="switcherIcon" />
      <ik-icon slot="smile"
              type="smile-o" />
      <ik-icon slot="meh"
              type="smile-o" />
      <template slot="custom"
                slot-scope="{selected}">
        <ik-icon :type="selected ? 'frown':'frown-o'" />
      </template>
    </ik-tree>
  </codeBox>
</template>
<script>
import { customIcon } from '../codeExample'
const treeData = [
  {
    title: 'parent 1',
    key: '0-0',
    slots: {
      icon: 'smile'
    },
    children: [
      { title: 'leaf', key: '0-0-0', slots: { icon: 'meh' } },
      { title: 'leaf', key: '0-0-1', scopedSlots: { icon: 'custom' } }
    ]
  }
]

export default {
  data () {
    return {
      title: '自定义图标',
      description: '可以针对不同的节点定制图标。',
      customIcon,
      treeData
    }
  },
  methods: {
    onSelect (selectedKeys, info) {
      console.log('selected', selectedKeys, info)
    },
    onCheck (checkedKeys, info) {
      console.log('onCheck', checkedKeys, info)
    }
  }
}
</script>
