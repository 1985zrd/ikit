<template>
  <codeBox :title="title"
           :description="description"
           :code="code">
    <ik-time-picker @change="onChange"
                    :defaultOpenValue="moment('00:00:00', 'HH:mm:ss')">
      <ik-icon type="smile"
               slot="suffixIcon" />
    </ik-time-picker>
  </codeBox>
</template>
<script>
import { iconTimePicker } from '../timePicker.js'
import moment from 'moment'

export default {
  data () {
    return {
      title: '后缀图标',
      description: '点击 TimePicker，然后可以在浮层中选择或者输入某一时间。',
      code: iconTimePicker
    }
  },
  methods: {
    moment,
    onChange (time, timeString) {
      console.log(time, timeString)
    }
  }
}
</script>
