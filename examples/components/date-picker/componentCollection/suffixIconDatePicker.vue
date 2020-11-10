<template>
  <codeBox title="后缀图标"
           description="最简单的用法，在浮层中可以选择或者输入日期。"
           :code="text">
    <div>
      <ik-date-picker @change="onChange">
        <ik-icon slot="suffixIcon"
                 type="smile" />
      </ik-date-picker>
      <br />
      <br />
      <ik-month-picker @change="onChange"
                       placeholder="Select month">
        <ik-icon slot="suffixIcon"
                 type="smile" />
      </ik-month-picker>
      <br />
      <br />
      <ik-range-picker @change="onChange">
        <ik-icon slot="suffixIcon"
                 type="smile" />
      </ik-range-picker>
      <br />
      <br />
      <ik-week-picker @change="onChange"
                      placeholder="Select week">
        <ik-icon slot="suffixIcon"
                 type="smile" />
      </ik-week-picker>
      <br />
      <br />
      <ik-date-picker suffixIcon="ab"
                      @change="onChange" />
      <br />
      <br />
      <ik-month-picker suffixIcon="ab"
                       @change="onChange"
                       placeholder="Select month" />
      <br />
      <br />
      <ik-range-picker suffixIcon="ab"
                       @change="onChange" />
      <br />
      <br />
      <ik-week-picker suffixIcon="ab"
                      @change="onChange"
                      placeholder="Select week" />
    </div>
  </codeBox>
</template>
<script>
import { suffixIconDatePickerText } from '../codeExample'
export default {
  data () {
    return {
      text: suffixIconDatePickerText
    }
  },
  methods: {
    onChange (date, dateString) {
      console.log(date, dateString)
    }
  }
}
</script>
