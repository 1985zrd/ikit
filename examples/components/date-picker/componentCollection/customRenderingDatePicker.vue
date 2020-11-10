<template>
  <codeBox title="自定义渲染"
           description="增加自定义渲染功能，在默认 slot 中，你可以设置任何你想渲染的组件。"
           :code="text">
    <div>
      <ik-date-picker placeholder="Select Time"
                      v-model="time1"
                      @change="onChange"
                      @ok="onOk">
        <span>{{time1?time1:'SelectTime'}}</span>
      </ik-date-picker>
      <br />
      <br />
      <ik-range-picker v-model="time2">
        <span>
          {{time2?time2:'请选择'}}
        </span>
      </ik-range-picker>
    </div>
  </codeBox>
</template>
<script>
import { customRenderingDatePickerText } from '../codeExample'
export default {
  data () {
    return {
      time1: undefined,
      time2: undefined,
      text: customRenderingDatePickerText
    }
  },
  methods: {
    onChange (value, dateString) {
      console.log('Selected Time: ', value)
      console.log('Formatted Selected Time: ', dateString)
    },
    onOk (value) {
      console.log('onOk: ', value)
    },
    clearTime () {
      this.time1 = undefined
    }
  }
}
</script>
