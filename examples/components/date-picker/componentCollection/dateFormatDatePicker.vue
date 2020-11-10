<template>
  <codeBox title="日期格式"
           description="使用 format 属性，可以自定义日期显示格式。"
           :code="text">
    <div>
      <ik-date-picker :defaultValue="moment('2015/01/01', dateFormat)"
                      :format="dateFormat" />
      <br />
      <br />
      <ik-month-picker :defaultValue="moment('2015/01', monthFormat)"
                       :format="monthFormat" />
      <br />
      <br />
      <ik-range-picker :defaultValue="[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]"
                       :format="dateFormat" />
    </div>
  </codeBox>
</template>
<script>
import moment from 'moment'
import { dateFormatDatePickerText } from '../codeExample'
export default {
  data () {
    return {
      dateFormat: 'YYYY/MM/DD',
      monthFormat: 'YYYY/MM',
      text: dateFormatDatePickerText
    }
  },
  methods: {
    moment
  }
}
</script>
