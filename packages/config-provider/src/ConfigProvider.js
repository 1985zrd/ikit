
import { ConfigProvider } from 'ant-design-vue'
export default {
  name: 'ik-config-provider',
  inheritAttrs: false,
  functional: true,
  render (h, c) {
    const slotMap = c.slots()
    return <ConfigProvider {...c.data} scopedSlots={c.scopedSlots}>
      {Object.keys(slotMap).map(slotName =>
        h('template', { slot: slotName }, slotMap[slotName])
      )}
    </ConfigProvider>
  }
}
