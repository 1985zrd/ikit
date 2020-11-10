<template>
  <codeBox :title="title"
           :description="description"
           :code="code">
    <div>
      <ik-time-picker use12Hours
                      @change="onChange" />
      <ik-time-picker style="margin-left:20px"
                      use12Hours
                      format="h:mm:ss A"
                      @change="onChange" />
      <ik-time-picker style="margin-left:20px"
                      use12Hours
                      format="h:mm a"
                      @change="onChange" />
    </div>
  </codeBox>
</template>
<script>
import { twelveTimePicker } from '../timePicker.js'
export default {
  data () {
    return {
      title: '12 小时制',
      description: '12 小时制的时间选择器，默认的 format 为 h:mm:ss a。',
      code: twelveTimePicker
    }
  },
  methods: {
    onChange (time, timeString) {
      console.log(time, timeString)
    }
  }
}
</script>
