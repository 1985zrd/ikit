import { createChildren, createLinearGradient, createRect, uid } from '../utils.js'
import presets, { presetHeight } from './presets'

export default {
  name: 'ik-skeleton',
  functional: true,
  props: {
    type: { // 类型[ code | list ] 不传就用'default',后期补充
      type: String,
      default: 'default'
    },
    width: { // svg viewBox的宽，类似于一个画布
      type: Number,
      default: 1000
    },
    height: { // svg viewBox的高
      type: Number,
      default: 400
    },
    time: { // 动画时长，需要animate为true是才有动画
      type: Number,
      default: 2
    },
    primaryColor: { // 底色
      type: String,
      default: '#EAEDF1'
    },
    secondaryColor: { // 动画的颜色
      type: String,
      default: 'rgba(255, 255, 255, 0.3)'
    },
    loading: { // 当slot='content'，loading为true时，页面显示content元素。loading为false时，显示默认slot或传入的data
      type: Boolean,
      default: false
    },
    animate: { // 是否开启动画
      type: Boolean,
      default: true
    },
    preserveAspectRatio: { // svg显示方式
      type: String,
      default: 'xMinYMin meet'
    },
    data: { // 可以传入一组数据或slot生成svg，数据格式见presets.js
      type: Array,
      default: undefined
    }
  },
  render (h, c) {
    const slotMap = c.slots()
    let props = c.props
    let data = c.data
    let id = uid() // 生成id，用于填充
    let idGradient = uid() // 生成id，用于动画
    let height = presetHeight[props.type] ? presetHeight[props.type].height : props.height // 预设高度
    if (props.loading) { // 如果loading为true，则渲染slot为content的子组件
      return h('div', {
        class: {
          'ik-skeleton-slot-content': true
        }
      }, slotMap.content || '')
    }
    const baseRect = createRect(h, { // 创建一个基础的矩形
      idGradient: idGradient,
      id: id,
      width: props.width,
      height: height
    })
    const noChildrenRect = createRect(h, { // 创建一个矩形
      radius: 5,
      width: props.width,
      height: height
    })
    const createLinearGradientElement = createLinearGradient(h, { // 赋予颜色或动画
      primaryColor: props.primaryColor,
      secondaryColor: props.secondaryColor,
      animate: props.animate,
      time: props.time,
      idGradient: idGradient
    })
    return h('svg', {
      ...data,
      attrs: {
        viewBox: '0 0 ' + props.width + ' ' + height,
        preserveAspectRatio: props.preserveAspectRatio
      }
    }, [baseRect, h('defs', [h('clipPath', { // 先创建了一个矩形，再通过defs填充
      attrs: {
        id: id
      }
    }, [(c.props.data ? createChildren(h, c.props.data) : (props.type && presets[props.type] ? createChildren(h, presets[props.type]) : slotMap.default)) || noChildrenRect]), createLinearGradientElement])])
  }
}
