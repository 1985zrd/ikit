<template>
  <codeBox :title="title"
           :description="description"
           :code="code">
    <ik-time-picker :defaultValue="moment('12:08:23', 'HH:mm:ss')"
                    size="large" />
    <ik-time-picker style="margin-left:20px"
                    :defaultValue="moment('12:08:23', 'HH:mm:ss')" />
    <ik-time-picker style="margin-left:20px"
                    :defaultValue="moment('12:08:23', 'HH:mm:ss')"
                    size="small" />
  </codeBox>
</template>
<script>
import { threeTimePicker } from '../timePicker.js'
import moment from 'moment'

export default {
  data () {
    return {
      title: '三种大小',
      description: '三种大小的输入框，大的用在表单中，中的为默认。',
      code: threeTimePicker,
      moment
    }
  }
}
</script>
