<template>
  <codeBox :title="title"
           :description="description"
           :code="code">
    <ik-time-picker @change="onChange"
                    :defaultOpenValue="moment('00:00:00', 'HH:mm:ss')" />
  </codeBox>
</template>
<script>
import { basicTimePicker } from '../timePicker.js'
import moment from 'moment'

export default {
  data () {
    return {
      title: '基本',
      description: '点击 TimePicker，然后可以在浮层中选择或者输入某一时间。',
      code: basicTimePicker,
      moment
    }
  },
  methods: {
    onChange (time, timeString) {
      console.log(time, timeString)
    }
  }
}
</script>
