<template>
  <codeBox :title="title"
           :description="description"
           :code="basic">
    <ik-auto-complete :dataSource="dataSource"
                     style="width: 200px"
                     @select="onSelect"
                     @search="handleSearch"
                     placeholder="input here" />
  </codeBox>
</template>
<script>
import { basic } from '../codeExample'
export default {
  data () {
    return {
      title: '基本使用',
      description: '基本使用。通过 dataSource 设置自动完成的数据源',
      basic,
      dataSource: []
    }
  },
  methods: {
    handleSearch (value) {
      this.dataSource = !value ? [] : [value, value + value, value + value + value]
    },
    onSelect (value) {
      console.log('onSelect', value)
    }
  }
}
</script>
