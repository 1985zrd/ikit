<template>
  <codeBox title="自定义日期范围选择"
           description="当 RangePicker 无法满足业务需求时，可以使用两个 DatePicker 实现类似的功能。"
           :code="text">
    <div>
      <ik-date-picker :disabledDate="disabledStartDate"
                      showTime
                      format="YYYY-MM-DD HH:mm:ss"
                      v-model="startValue"
                      placeholder="Start"
                      @openChange="handleStartOpenChange" />&nbsp;&nbsp;&nbsp;&nbsp;
      <ik-date-picker :disabledDate="disabledEndDate"
                      showTime
                      format="YYYY-MM-DD HH:mm:ss"
                      placeholder="End"
                      v-model="endValue"
                      :open="endOpen"
                      @openChange="handleEndOpenChange" />
    </div>
  </codeBox>
</template>
<script>
import { customRangeDatePickerText } from '../codeExample'
export default {
  data () {
    return {
      startValue: null,
      endValue: null,
      endOpen: false,
      text: customRangeDatePickerText
    }
  },
  watch: {
    startValue (val) {
      console.log('startValue', val)
    },
    endValue (val) {
      console.log('endValue', val)
    }
  },
  methods: {
    disabledStartDate (startValue) {
      const endValue = this.endValue
      if (!startValue || !endValue) {
        return false
      }
      return startValue.valueOf() > endValue.valueOf()
    },
    disabledEndDate (endValue) {
      const startValue = this.startValue
      if (!endValue || !startValue) {
        return false
      }
      return startValue.valueOf() >= endValue.valueOf()
    },
    handleStartOpenChange (open) {
      if (!open) {
        this.endOpen = true
      }
    },
    handleEndOpenChange (open) {
      this.endOpen = open
    }
  }
}
</script>
