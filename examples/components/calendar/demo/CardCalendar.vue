<template>
  <codeBox :title="title"
           :description="description"
           :code="cardCalendar">
    <div :style="{ width: '300px', border: '1px solid #d9d9d9', borderRadius: '4px' }">
      <ik-calendar :fullscreen="false"
                   @panelChange="onPanelChange" />
    </div>
  </codeBox>
</template>
<script>
import { cardCalendar } from '../calendar.js'
export default {
  name: 'CardCalendar',
  data () {
    return {
      title: '卡片模式 ',
      description: '用于嵌套在空间有限的容器中。',
      cardCalendar
    }
  },
  methods: {
    onPanelChange (value, mode) {
      console.log(value, mode)
    }
  }
}
</script>
