
import { TreeSelect } from 'ant-design-vue'
export default {
  name: 'ik-tree-select-node',
  inheritAttrs: false,
  functional: true,
  isTreeNode: true,
  render (h, c) {
    const slotMap = c.slots()
    return <TreeSelect.TreeNode {...c.data} scopedSlots={c.scopedSlots}>
      {Object.keys(slotMap).map(
        slotName => h('template', { slot: slotName }, slotMap[slotName])
      )}
    </TreeSelect.TreeNode>
  }
}
