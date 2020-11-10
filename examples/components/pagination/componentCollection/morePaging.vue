<template>
  <codeBox :title="title" :description="description" :code="morePagingCode">
    <ik-pagination :defaultCurrent="6" :total="500" />
  </codeBox>
</template>

<script>
import { morePagingCode } from '../codeExample'
export default {
  data () {
    return {
      morePagingCode,
      title: '更多',
      description: '更多分页。'
    }
  }
}
</script>
