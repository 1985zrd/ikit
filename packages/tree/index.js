
// 导入组件，组件必须声明 name
import Tree from './src/Tree'
import TreeNode from './src/TreeNode'
import DirectoryTree from './src/DirectoryTree'
import Base from '../base'

Tree.TreeNode = TreeNode
Tree.DirectoryTree = DirectoryTree

// 为组件提供 install 安装方法，供按需引入
Tree.install = function (Vue) {
  Vue.use(Base)
  Vue.component(Tree.name, Tree)
  Vue.component(TreeNode.name, TreeNode)
  Vue.component(DirectoryTree.name, DirectoryTree)
}

export { TreeNode, DirectoryTree }
// 默认导出组件
export default Tree
