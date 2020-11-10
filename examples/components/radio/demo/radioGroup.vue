<template>
  <codeBox title="按钮样式 "
           description="按钮样式的单选组合。"
           :code="radioGroup">
    <ik-radio-group @change="onChange" v-model="value">
      <ik-radio :style="radioStyle" :value="1">Option A</ik-radio>
      <ik-radio :style="radioStyle" :value="2">Option B</ik-radio>
      <ik-radio :style="radioStyle" :value="3">Option C</ik-radio>
      <!-- <ik-radio :style="radioStyle" :value="4">
        More...
        <ik-input v-if="value === 4" :style="{ width: 100, marginLeft: 10 }" />
      </ik-radio> -->
    </ik-radio-group>
  </codeBox>
</template>
<script>
import { radioGroup } from '../radio'
export default {
  name: 'radioGroup',
  data () {
    return {
      radioGroup,
      value: 1,
      radioStyle: {
        display: 'block',
        height: '30px',
        lineHeight: '30px'
      }
    }
  },
  methods: {
    onChange (e) {
      console.log('radio checked', e.target.value)
    }
  }
}
</script>
