// 导入组件，组件必须声明 name
import Skeleton from './src/Skeleton'

// 为组件提供 install 安装方法，供按需引入
Skeleton.install = function (Vue) {
  Vue.component(Skeleton.name, Skeleton)
}

// 默认导出组件
export default Skeleton
