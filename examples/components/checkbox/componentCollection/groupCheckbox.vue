<template>
  <codeBox title="Checkbox组"
           description="方便的从数组生成checkbox"
           :code="groupCheckboxCode">
    <div>
        <ik-checkbox-group :options="plainOptions" v-model="value" @change="onChange" />
        <br />
        <ik-checkbox-group :options="plainOptions" :defaultValue="['Apple']" @change="onChange" />
        <br />
        <ik-checkbox-group :options="options" :value="['Pear']" @change="onChange" />
        <br />
        <ik-checkbox-group
          :options="optionsWithDisabled"
          disabled
          :defaultValue="['Apple']"
          @change="onChange"
        >
          <span style="color: red" slot="label" slot-scope="{value}">{{value}}</span>
        </ik-checkbox-group>
      </div>
  </codeBox>
</template>
<script>
import { groupCheckboxCode } from '../demoCode.js'
const plainOptions = ['Apple', 'Pear', 'Orange']
const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' }
]
const optionsWithDisabled = [
  { value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: false }
]
export default {
  name: 'groupCheckbox',
  data () {
    return {
      groupCheckboxCode,
      plainOptions,
      options,
      optionsWithDisabled,
      value: []
    }
  },
  methods: {
    onChange (checkedValues) {
      console.log('checked = ', checkedValues)
      console.log('value = ', this.value)
    }
  }
}
</script>
