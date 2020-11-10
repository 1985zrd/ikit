<template>
  <codeBox :title="title"
           :description="description"
           :code="customInput">
    <ik-auto-complete :dataSource="dataSource"
                     style="width: 200px"
                     @search="handleSearch"
                     @select="onSelect">
      <ik-textarea placeholder="input here"
                  class="custom"
                  style="height: 50px"
                  @keypress="handleKeyPress" />
    </ik-auto-complete>
  </codeBox>
</template>
<script>
import { customInput } from '../codeExample'
export default {
  data () {
    return {
      title: '自定义输入组件',
      description: '自定义输入组件。',
      customInput,
      dataSource: []
    }
  },
  methods: {
    onSelect (value) {
      console.log('onSelect', value)
    },
    handleSearch (value) {
      this.dataSource = !value ? [] : [value, value + value, value + value + value]
    },
    handleKeyPress (ev) {
      console.log('handleKeyPress', ev)
    }
  }
}
</script>
