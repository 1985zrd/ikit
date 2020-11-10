<template>
  <codeBox :title="title"
    :description="description"
    :code="base">
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
  </codeBox>
</template>
<script>
import { base } from '../code.js'
export default {
  name: 'loadingSkeleton',
  data () {
    return {
      title: '基本用法',
      description: '通过data属性或子组件都可以创建。',
      base,
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
