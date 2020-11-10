<template>
  <codeBox :title="title"
           :description="description"
           :code="customTreeNode">
    <ik-tree checkable
            :treeData="treeData"
            :defaultExpandedKeys="['0-0-0', '0-0-1']"
            :defaultSelectedKeys="['0-0-0', '0-0-1']"
            :defaultCheckedKeys="['0-0-0', '0-0-1']"
            @select="this.onSelect"
            @check="this.onCheck"
            :replaceFields="replaceFields" />
  </codeBox>
</template>
<script>
import { customTreeNode } from '../codeExample'
const treeData = [
  {
    name: 'parent 1',
    key: '0-0',
    child: [
      {
        name: '张晨成',
        key: '0-0-0',
        disabled: true,
        child: [
          { name: 'leaf', key: '0-0-0-0', disableCheckbox: true },
          { name: 'leaf', key: '0-0-0-1' }
        ]
      },
      {
        name: 'parent 1-1',
        key: '0-0-1',
        child: [{ key: '0-0-1-0', name: 'zcvc' }]
      }
    ]
  }
]

export default {
  data () {
    return {
      title: '自定义TreeNode字段',
      description: '替换treeNode中 title,key,children字段为treeData中对应的字段',
      customTreeNode,
      treeData,
      replaceFields: {
        children: 'child',
        title: 'name'
      }
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
