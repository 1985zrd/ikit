<template>
  <codeBox :title="title" :description="description" :code="jumpPageCode">
    <ik-pagination showQuickJumper :defaultCurrent="2" :total="500" @change="onChange" />
  </codeBox>
</template>

<script>
import { jumpPageCode } from '../codeExample'
export default {
  data () {
    return {
      jumpPageCode,
      title: '跳转',
      description: '快速跳转到某一页。'
    }
  },
  methods: {
    onChange (pageNumber) {
      console.log('Page: ', pageNumber)
    }
  }
}
</script>
