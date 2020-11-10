
import { Tree } from 'ant-design-vue'
export default {
  name: 'ik-directory-tree',
  inheritAttrs: false,
  functional: true,
  render (h, c) {
    const slotMap = c.slots()
    return <Tree.DirectoryTree {...c.data} scopedSlots={c.scopedSlots}>
      {Object.keys(slotMap).map(
        slotName => h('template', { slot: slotName }, slotMap[slotName])
      )}
    </Tree.DirectoryTree>
  }
}
