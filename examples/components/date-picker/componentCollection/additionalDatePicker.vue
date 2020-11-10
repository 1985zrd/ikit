<template>
  <codeBox title="额外的页脚"
           description="在浮层中加入额外的页脚，以满足某些定制信息的需求。"
           :code="text">
    <div>
      <ik-date-picker>
        <template slot="renderExtraFooter">
          extra footer
        </template>
      </ik-date-picker>
      <br />
      <br />
      <ik-date-picker showTime>
        <template slot="renderExtraFooter">
          extra footer
        </template>
      </ik-date-picker>
      <br />
      <br />
      <ik-range-picker>
        <template slot="renderExtraFooter">
          extra footer
        </template>
      </ik-range-picker>
      <br />
      <br />
      <ik-range-picker showTime>
        <template slot="renderExtraFooter">
          extra footer
        </template>
      </ik-range-picker>
      <br />
      <br />
      <ik-month-picker placeholder="Select month">
        <template slot="renderExtraFooter">
          extra footer
        </template>
      </ik-month-picker>
    </div>
  </codeBox>
</template>
<script>
import { additionalDatePickerText } from '../codeExample'
export default {
  data () {
    return {
      text: additionalDatePickerText
    }
  }
}
</script>
