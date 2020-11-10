<template>
  <codeBox :title="title" :description="description" :code="basicPagingCode">
    <ik-pagination v-model="current" :total="50" />
  </codeBox>
</template>

<script>
import { basicPagingCode } from '../codeExample'
export default {
  data () {
    return {
      current: 2,
      basicPagingCode,
      title: '基本',
      description: '基础分页。'
    }
  }
}
</script>
