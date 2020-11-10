<template>
  <codeBox title="禁用"
           description="选择框的不可用状态。"
           :code="text">
    <div>
      <ik-date-picker :defaultValue="moment('2015-06-06', dateFormat)"
                      disabled />
      <br />
      <br />
      <ik-month-picker :defaultValue="moment('2015-06', 'YYYY-MM')"
                       disabled />
      <br />
      <br />
      <ik-range-picker :defaultValue="[moment('2015-06-06', dateFormat), moment('2015-06-06', dateFormat)]"
                       disabled />
    </div>
  </codeBox>
</template>
<script>
import moment from 'moment'
import { disableDatePickerText } from '../codeExample'
export default {
  data () {
    this.dateFormat = 'YYYY-MM-DD'
    return {
      text: disableDatePickerText
    }
  },
  methods: {
    moment
  }
}
</script>
