<template>
  <codeBox :title="title"
           :description="description"
           :code="basicCalendar">
    <ik-calendar @panelChange="onPanelChange" />
  </codeBox>
</template>
<script>
import { basicCalendar } from '../calendar.js'
export default {
  name: 'BasicCalendar',
  data () {
    return {
      title: '基本',
      description: '一个通用的日历面板，支持年/月切换。',
      basicCalendar
    }
  },
  methods: {
    onPanelChange (value, mode) {
      console.log(value, mode)
    }
  }
}
</script>
