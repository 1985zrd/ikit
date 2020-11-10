<template>
  <codeBox title="三种大小"
           description="三种大小的输入框，若不设置，则为 default。"
           :code="text">
    <div class="demo-item-area">
      <ik-radio-group v-model="size">
        <ik-radio-button value="large">Large</ik-radio-button>
        <ik-radio-button value="default">Default</ik-radio-button>
        <ik-radio-button value="small">Small</ik-radio-button>
      </ik-radio-group>
      <br /><br />
      <ik-date-picker :size="size" />
      <br />
      <br />
      <ik-month-picker :size="size"
                       placeholder="Select Month" />
      <br />
      <br />
      <ik-range-picker :size="size" />
      <br />
      <br />
      <ik-week-picker :size="size"
                      placeholder="Select Week" />
    </div>
  </codeBox>
</template>
<script>
import { sizeDatePickerText } from '../codeExample'
export default {
  data () {
    return {
      size: 'default',
      text: sizeDatePickerText
    }
  }
}
</script>
