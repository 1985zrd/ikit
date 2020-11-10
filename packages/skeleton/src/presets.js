// 各类型必传的字段
// [
//   {
//     type: 'polygon', // 多边形
//     points: '100 300, 210 170, 100 300'
//   },
//   {
//     type: 'rect', // 矩形
//     x: 0,
//     y: 0,
//     width: 10,
//     height: 10
//   },
//   {
//     type: 'circle', // 圆
//     x: 0,
//     y: 0,
//     r: 10
//   }
// ]

const code = [
  {
    type: 'rect',
    x: 20,
    y: 10,
    width: 150,
    height: 20
  },
  {
    type: 'rect',
    x: 180,
    y: 10,
    width: 220,
    height: 20
  },
  {
    type: 'rect',
    x: 420,
    y: 10,
    width: 24,
    height: 20
  },
  {
    type: 'rect',
    x: 464,
    y: 10,
    width: 400,
    height: 20
  },
  {
    type: 'rect',
    x: 65,
    y: 54,
    width: 300,
    height: 20
  },
  {
    type: 'rect',
    x: 350,
    y: 54,
    width: 295,
    height: 20
  },
  {
    type: 'rect',
    x: 40,
    y: 98,
    width: 295,
    height: 20
  },
  {
    type: 'rect',
    x: 256,
    y: 98,
    width: 130,
    height: 20
  },
  {
    type: 'rect',
    x: 410,
    y: 98,
    width: 135,
    height: 20
  },
  {
    type: 'rect',
    x: 30,
    y: 142,
    width: 64,
    height: 20
  },
  {
    type: 'rect',
    x: 84,
    y: 142,
    width: 120,
    height: 20
  }
]

const list = [
  {
    type: 'circle',
    x: 38,
    y: 38,
    r: 18
  },
  {
    type: 'rect',
    x: 76,
    y: 28,
    width: 900,
    height: 20
  },
  {
    type: 'circle',
    x: 38,
    y: 94,
    r: 18
  },
  {
    type: 'rect',
    x: 76,
    y: 84,
    width: 900,
    height: 20
  },
  {
    type: 'circle',
    x: 38,
    y: 150,
    r: 18
  },
  {
    type: 'rect',
    x: 76,
    y: 140,
    width: 900,
    height: 20
  },
  {
    type: 'circle',
    x: 38,
    y: 206,
    r: 18
  },
  {
    type: 'rect',
    x: 76,
    y: 196,
    width: 900,
    height: 20
  }
]

export const presetHeight = {
  code: {
    height: 174
  },
  list: {
    height: 240
  }
}

export default {
  code,
  list
}
