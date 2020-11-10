<template>
  <codeBox :title="title"
           :description="description"
           :code="code">
    <ik-time-picker :minuteStep="15"
                    :secondStep="10" />
  </codeBox>
</template>
<script>
import { stepTimePicker } from '../timePicker.js'

export default {
  data () {
    return {
      title: '步长选项',
      description: '可以使用 hourStep minuteStep secondStep 按步长展示可选的时分秒。',
      code: stepTimePicker
    }
  }
}
</script>
