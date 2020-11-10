<template>
  <codeBox :title="title"
           :description="description"
           :code="code">
    <div>
      <p>use value and @change</p>
      <ik-time-picker @change="onChange"
                      :value="value" />
      <br />
      <br />
      <p>v-model</p>
      <ik-time-picker v-model="value" />
      <br />
      <br />
      <p>Do not change</p>
      <ik-time-picker :value="value2" />
    </div>
  </codeBox>
</template>
<script>
import { controlledTimePicker } from '../timePicker.js'
import moment from 'moment'

export default {
  data () {
    return {
      title: '受控组件 ',
      description: 'value 和 onChange 需要配合使用。也可以直接使用v-model。',
      code: controlledTimePicker,
      value: null,
      value2: moment()
    }
  },
  methods: {
    onChange (time) {
      console.log(time)
      this.value = time
    }
  }
}
</script>
