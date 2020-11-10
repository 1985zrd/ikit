import { List } from 'ant-design-vue'
import PropTypes from 'prop-types'
/**
 * list-item组件中actions虽然使用时为slot的形式，但内部实际是使用props接受再渲染的
 * 所以需要将actions重新绑定下
 * */
export default {
  name: 'ik-list-item',
  inheritAttrs: false,
  functional: true,
  render (h, c) {
    let slotMap = c.slots()
    return (
      <List.Item
        {...c.data}
        scopedSlots={c.scopedSlots}
      >
        {slotMap.default}
      </List.Item>
    )
  }
}
