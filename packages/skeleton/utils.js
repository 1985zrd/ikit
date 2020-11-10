export function createChildren (h, presetData) {
  return presetData.map(item => {
    return h(item.type, {
      'attrs': {
        'x': item.x || 0, // x轴坐标
        'y': item.y || 0, // y轴坐标
        'cx': item.x || 0, // 圆的x轴坐标
        'cy': item.y || 0, // 圆的y轴坐标
        'r': item.r || 0, // 圆的半径
        'width': item.width || 0, // 矩形的宽
        'height': item.height || 0, // 矩形的高
        'rx': item.radius || item.rx || (typeof item.radius === 'undefined' && typeof item.rx === 'undefined' ? 4 : 0), // 矩形x轴的圆角，优先使用radius统一圆角
        'ry': item.radius || item.ry || (typeof item.radius === 'undefined' && typeof item.ry === 'undefined' ? 4 : 0), // 矩形y轴的圆角
        'points': item.points || '' // 多边形的坐标点
      }
    })
  })
}

const stop = [
  {
    'offset': '0%',
    'values': '-2; 1'
  },
  {
    'offset': '50%',
    'values': '-1.5; 1.5'
  },
  {
    'offset': '100%',
    'values': '-1; 2'
  }
]
export function createLinearGradient (h, props) {
  let stopElement = stop.map((item, index) => {
    return h('stop', {
      'attrs': {
        'offset': item.offset,
        'stop-color': index === 1 ? props.secondaryColor : props.primaryColor,
        'stop-opacity': 1
      }
    }, [props.animate ? h('animate', {
      'attrs': {
        'attributeName': 'offset',
        'values': item.values,
        'dur': props.time + 's',
        'repeatCount': 'indefinite'
      }
    }) : null])
  })
  return h('linearGradient', {
    'attrs': {
      'id': props.idGradient
    }
  }, stopElement)
}

export function createRect (h, props) {
  return h('rect', {
    style: {
      'fill': props.idGradient ? 'url(' + '#' + props.idGradient + ')' : ''
    },
    attrs: {
      'clip-path': props.id ? 'url(' + '#' + props.id + ')' : '',
      'x': props.x ? props.x : '0',
      'y': props.y ? props.y : '0',
      'rx': props.radius ? props.radius : 0,
      'ry': props.radius ? props.radius : 0,
      'width': props.width,
      'height': props.height
    }
  })
}

export function uid () {
  return Math.random().toString(36).substring(2)
}
