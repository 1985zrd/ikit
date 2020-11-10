const base = `
<template>
  <div>
    <ik-skeleton :data="shapeList" :height="340" style="border: 1px solid #eee"></ik-skeleton>
    <ik-skeleton :height="260" style="border: 1px solid #eee; margin-top: 10px;">
      <circle cx="80" cy="70" r="60" />
      <rect x="175" y="40" rx="4" ry="4" width="360" height="20" />
      <rect x="175" y="80" rx="4" ry="4" width="200" height="20" />
      <rect x="20" y="150" rx="4" ry="4" width="820" height="20" />
      <rect x="20" y="190" rx="4" ry="4" width="960" height="20" />
      <rect x="20" y="230" rx="4" ry="4" width="560" height="20" />
    </ik-skeleton>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        shapeList: [
          {
            type: 'circle',
            'x': 80, // x轴坐标
            'y': 70, // y轴坐标
            'r': 60 // 圆的半径
          },
          {
            type: 'rect',
            'x': 175, // x轴坐标
            'y': 40, // y轴坐标
            'width': 360, // 矩形的宽
            'height': 20, // 矩形的高
            'radius': 4 // 矩形圆角
          },
          {
            type: 'rect',
            'x': 175, // x轴坐标
            'y': 80, // y轴坐标
            'width': 200, // 矩形的宽
            'height': 20, // 矩形的高
            'radius': 4 // 矩形圆角
          },
          {
            type: 'rect',
            'x': 20, // x轴坐标
            'y': 150, // y轴坐标
            'width': 960, // 矩形的宽
            'height': 180, // 矩形的高
            'radius': 4 // 矩形圆角
          }
        ]
      }
    }
  }
</script>
`
const setData = `
<template>
  <div>
    <ik-skeleton
      :width="width"
      :height="height"
      :primaryColor="primaryColor"
      :secondaryColor="secondaryColor"
      :animate="animate"
      :data="shapeList"
      style="border: 1px solid #eee"
    ></ik-skeleton>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        shapeList: [
          {
            type: 'rect',
            'x': 0, // x轴坐标
            'y': 0, // y轴坐标
            'r': 100, // 圆的半径
            'width': 200, // 矩形的宽
            'height': 20, // 矩形的高
            'radius': 4, // 矩形圆角
            'points': '0 0, 100 0, 0 100' // 多边形的坐标点
          },
          {
            type: 'circle',
            'x': 0, // x轴坐标
            'y': 0, // y轴坐标
            'r': 100 // 圆的半径
          },
          {
            type: 'polygon',
            'points': '0 0, 100 0, 0 100' // 多边形的坐标点
          }
        ]
      }
    }
  }
</script>
`
const presets = `
<template>
  <div>
    <ik-skeleton type="code"></ik-skeleton>
    <ik-skeleton type="list"></ik-skeleton>
  </div>
</template>
<script>
  export default {}
</script>
`
const loadingCode = `
<template>
  <ik-skeleton type="list" :loading="loading">
    <div slot="content">loading为true</div>
  </ik-skeleton>
  <ik-switch v-model="loading" style="margin-top: 10px;"></ik-switch>
</template>
<script>
export default {
  name: 'loadingSkeleton',
  data () {
    return {
      loading: false
    }
  }
}
</script>
`

export {
  base,
  setData,
  presets,
  loadingCode
}
