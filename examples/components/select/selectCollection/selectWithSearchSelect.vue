<template>
  <codeBox :title="title"
           :description="description"
           :code="selectWithSearchSelectCode">
    <ik-select showSearch
               placeholder="Select a person"
               optionFilterProp="children"
               style="width: 200px"
               @focus="handleFocus"
               @blur="handleBlur"
               @change="handleChange"
               :filterOption="filterOption">
      <ik-select-option value="jack">Jack</ik-select-option>
      <ik-select-option value="lucy">Lucy</ik-select-option>
      <ik-select-option value="tom">Tom</ik-select-option>
    </ik-select>
  </codeBox>
</template>
<script>
import { selectWithSearchSelectCode } from '../demoCode.js'
export default {
  name: 'selectWithSearchSelect',
  data () {
    return {
      title: '带搜索框',
      description: '展开后可对选项进行搜索。',
      selectWithSearchSelectCode
    }
  },
  methods: {
    handleChange (value) {
      console.log(`selected ${value}`)
    },
    handleBlur () {
      console.log('blur')
    },
    handleFocus () {
      console.log('focus')
    },
    filterOption (input, option) {
      return (
        option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
      )
    }
  }
}
</script>
