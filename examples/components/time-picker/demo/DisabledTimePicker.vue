<template>
  <codeBox :title="title"
           :description="description"
           :code="code">
    <ik-time-picker :defaultValue="moment('12:08:23', 'HH:mm:ss')"
                    disabled />
  </codeBox>
</template>
<script>
import { disabledTimePicker } from '../timePicker.js'
import moment from 'moment'

export default {
  data () {
    return {
      title: '禁用',
      description: '禁用时间选择。',
      code: disabledTimePicker,
      moment
    }
  }
}
</script>
