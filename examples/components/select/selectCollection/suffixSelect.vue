<template>
  <codeBox :title="title"
           :description="description"
           :code="suffixSelectCode">
    <ik-select defaultValue="lucy"
               style="width: 120px"
               @change="handleChange">
      <ik-icon slot="suffixIcon"
               type="smile" />
      <ik-select-option value="jack">Jack</ik-select-option>
      <ik-select-option value="lucy">Lucy</ik-select-option>
      <ik-select-option value="disabled"
                        disabled>Disabled</ik-select-option>
      <ik-select-option value="Yiminghe">yiminghe</ik-select-option>
    </ik-select>
    <ik-select defaultValue="lucy"
               style="width: 120px; margin-left:20px"
               disabled>
      <ik-icon slot="suffixIcon"
               type="meh" />
      <ik-select-option value="lucy">Lucy</ik-select-option>
    </ik-select>
  </codeBox>
</template>
<script>
import { suffixSelectCode } from '../demoCode.js'
export default {
  name: 'suffixSelect',
  data () {
    return {
      title: '后缀图标',
      description: '基本使用。',
      suffixSelectCode
    }
  },
  methods: {
    handleChange (value) {
      console.log(`selected ${value}`)
    }
  }
}
</script>
