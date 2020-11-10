
import { LocaleProvider } from 'ant-design-vue'
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'

export default {
  name: 'ik-locale-provider',
  inheritAttrs: false,
  functional: true,
  render (h, c) {
    const slotMap = c.slots()
    return <LocaleProvider {...c.data} scopedSlots={c.scopedSlots} props={
      c.props.locale ? { locale: c.props.locale === 'zhCN' ? zhCN : c.props.locale } : { locale: null }
    }>
      {Object.keys(slotMap).map(slotName =>
        h('template', { slot: slotName }, slotMap[slotName])
      )}
    </LocaleProvider>
  }
}
