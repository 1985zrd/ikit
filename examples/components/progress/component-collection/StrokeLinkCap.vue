<template>
  <codeBox :title="title" :description="description" :code="strokeLinkCap">
    <ik-progress strokeLinecap="square" :percent="75" />
    <ik-progress strokeLinecap="square" :percent="75" type="circle" />
    <ik-progress strokeLinecap="square" :percent="75" type="dashboard" />
  </codeBox>
</template>
<script>
import { strokeLinkCap } from '../codeExample'
export default {
  data () {
    return {
      title: '圆角/方角边缘',
      description: 'strokeLinecap="square|round" 可以调整进度条边缘的形状。',
      strokeLinkCap
    }
  }
}
</script>
