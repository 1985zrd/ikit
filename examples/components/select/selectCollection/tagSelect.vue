<template>
  <codeBox :title="title"
           :description="description"
           :code="tagSelectCode">
    <ik-select mode="tags"
               style="width: 100%"
               @change="handleChange"
               placeholder="Tags Mode">
      <ik-select-option v-for="i in 25"
                        :key="(i + 9).toString(36) + i">{{(i + 9).toString(36) + i}}</ik-select-option>
    </ik-select>
  </codeBox>
</template>
<script>
import { tagSelectCode } from '../demoCode.js'
export default {
  name: 'tagSelect',
  data () {
    return {
      title: '标签',
      description: 'tags select，随意输入的内容（scroll the menu）',
      tagSelectCode
    }
  },
  methods: {
    handleChange (value) {
      console.log(`selected ${value}`)
    }
  }
}
</script>
