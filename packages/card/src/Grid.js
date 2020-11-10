import { Card } from 'ant-design-vue'
export default {
  name: 'ik-card-grid',
  inheritAttrs: false,
  functional: true,
  __ANT_CARD_GRID: true,
  render (h, c) {
    return <Card.Grid {...c.data}>{c.children}</Card.Grid>
  }
}
