import { message } from 'ant-design-vue'

export default {
  name: 'ik-message',
  inheritAttrs: false,
  functional: true,
  info: message.info,
  success: message.success,
  error: message.error,
  warning: message.warning,
  warn: message.warn,
  loading: message.loading,
  open: message.open,
  config: message.config,
  destory: message.destroy,
  level: message.level,
  render (h, c) {
    return <message {...c.data}>{c.children}</message>
  }
}
