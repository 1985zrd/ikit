<template>
  <codeBox title="预设范围"
           description="可以预设常用的日期范围以提高用户体验。"
           :code="text">
    <div>
      <ik-range-picker :ranges="{ Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')] }"
                       @change="onChange" />
      <br />
      <br />
      <ik-range-picker :ranges="{ Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')] }"
                       showTime
                       format="YYYY/MM/DD HH:mm:ss"
                       @change="onChange" />
    </div>
  </codeBox>
</template>
<script>
import moment from 'moment'
import { presetRangeDatePickerText } from '../codeExample'
export default {
  data () {
    return {
      dateFormat: 'YYYY/MM/DD',
      monthFormat: 'YYYY/MM',
      text: presetRangeDatePickerText
    }
  },
  methods: {
    moment,
    onChange (dates, dateStrings) {
      console.log('From: ', dates[0], ', to: ', dates[1])
      console.log('From: ', dateStrings[0], ', to: ', dateStrings[1])
    }
  }
}
</script>
