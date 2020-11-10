<template>
  <codeBox :title="title"
           :description="description"
           :code="basicSelectCode">
    <ik-select defaultValue="lucy"
               style="width: 120px"
               @change="handleChange">
      <ik-select-option value="jack">Jack</ik-select-option>
      <ik-select-option value="lucy">Lucy</ik-select-option>
      <ik-select-option value="disabled"
                        disabled>Disabled</ik-select-option>
      <ik-select-option value="Yiminghe">yiminghe</ik-select-option>
    </ik-select>
    <ik-select defaultValue="lucy"
               style="width: 120px; margin-left:20px"
               disabled>
      <ik-select-option value="lucy">Lucy</ik-select-option>
    </ik-select>
    <ik-select defaultValue="lucy"
               style="width: 120px; margin-left:20px"
               loading>
      <ik-select-option value="lucy">Lucy</ik-select-option>
    </ik-select>
  </codeBox>
</template>
<script>
import { basicSelectCode } from '../demoCode.js'
export default {
  name: 'basicSelect',
  data () {
    return {
      title: '基本使用',
      description: '基本使用。',
      basicSelectCode
    }
  },
  methods: {
    handleChange (value) {
      console.log(`selected ${value}`)
    }
  }
}
</script>
