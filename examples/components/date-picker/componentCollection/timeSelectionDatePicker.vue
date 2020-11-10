<template>
  <codeBox title="日期时间选择"
           description="增加选择时间功能，当 showTime 为一个对象时，其属性会传递给内建的 TimePicker"
           :code="text">
    <div>
      <ik-date-picker showTime
                      placeholder="Select Time"
                      @change="onChange"
                      @ok="onOk" />
      <br />
      <br />
      <ik-range-picker :showTime="{ format: 'HH:mm' }"
                       format="YYYY-MM-DD HH:mm"
                       :placeholder="['Start Time', 'End Time']"
                       @change="onChange"
                       @ok="onOk" />
    </div>
  </codeBox>
</template>
<script>
import { timeSelectionDatePickerText } from '../codeExample'
export default {
  data () {
    return {
      text: timeSelectionDatePickerText
    }
  },
  methods: {
    onChange (value, dateString) {
      console.log('Selected Time: ', value)
      console.log('Formatted Selected Time: ', dateString)
    },
    onOk (value) {
      console.log('onOk: ', value)
    }
  }
}
</script>
