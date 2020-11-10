
import { notification } from 'ant-design-vue'
export default {
  name: 'ik-notification',
  inheritAttrs: false,
  functional: true,
  success: notification.success,
  error: notification.error,
  info: notification.info,
  warning: notification.warning,
  warn: notification.warn,
  open: notification.open,
  close: notification.close,
  destroy: notification.destroy,
  config: notification.config,
  render (h, c) {
    const slotMap = c.slots()
    return <notification {...c.data} scopedSlots={c.scopedSlots}>
      {Object.keys(slotMap).map(
        slotName => h('template', { slot: slotName }, slotMap[slotName])
      )}
    </notification>
  }
}
