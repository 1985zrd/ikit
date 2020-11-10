<template>
  <codeBox :title="title"
           :description="description"
           :code="multipleSelectCode">
    <ik-select labelInValue
               :defaultValue="{ key: 'lucy' }"
               style="width: 120px"
               @change="handleChange">
      <ik-select-option value="jack">Jack (100)</ik-select-option>
      <ik-select-option value="lucy">Lucy (101)</ik-select-option>
    </ik-select>
  </codeBox>
</template>
<script>
import { multipleSelectCode } from '../demoCode.js'
export default {
  name: 'multipleSelect',
  data () {
    return {
      title: '多选',
      description: '多选，从已有条目中选择（scroll the menu）',
      multipleSelectCode
    }
  },
  methods: {
    handleChange (value) {
      console.log(value) // { key: "lucy", label: "Lucy (101)" }
    }
  }
}
</script>
