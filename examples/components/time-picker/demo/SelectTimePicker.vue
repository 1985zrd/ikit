<template>
  <codeBox :title="title"
           :description="description"
           :code="code">
    <ik-time-picker :defaultValue="moment('12:08', 'HH:mm')"
                    format="HH:mm" />
  </codeBox>
</template>
<script>
import { selectTimePicker } from '../timePicker.js'
import moment from 'moment'

export default {
  data () {
    return {
      title: '选择时分',
      description: 'TimePicker 浮层中的列会随着 format 变化，当略去 format 中的某部分时，浮层中对应的列也会消失。',
      code: selectTimePicker,
      moment
    }
  }
}
</script>
