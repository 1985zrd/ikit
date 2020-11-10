
// 导入组件，组件必须声明 name
import Timeline from './src/Timeline'
import TimelineItem from './src/TimelineItem'

// 为组件提供 install 安装方法，供按需引入
Timeline.Item = TimelineItem
Timeline.install = function (Vue) {
  Vue.component(Timeline.name, Timeline)
  Vue.component(Timeline.Item.name, TimelineItem)
}
export { TimelineItem }
// 默认导出组件
export default Timeline
