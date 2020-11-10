import { Menu } from 'ant-design-vue'

export default {
  name: 'ik-menu',
  functional: true,
  render (h, c) {
    const slotMap = c.slots()

    if (c.data && c.data.on && c.data.on.click) {
      let { click: clickEvents } = c.data.on
      c.data.on.click = (e) => {
        if (e.hasOwnProperty('key')) {
          clickEvents(e)
        }
      }
    }

    let className = {}
    let attrs = c.data.attrs
    if (attrs) {
      let { showInlineCollapsedTwoLine, inlineCollapsedAttrName, ...otherAttrs } = attrs
      c.data.attrs = otherAttrs
      className = {
        'ik-menu ik-menu--collapsed ': inlineCollapsedAttrName,
        'ik-menu--collapsed--open': inlineCollapsedAttrName && attrs.inlineCollapsed,
        'ik-menu--inline-collapsed--two ': showInlineCollapsedTwoLine === true
      }
    }

    return <div class={className}>
      <Menu {...c.data} scopedSlots={c.scopedSlots}>
        {Object.keys(slotMap).map(slotName =>
          h('template', { slot: slotName }, slotMap[slotName])
        )}
      </Menu>
      {
        attrs && attrs.inlineCollapsedAttrName && <div class='ik-menu--toggle' onClick={() => {
          c.parent._data[attrs.inlineCollapsedAttrName] = !c.parent._data[attrs.inlineCollapsedAttrName]
        }}></div>
      }
    </div>
  }
}
