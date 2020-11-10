<template>
  <codeBox title="基本用法"
           description="简单的checkbox"
           :code="basiCheckboxCode">
    <div>
      <ik-checkbox @change="onChange">Checkbox</ik-checkbox>
    </div>
  </codeBox>
</template>
<script>
import { basiCheckboxCode } from '../demoCode.js'
export default {
  name: 'basiCheckbox',
  data () {
    return {
      basiCheckboxCode
    }
  },
  methods: {
    onChange (e) {
      console.log(`checked = ${e.target.checked}`)
    }
  }
}
</script>
