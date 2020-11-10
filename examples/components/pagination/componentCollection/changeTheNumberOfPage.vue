<template>
    <codeBox :title="title" :description="description" :code="changeTheNumberOfPageCode">
      <ik-pagination
        showSizeChanger
        @showSizeChange="onShowSizeChange"
        :defaultCurrent="3"
        :total="500"
        />
        <br />
      <ik-pagination
        showSizeChanger
        :pageSize.sync="pageSize"
        @showSizeChange="onShowSizeChange"
        :total="500"
        v-model="current"
        />
    </codeBox>
</template>

<script>
import { changeTheNumberOfPageCode } from '../codeExample'
export default {
  data () {
    return {
      pageSize: 20,
      current: 4,
      changeTheNumberOfPageCode,
      title: '改变',
      description: '改变每页显示条目数。'
    }
  },
  watch: {
    pageSize (val) {
      console.log('pageSize', val)
    },
    current (val) {
      console.log('current', val)
    }
  },
  methods: {
    onShowSizeChange (current, pageSize) {
      console.log(current, pageSize)
    }
  }
}
</script>
