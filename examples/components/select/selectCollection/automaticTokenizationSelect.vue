<template>
  <codeBox :title="title"
           :description="description"
           :code="automaticTokenizationSelectCode">
    <ik-select mode="tags"
               style="width: 100%"
               :tokenSeparators="[',']"
               @change="handleChange">
      <ik-select-option v-for="i in 25"
                        :key="(i + 9).toString(36) + i">{{(i + 9).toString(36) + i}}</ik-select-option>
    </ik-select>
  </codeBox>
</template>
<script>
import { automaticTokenizationSelectCode } from '../demoCode.js'
export default {
  name: 'automaticTokenizationSelect',
  data () {
    return {
      title: '自动分词',
      description: '试下复制 露西,杰克 到输入框里。只在 tags 和 multiple 模式下可用。',
      automaticTokenizationSelectCode
    }
  },
  methods: {
    handleChange (value) {
      console.log(`selected ${value}`)
    }
  }
}
</script>
