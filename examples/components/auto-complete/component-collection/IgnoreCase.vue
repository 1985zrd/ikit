<template>
  <codeBox :title="title"
           :description="description"
           :code="ignoreCase">
    <ik-auto-complete :dataSource="dataSource"
                     style="width: 200px"
                     placeholder="input here"
                     :filterOption="filterOption" />
  </codeBox>
</template>
<script>
import { ignoreCase } from '../codeExample'
export default {
  data () {
    return {
      title: '不区分大小写',
      description: '不区分大小写的 AutoComplete',
      ignoreCase,
      dataSource: ['Burns Bay Road', 'Downing Street', 'Wall Street']
    }
  },
  methods: {
    filterOption (input, option) {
      return (
        option.componentOptions.children[0].text.toUpperCase().indexOf(input.toUpperCase()) >= 0
      )
    }
  }
}
</script>
