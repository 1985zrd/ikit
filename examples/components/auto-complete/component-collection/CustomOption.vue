<template>
  <codeBox :title="title"
           :description="description"
           :code="customOptions">
    <ik-auto-complete style="width: 200px"
                     @search="handleSearch"
                     placeholder="input here">
      <template slot="dataSource">
        <ik-select-option v-for="email in result"
                         :key="email">{{email}}</ik-select-option>
      </template>
    </ik-auto-complete>
  </codeBox>
</template>
<script>
import { customOptions } from '../codeExample'
export default {
  data () {
    return {
      title: '自定义选项',
      description: '也可以直接传递slot="dataSource"的Option',
      customOptions,
      result: []
    }
  },
  methods: {
    handleSearch (value) {
      let result
      if (!value || value.indexOf('@') >= 0) {
        result = []
      } else {
        result = ['gmail.com', '163.com', 'qq.com'].map(domain => `${value}@${domain}`)
      }
      this.result = result
    }
  }
}
</script>
