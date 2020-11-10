import { List } from 'ant-design-vue'
export default {
  name: 'ik-list-item-meta',
  inheritAttrs: false,
  functional: true,
  __ANT_LIST_ITEM_META: true,
  render (h, c) {
    return <List.Item.Meta {...c.data}>{c.children}</List.Item.Meta>
  }
}
