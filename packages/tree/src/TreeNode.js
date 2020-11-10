
import { Tree } from 'ant-design-vue'
export default {
  name: 'ik-tree-node',
  inheritAttrs: false,
  functional: true,
  __ANT_TREE_NODE: true,
  render (h, c) {
    const slotMap = c.slots()
    return <Tree.TreeNode {...c.data} scopedSlots={c.scopedSlots}>
      {Object.keys(slotMap).map(
        slotName => h('template', { slot: slotName }, slotMap[slotName])
      )}
    </Tree.TreeNode>
  }
}
