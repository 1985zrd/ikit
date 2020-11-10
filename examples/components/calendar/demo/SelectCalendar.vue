<template>
  <codeBox :title="title"
           :description="description"
           :code="selectCalendar">
    <div>
      <ik-alert :message="'You selected date:' + selectedValue? selectedValue.format('YYYY-MM-DD'):''" />
      <div :style="{ display: 'inline-block', width: '500px', border: '1px solid #d9d9d9', borderRadius: '4px' }">
        <ik-calendar :value="value"
                     @select="onSelect"
                     @panelChange="onPanelChange" />
      </div>
      <div :style="{ display: 'inline-block', width: '500px',marginLeft: '20px', border: '1px solid #d9d9d9', borderRadius: '4px' }">
        <ik-calendar v-model="value1" />
      </div>
    </div>
  </codeBox>
</template>
<script>
import { selectCalendar } from '../calendar.js'
import moment from 'moment'

export default {
  data () {
    return {
      title: '选择功能',
      description: '一个通用的日历面板，支持年/月切换。',
      selectCalendar,
      value: moment('2017-01-25'),
      selectedValue: moment('2017-01-25'),
      value1: moment('2017-01-25')
    }
  },
  methods: {
    onSelect (value) {
      this.value = value
      this.selectedValue = value
    },
    onPanelChange (value) {
      this.value = value
    }
  }
}
</script>
