<template>
  <codeBox :title="title" :description="description" :code="dynamicCircle">
    <ik-progress type="circle" :percent="percent" />
    <ik-button-group>
      <ik-button @click="decline" icon="minus" />
      <ik-button @click="increase" icon="plus" />
    </ik-button-group>
  </codeBox>
</template>
<script>
import { dynamicCircle } from '../codeExample'
export default {
  data () {
    return {
      title: '进度圈动态展示',
      description: '会动的进度条才是好进度条。',
      dynamicCircle,
      percent: 0
    }
  },
  methods: {
    increase () {
      let percent = this.percent + 10
      if (percent > 100) {
        percent = 100
      }
      this.percent = percent
    },
    decline () {
      let percent = this.percent - 10
      if (percent < 0) {
        percent = 0
      }
      this.percent = percent
    }
  }
}
</script>
