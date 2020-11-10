<template>
  <codeBox title="基本"
           description="最简单的用法，在浮层中可以选择或者输入日期。"
           :code="text">
    <div>
      <ik-date-picker @change="onChange" />
      <br />
      <br />
      <ik-month-picker @change="onChange"
                       placeholder="Select month" />
      <br />
      <br />
      <ik-range-picker @change="onChange" />
      <br />
      <br />
      <ik-week-picker @change="onChange"
                      placeholder="Select week" />
    </div>
  </codeBox>
</template>
<script>
import { basicDatePickerText } from '../codeExample'
export default {
  data () {
    return {
      text: basicDatePickerText
    }
  },
  methods: {
    onChange (date, dateString) {
      console.log(date, dateString)
    }
  }
}
</script>
