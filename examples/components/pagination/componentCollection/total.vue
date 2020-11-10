<template>
  <codeBox :title="title" :description="description" :code="totalCode">
    <ik-pagination
      :total="85"
      :showTotal="total => `Total ${total} items`"
      :pageSize="20"
      :defaultCurrent="1"
    />
    <br />
    <ik-pagination
      :total="85"
      :showTotal="(total, range) => `${range[0]}-${range[1]} of ${total} items`"
      :pageSize="20"
      :defaultCurrent="1"
    />
  </codeBox>
</template>

<script>
import { totalCode } from '../codeExample'
export default {
  data () {
    return {
      totalCode,
      title: '总数',
      description: '通过设置showTotal展示有多少数据。'
    }
  }
}
</script>
