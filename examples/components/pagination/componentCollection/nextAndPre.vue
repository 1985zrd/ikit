<template>
  <codeBox :title="title" :description="description" :code="nextAndPreCode">
    <ik-pagination :total="500" :itemRender="itemRender" />
  </codeBox>
</template>

<script>
import { nextAndPreCode } from '../codeExample'
export default {
  data () {
    return {
      nextAndPreCode,
      title: '上一步和下一步',
      description: '修改上一步和下一步为文字链接。'
    }
  },
  methods: {
    itemRender (current, type, originalElement) {
      if (type === 'prev') {
        return <a>Previous</a>
      } else if (type === 'next') {
        return <a>Next</a>
      }
      return originalElement
    }
  }
}
</script>
