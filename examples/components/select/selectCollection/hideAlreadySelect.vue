<template>
  <codeBox :title="title"
           :description="description"
           :code="hideAlreadySelectCode">
    <ik-select mode="multiple"
               placeholder="Inserted are removed"
               :value="selectedItems"
               @change="handleChange"
               style="width: 100%">
      <ik-select-option v-for="item in filteredOptions"
                        :key="item"
                        :value="item">{{item}}</ik-select-option>
    </ik-select>
  </codeBox>
</template>
<script>
import { hideAlreadySelectCode } from '../demoCode.js'
const OPTIONS = ['Apples', 'Nails', 'Bananas', 'Helicopters']
export default {
  name: 'hideAlreadySelect',
  data () {
    return {
      title: '隐藏已选择选项',
      description: '隐藏下拉列表中已选择的选项。',
      hideAlreadySelectCode,
      selectedItems: []
    }
  },
  computed: {
    filteredOptions () {
      return OPTIONS.filter(o => !this.selectedItems.includes(o))
    }
  },
  methods: {
    handleChange (selectedItems) {
      this.selectedItems = selectedItems
    }
  }
}
</script>
s
