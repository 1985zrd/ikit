<template>
  <codeBox :title="title"
           :description="description"
           :code="optionGroupSelectCode">
    <ik-select defaultValue="lucy"
               style="width: 200px"
               @change="handleChange">
      <ik-select-opt-group>
        <span slot="label">
          <ik-icon type="user" />Manager
        </span>
        <ik-select-option value="jack">Jack</ik-select-option>
        <ik-select-option value="lucy">Lucy</ik-select-option>
      </ik-select-opt-group>
      <ik-select-opt-group label="Engineer">
        <ik-select-option value="Yiminghe">yiminghe</ik-select-option>
      </ik-select-opt-group>
    </ik-select>
  </codeBox>
</template>

<script>
import { optionGroupSelectCode } from '../demoCode.js'
export default {
  name: 'optionGroupSelect',
  data () {
    return {
      title: '分组',
      description: '用 OptGroup 进行选项分组。',
      optionGroupSelectCode
    }
  },
  methods: {
    handleChange (value) {
      console.log(`selected ${value}`)
    }
  }
}
</script>
